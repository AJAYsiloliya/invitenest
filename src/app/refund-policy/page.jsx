export const metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "Read the InviteNest Refund & Cancellation Policy for premium digital invitation template purchases and payment issues.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-5 leading-7 text-gray-700">
          This policy explains how payment, refund and cancellation-related
          requests are handled for InviteNest services.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Premium Template Purchases
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          Premium template purchases are processed through the payment
          provider used by InviteNest. Please review the template and payment
          details carefully before completing your purchase.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Failed or Duplicate Payments
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          If money has been deducted from your account but premium access was
          not activated, or if you believe you were charged more than once,
          please contact us with the relevant transaction details so the
          payment can be checked.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Refund Requests
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          Refund requests are reviewed based on the transaction and the
          circumstances of the request. If a refund is approved, it will be
          processed through the applicable payment provider.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          How to Contact Us
        </h2>

        <p className="leading-7 text-gray-700">
          For payment, cancellation or refund-related questions, please
          contact us using the support email listed on our Contact Us page.
          Include relevant transaction details so we can review your request.
        </p>
      </div>
    </main>
  );
}