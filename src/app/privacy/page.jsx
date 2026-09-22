export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the InviteNest Privacy Policy to understand how your account, invitation and payment-related information is handled.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Privacy Policy
        </h1>

        <p className="mb-5 leading-7 text-gray-700">
          InviteNest respects your privacy and aims to handle your information
          responsibly when you use our website and digital invitation
          services.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Information We Collect
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          Depending on how you use InviteNest, we may collect information such
          as your name, email address, account information and invitation
          details that you provide while creating an invitation.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          How We Use Your Information
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          Information may be used to provide invitation creation, account,
          sharing and payment-related services, as well as to provide support
          when you contact us.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Invitations and Sharing
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          If you create and share an invitation through a public invitation
          link, the invitation information included in that link may be
          accessible to people who have the link.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Payments
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          Payments for premium templates are processed through third-party
          payment providers. Payment information is handled according to the
          policies and terms of the respective payment provider.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Data Security
        </h2>

        <p className="mb-5 leading-7 text-gray-700">
          We take reasonable measures to protect information associated with
          your InviteNest account and invitations. However, no online service
          can guarantee complete security of information.
        </p>

        <h2 className="mb-2 mt-8 text-xl font-semibold text-gray-900">
          Contact Us
        </h2>

        <p className="leading-7 text-gray-700">
          If you have questions about this Privacy Policy or how your
          information is handled, please contact us through the email address
          provided on our Contact Us page.
        </p>
      </div>
    </main>
  );
}