import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("order_id");

    if (!orderId) {
      return NextResponse.json({ error: "Order ID missing" }, { status: 400 });
    }

    // Payment wali cookie
    const cookieStore = await cookies();
    const paymentCookie = cookieStore.get("invitenest_payment_order");

    if (!paymentCookie) {
      return NextResponse.json(
        { error: "Payment session not found" },
        { status: 400 },
      );
    }

    const paymentData = JSON.parse(paymentCookie.value);

    // Order ID match hona chahiye
    if (paymentData.orderId !== orderId) {
      return NextResponse.json({ error: "Invalid order" }, { status: 400 });
    }

    const response = await fetch(
      `https://sandbox.cashfree.com/pg/orders/${orderId}`,
      {
        method: "GET",
        headers: {
          "x-client-id": process.env.CASHFREE_CLIENT_ID,
          "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
          "x-api-version": "2025-01-01",
        },
      },
    );

    const data = await response.json();

    console.log("Cashfree order response:", data);

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    // Payment successful hai
    if (data.order_status === "PAID") {
      const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

      await adminDb
        .collection("paidAccess")
        .doc(`${orderId}_${paymentData.templateId}`)
        .set({
          orderId: orderId,
          templateId: paymentData.templateId,
          paid: true,
          purchasedAt: FieldValue.serverTimestamp(),
          expiresAt: expiresAt,
        });

      return NextResponse.json({
        paid: true,
        order_id: orderId,
        templateId: paymentData.templateId,
        expiresAt: expiresAt.toISOString(),
      });
    }

    return NextResponse.json({
      paid: false,
      order_id: orderId,
      order_status: data.order_status,
    });
  } catch (error) {
    console.error("Verify Error:", error);

    return NextResponse.json(
      { error: "Payment verify nahi hua" },
      { status: 500 },
    );
  }
}
