import { NextResponse } from "next/server";
import templates from "@/data/templates";
import { verifyUser } from "@/lib/auth-server";

export async function POST(request) {
  try {
    
    const user = await verifyUser(request);

    if (!user) {
      return NextResponse.json({ error: "Login required" }, { status: 401 });
    }

    const { templateId } = await request.json();

    // Template check
    const template = templates.find((item) => item.id === Number(templateId));

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 },
      );
    }

    // Free template ke liye payment nahi
    if (template.price <= 0) {
      return NextResponse.json(
        { error: "This template is free" },
        { status: 400 },
      );
    }

    // Server khud price decide karega
    const amount = template.price;

    const orderId = `invitenest_${Date.now()}`;

    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.CASHFREE_CLIENT_ID,
        "x-client-secret": process.env.CASHFREE_CLIENT_SECRET,
        "x-api-version": "2025-01-01",
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",

        customer_details: {
          customer_id: `customer_${Date.now()}`,
          customer_name: "InviteNest User",
          customer_email: "test@example.com",
          customer_phone: "9999999999",
        },

        order_meta: {
          return_url: `http://localhost:3000/payment/success?order_id={order_id}`,
        },
      }),
    });

    const data = await response.json();
    console.log("CASHFREE CREATE ORDER RESPONSE:", data);

    if (!response.ok) {
      console.error("Cashfree Error:", data);

      return NextResponse.json({ error: data }, { status: response.status });
    }

    const result = NextResponse.json({
      order_id: data.order_id,
      payment_session_id: data.payment_session_id,
    });

    result.cookies.set(
      "invitenest_payment_order",
      JSON.stringify({
        orderId: data.order_id,
        templateId: template.id,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60,
        path: "/",
      },
    );

    return result;
  } catch (error) {
    console.error("Create Order Error:", error);

    return NextResponse.json(
      { error: "Payment order create nahi hua" },
      { status: 500 },
    );
  }
}
