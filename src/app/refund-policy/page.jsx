export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Refund & Cancellation Policy
        </h1>

        <p className="mb-5 text-gray-700 leading-7">
          This policy explains how refunds and payment-related requests are
          handled for InviteNest services.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Premium Template Purchases
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          Premium template purchases are processed through the payment
          provider used on InviteNest. Please check the purchase details
          carefully before completing payment.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Failed or Duplicate Payments
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          If your payment was deducted but the premium access was not
          activated, please contact us with the relevant payment details so
          that the transaction can be checked.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Refund Requests
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          Refund requests will be reviewed based on the transaction and the
          circumstances of the request. Any approved refund will be processed
          through the applicable payment provider.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-7">
          For payment or refund-related questions, please contact us using the
          support email listed on our Contact Us page.
        </p>
      </div>
    </main>
  );
}