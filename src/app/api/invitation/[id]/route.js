import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { error: "Invitation ID is required." },
        { status: 400 },
      );
    }

    const docRef = adminDb.collection("invitations").doc(id);
    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      return NextResponse.json(
        { error: "Invitation not found." },
        { status: 404 },
      );
    }

    const data = snapshot.data();

    return NextResponse.json({
      id: snapshot.id,
      templateId: data.templateId,
      form: data.form,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to load invitation." },
      { status: 500 },
    );
  }
}