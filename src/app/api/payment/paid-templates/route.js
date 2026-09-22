import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { verifyUser } from "@/lib/auth-server";

export async function GET(request) {
  try {
    const user = await verifyUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const snapshot = await adminDb
      .collection("paidAccess")
      .where("uid", "==", user.uid)
      .get();

    const now = new Date();

    const unlockedTemplates = snapshot.docs
      .map((doc) => {
        const data = doc.data();

        return {
          templateId: data.templateId,
          expiresAt: data.expiresAt?.toDate?.() ?? null,
        };
      })
      .filter(
        (item) =>
          item.expiresAt &&
          item.expiresAt > now
      );

    return NextResponse.json({
      unlockedTemplates,
    });
  } catch (error) {
    console.error("Paid templates error:", error);

    return NextResponse.json(
      { error: "Failed to load premium templates." },
      { status: 500 }
    );
  }
}