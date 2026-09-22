"use client";

import { auth, db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, getIdToken } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import templates from "@/data/templates";

export default function Profile() {
  const [invitations, setInvitations] = useState([]);
  const [unlockedTemplates, setUnlockedTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (!currentUser) {
        setInvitations([]);
        setUnlockedTemplates([]);
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, "invitations"),
          where("userId", "==", currentUser.uid),
        );

        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setInvitations(data);

        const token = await getIdToken(currentUser);

        const response = await fetch("/api/payment/paid-templates", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const paidData = await response.json();

        if (response.ok) {
          setUnlockedTemplates(paidData.unlockedTemplates || []);
        } else {
          setUnlockedTemplates([]);
        }
      } catch (error) {
        console.error("Profile loading error:", error);
        setInvitations([]);
        setUnlockedTemplates([]);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async () => {
    if (!deleteId || !auth.currentUser) return;

    try {
      setDeletingId(deleteId);

      const token = await getIdToken(auth.currentUser);

      const response = await fetch(`/api/invitation/${deleteId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to delete invitation.");
        return;
      }

      setInvitations((current) =>
        current.filter((invitation) => invitation.id !== deleteId),
      );

      setDeleteId(null);
    } catch (error) {
      console.error("Delete invitation error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 px-5 pb-16 pt-28">
      <div className="mx-auto max-w-6xl">

        {/* Profile Header */}
        <section className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-pink-100 md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-red-500 text-3xl font-bold text-white shadow-lg">
              {user?.email?.charAt(0).toUpperCase() || "U"}
            </div>

            <div>
              <p className="text-sm font-medium text-pink-500">
                Welcome to InviteNest
              </p>

              <h1 className="mt-1 text-3xl font-bold text-gray-900">
                Your Profile
              </h1>

              <p className="mt-1 break-all text-gray-500">
                {user?.email}
              </p>
            </div>
          </div>
        </section>

        {/* Premium Templates */}
        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">
              Premium Templates
            </h2>

            <p className="mt-1 text-gray-500">
              Templates you have unlocked.
            </p>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white p-8 text-center shadow">
              <p className="text-gray-500">
                Loading premium templates...
              </p>
            </div>
          ) : unlockedTemplates.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-300 bg-white p-8 text-center shadow-sm">
              <div className="text-4xl">🎨</div>

              <h3 className="mt-3 text-lg font-bold text-gray-800">
                No premium templates yet
              </h3>

              <p className="mt-1 text-gray-500">
                Your unlocked premium templates will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {unlockedTemplates.map((item) => {
                const template = templates.find(
                  (template) => template.id === item.templateId,
                );

                if (!template) return null;

                return (
                  <div
                    key={item.templateId}
                   className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={template.image}
                      alt={template.name}
                      className="h-40 w-full object-cover sm:h-48"
                    />

                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {template.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {template.type}
                      </p>

                      <p className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                        ✓ Unlocked
                      </p>

                      {item.expiresAt && (
                        <p className="mt-3 text-sm text-gray-500">
                          Expires:{" "}
                          {new Date(item.expiresAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Created Invitations */}
        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-2xl font-bold text-gray-900">
              Your Invitations
            </h2>

            <p className="mt-1 text-gray-500">
              Manage the invitations you have created.
            </p>
          </div>

          {loading ? (
            <div className="rounded-3xl bg-white p-8 text-center shadow">
              <p className="text-gray-500">
                Loading invitations...
              </p>
            </div>
          ) : invitations.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-300 bg-white p-10 text-center shadow-sm">
              <div className="text-5xl">💌</div>

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                No invitations yet
              </h3>

              <p className="mt-2 text-gray-500">
                Your created invitations will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {invitations.map((invitation) => {
                const template = templates.find(
                  (item) => item.id === invitation.templateId,
                );

                return (
                  <div
                    key={invitation.id}
                    className="overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <img
                      src={template?.image}
                      alt={template?.name || "Invitation"}
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="text-xl font-bold text-gray-900">
                        {template?.name || "Invitation"}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {template?.type || "Event"}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <button
                          onClick={() =>
                            (window.location.href = `/invitation/${invitation.id}`)
                          }
                          className="rounded-xl bg-pink-500 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                        >
                          View
                        </button>

                        <button
                          onClick={() => setDeleteId(invitation.id)}
                          className="rounded-xl border border-red-200 bg-red-50 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
              🗑️
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Delete Invitation?
            </h2>

            <p className="mt-2 text-gray-500">
              This invitation will be removed from your account and its
              public link will no longer work.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => setDeleteId(null)}
                disabled={deletingId !== null}
                className="rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deletingId !== null}
                className="rounded-xl bg-red-500 py-3 font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deletingId ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}