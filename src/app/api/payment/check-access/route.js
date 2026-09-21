import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { verifyUser } from "@/lib/auth-server";

export async function POST(request) {
  try {
    const user = await verifyUser(request);

    if (!user) {
      return NextResponse.json(
        { hasAccess: false },
        { status: 401 },
      );
    }

    const { templateId } = await request.json();

    if (!templateId) {
      return NextResponse.json({ hasAccess: false });
    }

    // User + Template ke basis par access check
    const accessRef = adminDb
      .collection("paidAccess")
      .doc(`${user.uid}_${Number(templateId)}`);

    const accessSnap = await accessRef.get();

    if (!accessSnap.exists) {
      return NextResponse.json({ hasAccess: false });
    }

    const accessData = accessSnap.data();

    if (!accessData.paid) {
      return NextResponse.json({ hasAccess: false });
    }

    // Access user ke hi account ka hona chahiye
    if (accessData.uid !== user.uid) {
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
      { status: 500 },
    );
  }
}