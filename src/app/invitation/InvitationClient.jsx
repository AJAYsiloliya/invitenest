"use client";



import { toPng } from "html-to-image";
import { useEffect, useState } from "react";
import templates from "@/data/templates";
import InvitationPreview from "@/components/InvitationPreview";

export default function InvitationClient() {
  const [data, setData] = useState(null);
  const [showCopied, setShowCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDownload = async () => {
    try {
      const element = document.getElementById("invitation-card");

      if (!element) {
        setErrorMessage("Unable to find the invitation.");
        return;
      }

      const image = await toPng(element, {
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = "my-invitation.png";
      link.href = image;
      link.click();
    } catch {
      setErrorMessage("Unable to download the invitation. Please try again.");
    }
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
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
    } catch {
      setErrorMessage("Unable to copy the invitation link. Please try again.");
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My Invitation",
          text: "Check out my invitation!",
          url: window.location.href,
        });
      } else {
        await handleCopyLink();
      }
    } catch {
      setErrorMessage("Unable to share the invitation. Please try again.");
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

      {/* Copy + Share */}
      <div className="mx-auto mt-6 flex w-full max-w-sm gap-3">
        <button
          onClick={handleCopyLink}
          className="flex-1 rounded-xl border border-pink-500 py-3 font-semibold text-pink-500"
        >
          🔗 Copy Link
        </button>

        <button
          onClick={handleShare}
          className="flex-1 rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
        >
          📤 Share
        </button>
      </div>

      {/* Download */}
      <button
        onClick={handleDownload}
        className="mx-auto mt-6 block w-full max-w-sm rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
      >
        📥 Download Invitation
      </button>

      {/* Link Copied Popup */}
      {showCopied && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
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
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {/* Error Popup */}
      {errorMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
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
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
