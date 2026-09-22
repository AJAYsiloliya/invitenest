"use client";

import { auth, db } from "@/lib/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import templates from "@/data/templates";

export default function Profile() {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);

    if (!currentUser) {
      setInvitations([]);
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
    } catch {
      setInvitations([]);
    } finally {
      setLoading(false);
    }
  });

  return () => unsubscribe();
}, []);

  return (
    <main className="min-h-screen bg-pink-50 px-5 pt-24 pb-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="mt-2 text-2xl  text-gray-600">{user?.email}</p>

        <p className="mt-2 text-gray-500">Your created invitations</p>

        {loading ? (
          <p className="mt-8 text-gray-500">Loading invitations...</p>
        ) : invitations.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-8 text-center shadow">
            <p className="text-gray-500">
              You haven't created any invitations yet.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {invitations.map((invitation) => {
              const template = templates.find(
                (item) => item.id === invitation.templateId,
              );

              return (
                <div
                  key={invitation.id}
                  className="rounded-2xl bg-white p-5 shadow"
                >
                  <img
                    src={template?.image}
                    alt={template?.name || "Invitation"}
                    className="h-48 w-full rounded-xl object-cover"
                  />

                  <h2 className="mt-4 text-xl font-bold">
                    {template?.name || "Invitation"}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {template?.type || "Event"}
                  </p>

                  <button
                    onClick={() =>
                      (window.location.href = `/invitation/${invitation.id}`)
                    }
                    className="mt-4 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
                  >
                    View Invitation
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
