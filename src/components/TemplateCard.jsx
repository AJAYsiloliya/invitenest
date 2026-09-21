"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";
import { load } from "@cashfreepayments/cashfree-js";

const TemplateCard = ({ template }) => {
  const router = useRouter();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const isPaid = template.price > 0;

  const handlePayment = async () => {
    if (!user) {
      router.push("/login");
      return;
    }

    try {
      const token = await getIdToken(user);

      // 1. Order create
      const response = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          templateId: template.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error(data);
        alert("Payment order create nahi hua.");
        return;
      }

      // 2. Cashfree checkout
      const cashfree = await load({
        mode: "production ",
      });

      console.log("PAYMENT SESSION:", data.payment_session_id);

      await cashfree.checkout({
        paymentSessionId: data.payment_session_id,
        redirectTarget: "_modal",
      });

      // 3. Payment verify
      const verifyResponse = await fetch(
        `/api/payment/verify-order?order_id=${data.order_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const verifyData = await verifyResponse.json();

      if (verifyData.paid) {
        setIsUnlocked(true);
        alert("Payment successful! Template unlocked.");
      } else {
        alert("Payment verify nahi hua.");
      }
    } catch (error) {
      console.error(error);
      alert("Payment process mein error aaya.");
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden bg-rose-300">
        
        <Image
          src={template.image}
          alt={template.name}
          width={500}
          height={700}
          className="h-72 w-full bg-gray-100 object-contain transition duration-500 group-hover:scale-105"
        />
          

        {isPaid && (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/75 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            🔒 ₹{template.price}
          </div>
        )}

        {!isPaid && (
          <div className="absolute right-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1.5 text-sm font-semibold text-white shadow">
            Free
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{template.name}</h3>

        <p className="mt-1 text-sm text-gray-500">{template.type}</p>

        <div className="mt-3">
          {isPaid ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-rose-600">
                ₹{template.price}
              </span>

              <span className="text-xs text-gray-400">Premium Template</span>
            </div>
          ) : (
            <span className="text-sm font-medium text-green-600">
              Free Template
            </span>
          )}
        </div>

        {isPaid ? (
          isUnlocked ? (
            <Link
              href={`/create?template=${template.id}`}
              className="mt-4 block w-full rounded-xl bg-green-500 py-2.5 text-center font-semibold text-white transition hover:bg-green-600"
            >
              ✅ Use Template
            </Link>
          ) : (
            <button
              type="button"
              onClick={handlePayment}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-2.5 font-semibold text-white transition hover:bg-rose-600"
            >
              🔒 Unlock for ₹{template.price}
            </button>
          )
        ) : (
          <Link
            href={`/create?template=${template.id}`}
            className="mt-4 block w-full rounded-xl bg-pink-500 py-2.5 text-center font-semibold text-white transition hover:bg-pink-600"
          >
            Use Template
          </Link>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
