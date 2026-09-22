"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TemplateCard from "@/components/TemplateCard";
import templates from "@/data/templates";

export default function TemplatesClient() {
  const [loadingTemplateId, setLoadingTemplateId] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    const handlePageShow = () => {
      setLoadingTemplateId(null);
    };

    window.addEventListener("pageshow", handlePageShow);

    const paymentStatus = searchParams.get("payment");

    if (paymentStatus === "success") {
      setPaymentMessage("Payment successful! Template unlocked.");
    }

    if (paymentStatus === "failed") {
      setPaymentMessage("Payment failed. Please try again.");
    }

    if (paymentStatus) {
      router.replace("/templates");
    }

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [searchParams, router]);

  return (
    <main className="px-5 py-10 pt-24">
      {paymentMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-4xl">
              {paymentMessage.startsWith("Payment successful") ? "✅" : "❌"}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">
              {paymentMessage.startsWith("Payment successful")
                ? "Payment Successful"
                : "Payment Failed"}
            </h2>

            <p className="mt-2 text-gray-500">{paymentMessage}</p>

            <button
              onClick={() => setPaymentMessage("")}
              className="mt-6 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <h1 className="text-center text-3xl font-bold">
        Digital Invitation Templates
      </h1>

      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
        Explore beautiful wedding, birthday, love and event invitation
        templates. Choose a design, customize your details and create your
        digital invitation online.
      </p>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            loadingTemplateId={loadingTemplateId}
            setLoadingTemplateId={setLoadingTemplateId}
          />
        ))}
      </div>
    </main>
  );
}
