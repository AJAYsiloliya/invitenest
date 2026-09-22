"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = ({
  template,
  loadingTemplateId,
  setLoadingTemplateId,
}) => {
  const router = useRouter();

  const [isUnlocked, setIsUnlocked] = useState(false);
  const [user, setUser] = useState(null);

  const isPaid = template.price > 0;
  const isComingSoon = template.comingSoon === true;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      // Coming Soon template ko access check ki zarurat nahi
      if (!currentUser || !isPaid || isComingSoon) {
        setIsUnlocked(false);
        return;
      }

      try {
        const token = await getIdToken(currentUser);

        const response = await fetch("/api/payment/check-access", {
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

        setIsUnlocked(data.hasAccess === true);
      } catch (error) {
        console.error("Access check error:", error);
        setIsUnlocked(false);
      }
    });

    return () => unsubscribe();
  }, [template.id, isPaid, isComingSoon]);

  const handlePayment = async () => {
    // Coming Soon template ke liye payment allowed nahi
    if (isComingSoon) return;

    if (loadingTemplateId !== null) return;

    if (!user) {
      router.push("/login");
      return;
    }

    setLoadingTemplateId(template.id);

    try {
      const token = await getIdToken(user);

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
        alert(data.error || "Payment order create nahi hua.");
        setLoadingTemplateId(null);
        return;
      }

      const form = document.createElement("form");

      form.method = "POST";
      form.action = data.payuUrl;

      const paymentFields = {
        key: data.key,
        txnid: data.txnid,
        amount: data.amount,
        productinfo: data.productinfo,
        firstname: data.firstname,
        email: data.email,
        phone: data.phone,
        surl: data.surl,
        furl: data.furl,
        udf1: data.udf1,
        udf2: data.udf2,
        udf3: data.udf3,
        udf4: data.udf4,
        udf5: data.udf5,
        hash: data.hash,
      };

      Object.entries(paymentFields).forEach(([name, value]) => {
        const input = document.createElement("input");

        input.type = "hidden";
        input.name = name;
        input.value = value ?? "";

        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error(error);
      alert("Payment process mein error aaya.");
      setLoadingTemplateId(null);
    }
  };

  return (
    <div className="group overflow-hidden rounded-2xl border border-pink-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-rose-300">
        <Image
          src={template.image}
          alt={template.name}
          width={500}
          height={700}
          loading="eager"
          className="h-72 w-full bg-gray-100 object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Template Badge */}
        {isComingSoon ? (
          <div className="absolute right-3 top-3 z-10 rounded-full bg-gray-700 px-3 py-1.5 text-sm font-semibold text-white shadow">
            Coming Soon
          </div>
        ) : isPaid ? (
          <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-black/75 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            🔒 ₹{template.price}
          </div>
        ) : (
          <div className="absolute right-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1.5 text-sm font-semibold text-white shadow">
            Free
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {template.name}
        </h3>

        <p className="mt-1 text-sm text-gray-500">{template.type}</p>

        {/* Price */}
        <div className="mt-3">
          {isComingSoon ? (
            <span className="text-sm font-medium text-gray-500">
              Coming Soon
            </span>
          ) : isPaid ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-rose-600">
                ₹{template.price}
              </span>

              <span className="text-xs text-gray-400">
                Premium Template
              </span>
            </div>
          ) : (
            <span className="text-sm font-medium text-green-600">
              Free Template
            </span>
          )}
        </div>

        {/* Button */}
        {isComingSoon ? (
          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-xl bg-gray-300 py-2.5 font-semibold text-gray-600"
          >
            Coming Soon
          </button>
        ) : isPaid ? (
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
              disabled={loadingTemplateId !== null}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-rose-500 py-2.5 font-semibold text-white transition hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingTemplateId === template.id
                ? "Processing..."
                : `🔒 Unlock for ₹${template.price}`}
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