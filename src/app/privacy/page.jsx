export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Privacy Policy
        </h1>

        <p className="mb-5 text-gray-700 leading-7">
          InviteNest respects your privacy and is committed to protecting the
          information you provide while using our website.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Information We Collect
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          We may collect information such as your name, email address and
          invitation details when you use InviteNest.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          How We Use Information
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          The information is used to provide our invitation creation, sharing,
          account and payment-related services.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Payments
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          Payments are processed through third-party payment providers. Payment
          information is handled according to the policies of the respective
          payment provider.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Data Security
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          We take reasonable measures to protect information associated with
          your InviteNest account and invitations.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-700 leading-7">
          For privacy-related questions, please contact us through the email
          address provided on our Contact Us page.
        </p>
      </div>
    </main>
  );
}
