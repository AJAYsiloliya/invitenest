import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { verifyUser } from "@/lib/auth-server";

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

export async function DELETE(request, { params }) {
  try {
    const user = await verifyUser(request);

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 },
      );
    }

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

    // Sirf invitation ka owner delete kar sakta hai
    if (data.userId !== user.uid) {
      return NextResponse.json(
        { error: "You cannot delete this invitation." },
        { status: 403 },
      );
    }

    await docRef.delete();

    return NextResponse.json({
      success: true,
      message: "Invitation deleted successfully.",
    });
  } catch (error) {
    console.error("Invitation DELETE error:", error);

    return NextResponse.json(
      { error: "Failed to delete invitation." },
      { status: 500 },
    );
  }
}