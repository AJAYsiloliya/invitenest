"use client";


import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { toPng } from "html-to-image";
import templates from "@/data/templates";
import InvitationPreview from "@/components/InvitationPreview";

export default function InvitationPage() {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showCopied, setShowCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
  const getInvitation = async () => {
    try {
      const response = await fetch(`/api/invitation/${id}`);

      if (!response.ok) {
        setData(null);
        return;
      }

      const invitationData = await response.json();

      

      setData(invitationData);
    } catch {
      setErrorMessage("Unable to load the invitation. Please try again.");
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
    setShowCopied(true);
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
    (template) => template.id === data.templateId,
  );

  return (
    <main className="min-h-screen bg-pink-50 px-5 pt-24 pb-10">
      {errorMessage && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">
              ⚠️
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Something Went Wrong
            </h2>

            <p className="mt-2 text-gray-500">{errorMessage}</p>

            <button
              onClick={() => setErrorMessage("")}
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      {showCopied && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl">
              🔗
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Link Copied!
            </h2>

            <p className="mt-2 text-gray-500">
              Your invitation link has been copied successfully.
            </p>

            <button
              onClick={() => setShowCopied(false)}
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}
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
