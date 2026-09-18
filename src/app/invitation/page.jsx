"use client";

import { toPng } from "html-to-image";
import { useEffect, useState } from "react";
import templates from "@/data/templates";
import InvitationPreview from "@/components/InvitationPreview";

export default function InvitationPage() {
  const [data, setData] = useState(null);

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

  useEffect(() => {
    const savedData = localStorage.getItem("invitationData");

    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading invitation...</p>
      </main>
    );
  }

  const selectedTemplate = templates.find(
    (template) => template.id === data.templateId,
  );

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
    await handleCopyLink();
  }
};

  return (
    <main className="min-h-screen bg-pink-50 px-5 pt-24 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold">Your Invitation</h1>

      <div
        id="invitation-card"
        className="mx-auto w-full max-w-[448px] bg-pink-50 p-8"
      >
        <InvitationPreview
          form={data.form}
          selectedTemplate={selectedTemplate}
        />
      </div>
      <button
        onClick={handleDownload}
        className="mx-auto mt-6 block w-full max-w-sm rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
      >
        📥 Download Invitation
      </button>
    </main>
  );
}
