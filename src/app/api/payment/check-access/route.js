import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(request) {
  try {
    const { templateId } = await request.json();

    if (!templateId) {
      return NextResponse.json({ hasAccess: false });
    }

    const cookieStore = await cookies();
    const paymentCookie = cookieStore.get("invitenest_payment_order");

    if (!paymentCookie) {
      return NextResponse.json({ hasAccess: false });
    }

    const paymentData = JSON.parse(paymentCookie.value);

    // Cookie wala template aur requested template same hona chahiye
    if (Number(paymentData.templateId) !== Number(templateId)) {
      return NextResponse.json({ hasAccess: false });
    }

    const accessRef = adminDb
      .collection("paidAccess")
      .doc(`${paymentData.orderId}_${paymentData.templateId}`);

    const accessSnap = await accessRef.get();

    if (!accessSnap.exists) {
      return NextResponse.json({ hasAccess: false });
    }

    const accessData = accessSnap.data();

    if (!accessData.paid) {
      return NextResponse.json({ hasAccess: false });
    }

    const expiresAt = accessData.expiresAt?.toDate();

    if (!expiresAt || expiresAt <= new Date()) {
      return NextResponse.json({ hasAccess: false });
    }

    return NextResponse.json({
      hasAccess: true,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (error) {
    console.error("Access Check Error:", error);

    return NextResponse.json(
      { hasAccess: false },
      { status: 500 }
    );
  }
}