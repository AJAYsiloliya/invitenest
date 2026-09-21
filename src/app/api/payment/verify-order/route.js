import { NextResponse } from "next/server";
import crypto from "crypto";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(request) {
  try {
    // PayU form-urlencoded response
    const formData = await request.formData();

    const responseData = Object.fromEntries(formData.entries());

    const {
      status,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      key,
      hash,
      udf1 = "",
      udf2 = "",
      udf3 = "",
      udf4 = "",
      udf5 = "",
      mihpayid,
    } = responseData;

    // Required fields
    if (
      !status ||
      !txnid ||
      !amount ||
      !productinfo ||
      !firstname ||
      !email ||
      !key ||
      !hash
    ) {
      return NextResponse.json(
        { error: "Invalid PayU response" },
        { status: 400 },
      );
    }

    // PayU merchant key check
    if (key !== process.env.PAYU_MERCHANT_KEY) {
      return NextResponse.json(
        { error: "Invalid merchant key" },
        { status: 400 },
      );
    }

    // Original payment order Firestore se
    const orderRef = adminDb.collection("paymentOrders").doc(txnid);
    const orderSnap = await orderRef.get();

    if (!orderSnap.exists) {
      return NextResponse.json(
        { error: "Payment order not found" },
        { status: 404 },
      );
    }

    const orderData = orderSnap.data();

    // Amount tamper check
    if (Number(amount).toFixed(2) !== Number(orderData.amount).toFixed(2)) {
      return NextResponse.json(
        { error: "Payment amount mismatch" },
        { status: 400 },
      );
    }

    // PayU reverse hash
    const reverseHashString =
      `${process.env.PAYU_SALT}|` +
      `${status}||||||` +
      `${udf5}|` +
      `${udf4}|` +
      `${udf3}|` +
      `${udf2}|` +
      `${udf1}|` +
      `${email}|` +
      `${firstname}|` +
      `${productinfo}|` +
      `${amount}|` +
      `${txnid}|` +
      `${key}`;

    const calculatedHash = crypto
      .createHash("sha512")
      .update(reverseHashString)
      .digest("hex");

    // Hash verify
    if (calculatedHash.toLowerCase() !== hash.toLowerCase()) {
      console.error("PayU response hash mismatch:", txnid);

      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 },
      );
    }

    // Payment failed / pending
    if (status !== "success") {
      await orderRef.update({
        status: "FAILED",
        payuStatus: status,
        mihpayid: mihpayid || null,
        updatedAt: FieldValue.serverTimestamp(),
      });

      return NextResponse.redirect(
        new URL(
          `/templates?payment=failed&txnid=${encodeURIComponent(txnid)}`,
          request.url,
        ),
      );
    }

    // Already processed
    if (orderData.status === "PAID") {
      return NextResponse.redirect(
        new URL(
          `/templates?payment=success&template=${orderData.templateId}`,
          request.url,
        ),
      );
    }

    // Payment order ko PAID mark karo
    await orderRef.update({
      status: "PAID",
      payuStatus: status,
      mihpayid: mihpayid || null,
      paidAt: FieldValue.serverTimestamp(),
    });

    // 30 days access
    const expiresAt = new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000,
    );

    // Paid access user ke saath bind hoga
    const accessId = `${orderData.uid}_${orderData.templateId}`;

    await adminDb
      .collection("paidAccess")
      .doc(accessId)
      .set({
        uid: orderData.uid,
        templateId: orderData.templateId,
        txnid,
        mihpayid: mihpayid || null,
        paid: true,
        purchasedAt: FieldValue.serverTimestamp(),
        expiresAt,
      });

    return NextResponse.redirect(
      new URL(
        `/templates?payment=success&template=${orderData.templateId}`,
        request.url,
      ),
    );
  } catch (error) {
    console.error("PayU Verify Error:", error);

    return NextResponse.json(
      { error: "Payment verify nahi hua" },
      { status: 500 },
    );
  }
}