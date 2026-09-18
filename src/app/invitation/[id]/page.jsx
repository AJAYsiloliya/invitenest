"use client";

import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toPng } from "html-to-image";
import templates from "@/data/templates";
import InvitationPreview from "@/components/InvitationPreview";

export default function InvitationPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInvitation = async () => {
      try {
        const docRef = doc(db, "invitations", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getInvitation();
    }
  }, [id]);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("Invitation link copied!");
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "My Invitation",
        text: "Check out my invitation!",
        url: window.location.href,
      });
    } else {
      handleCopyLink();
    }
  };

  const handleDownload = async () => {
    const element = document.getElementById("invitation-card");

    if (!element) return;

    const image = await toPng(element, {
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = "my-invitation.png";
    link.href = image;
    link.click();
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading invitation...</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Invitation not found.</p>
      </main>
    );
  }

  const selectedTemplate = templates.find(
    (template) => template.id === data.templateId
  );

  return (
    <main className="min-h-screen bg-pink-50 px-5 pt-24 pb-10">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Your Invitation
      </h1>

      <div
        id="invitation-card"
        className="mx-auto w-full max-w-[448px] bg-pink-50 p-8"
      >
        <InvitationPreview
          form={data.form}
          selectedTemplate={selectedTemplate}
        />
      </div>

      <div className="mx-auto mt-6 flex w-full max-w-sm gap-3">
        <button
          onClick={handleCopyLink}
          className="flex-1 rounded-xl border border-pink-500 py-3 font-semibold text-pink-500"
        >
          🔗 Copy Link
        </button>

        <button
          onClick={handleShare}
          className="flex-1 rounded-xl bg-pink-500 py-3 font-semibold text-white"
        >
          📤 Share
        </button>
      </div>

      <button
        onClick={handleDownload}
        className="mx-auto mt-6 block w-full max-w-sm rounded-xl bg-pink-500 py-3 font-semibold text-white"
      >
        📥 Download Invitation
      </button>
    </main>
  );
}