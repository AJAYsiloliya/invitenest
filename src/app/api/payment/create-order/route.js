import { NextResponse } from "next/server";
import crypto from "crypto";
import templates from "@/data/templates";
import { verifyUser } from "@/lib/auth-server";
import { adminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(request) {
  try {
    const user = await verifyUser(request);

    if (!user) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }

    const { templateId } = await request.json();

    const template = templates.find((item) => item.id === Number(templateId));

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 },
      );
    }

    if (template.price <= 0) {
      return NextResponse.json(
        { error: "This template is free" },
        { status: 400 },
      );
    }

    const amount = Number(template.price).toFixed(2);
    const txnid = `INV_${Date.now()}`;
    const productinfo = template.name;

    // Firebase login se email
    const email = user.email;

    // Abhi PayU ke required customer fields ke liye
    const firstname = user.name || "InviteNest User";
    const phone = user.phone_number || "9999999999";

    const udf1 = "";
    const udf2 = "";
    const udf3 = "";
    const udf4 = "";
    const udf5 = "";

    const hashString =
      `${process.env.PAYU_MERCHANT_KEY}|` +
      `${txnid}|` +
      `${amount}|` +
      `${productinfo}|` +
      `${firstname}|` +
      `${email}|` +
      `${udf1}|` +
      `${udf2}|` +
      `${udf3}|` +
      `${udf4}|` +
      `${udf5}||||||` +
      `${process.env.PAYU_SALT}`;

    const hash = crypto.createHash("sha512").update(hashString).digest("hex");

    await adminDb.collection("paymentOrders").doc(txnid).set({
      txnid,
      uid: user.uid,
      templateId: template.id,
      amount,
      productinfo,
      status: "CREATED",
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({
      key: process.env.PAYU_MERCHANT_KEY,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      phone,

      surl: `${process.env.APP_URL}/api/payment/verify-order`,
      furl: `${process.env.APP_URL}/api/payment/verify-order`,

      udf1,
      udf2,
      udf3,
      udf4,
      udf5,

      hash,

      payuUrl: "https://secure.payu.in/_payment",

      templateId: template.id,
      uid: user.uid,
    });
  } catch (error) {
    console.error("PayU Create Order Error:", error);

    return NextResponse.json(
      { error: "Payment order create nahi hua" },
      { status: 500 },
    );
  }
}
