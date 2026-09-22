"use client";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "@/lib/firebase";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import templates from "@/data/templates";
import InvitationPreview from "@/components/InvitationPreview";

function CreateContent() {
  const [invitationId, setInvitationId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [saveError, setSaveError] = useState("");
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const templateId = searchParams.get("template");

  const selectedTemplate = templates.find(
    (template) => template.id === Number(templateId),
  );

  const [form, setForm] = useState({
    groomName: "",
    brideName: "",
    personName: "",
    date: "",
    time: "",
    venue: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (selectedTemplate?.type === "Wedding") {
      if (!form.groomName.trim()) {
        newErrors.groomName = "Groom name is required";
      }

      if (!form.brideName.trim()) {
        newErrors.brideName = "Bride name is required";
      }
    } else {
      if (!form.personName.trim()) {
        newErrors.personName = "Name is required";
      }
    }

    if (!form.date) {
      newErrors.date = "Date is required";
    }

    if (!form.time) {
      newErrors.time = "Time is required";
    }

    if (!form.venue.trim()) {
      newErrors.venue = "Venue is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const hasAccess = await checkPaidAccess();

    if (!hasAccess) {
      if (!hasAccess) {
        setShowPaymentAlert(true);
        return;
      }
    }

    const user = auth.currentUser;

    if (!user) {
      setSaveError("Please login to create an invitation.");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "invitations"), {
        userId: user.uid,
        templateId: selectedTemplate?.id,
        form: form,
        createdAt: serverTimestamp(),
      });

      localStorage.setItem(
        "invitationData",
        JSON.stringify({
          form,
          templateId: selectedTemplate?.id,
        }),
      );

      setInvitationId(docRef.id);
      setShowSuccess(true);
    } catch (error) {
      setSaveError("Failed to save the invitation. Please try again.");
    }
  };

  const checkPaidAccess = async () => {
    if (!selectedTemplate || selectedTemplate.price <= 0) {
      return true;
    }

    const cookieResponse = await fetch("/api/payment/check-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateId: selectedTemplate.id,
      }),
    });

    const data = await cookieResponse.json();

    return data.hasAccess;
  };

  return (
    <main className="px-5 pt-25 pb-12">
      {showPaymentAlert && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl">
              🔒
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Premium Template
            </h2>

            <p className="mt-2 text-gray-500">
              Please complete the payment to use this premium template.
            </p>

            <button
              onClick={() => setShowPaymentAlert(false)}
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      {showSuccess && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl">
              ❤️
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              Invitation Saved!
            </h2>

            <p className="mt-2 text-gray-500">
              Your beautiful invitation is ready to create.
            </p>

            <button
              onClick={() => router.push(`/invitation/${invitationId}`)}
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        {/* Form */}
        <div>
          <h1 className="text-3xl font-bold">Create Your Invitation</h1>

          <p className="mt-2 text-gray-500">Add your event details</p>

          <p className="mt-4 text-sm text-pink-500">
            Selected: {selectedTemplate?.name || "No template"}
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {selectedTemplate?.type === "Wedding" ? (
              <>
                <div>
                  <label className="mb-2 block font-medium">Groom Name</label>

                  <input
                    type="text"
                    name="groomName"
                    value={form.groomName}
                    onChange={handleChange}
                    placeholder="Enter groom name"
                    className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
                  />
                  {errors.groomName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.groomName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block font-medium">Bride Name</label>

                  <input
                    type="text"
                    name="brideName"
                    value={form.brideName}
                    onChange={handleChange}
                    placeholder="Enter bride name"
                    className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
                  />
                  {errors.brideName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.brideName}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <div>
                <label className="mb-2 block font-medium">Name</label>

                <input
                  type="text"
                  name="personName"
                  value={form.personName}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
                />
                {errors.personName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.personName}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="mb-2 block font-medium">Date</label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
              />
              {errors.date && (
                <p className="mt-1 text-sm text-red-500">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium">Time</label>

              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
              />
              {errors.time && (
                <p className="mt-1 text-sm text-red-500">{errors.time}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium">Venue</label>

              <input
                type="text"
                name="venue"
                value={form.venue}
                onChange={handleChange}
                placeholder="Enter venue"
                className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
              />
              {errors.venue && (
                <p className="mt-1 text-sm text-red-500">{errors.venue}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block font-medium">Message</label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your invitation message"
                rows="4"
                className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
              />
            </div>
            {saveError && (
              <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm font-medium text-red-600">
                {saveError}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Live Preview */}
        <InvitationPreview form={form} selectedTemplate={selectedTemplate} />
      </div>
    </main>
  );
}

export default function CreateClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreateContent />
    </Suspense>
  );
}
