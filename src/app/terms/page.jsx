

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Read the InviteNest Terms & Conditions for using our digital invitation creation and sharing services.",
};


export default function TermsPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Terms & Conditions
        </h1>

        <p className="mb-5 text-gray-700 leading-7">
          By using InviteNest, you agree to use the website and its services
          responsibly and in accordance with these Terms & Conditions.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Use of the Service
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          InviteNest allows users to create, customize and share digital
          invitations. Users are responsible for the information and content
          they add to their invitations.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Free and Premium Templates
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          InviteNest provides both free and premium invitation templates.
          Premium templates and services are offered at the prices displayed
          on the website at the time of purchase.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Payments
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          Payments are processed through third-party payment providers.
          Customers should review the payment details before completing a
          purchase.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Changes to the Service
        </h2>
        <p className="mb-5 text-gray-700 leading-7">
          InviteNest may update, modify or improve its services and templates
          from time to time.
        </p>

        <h2 className="mt-8 mb-2 text-xl font-semibold">
          Contact
        </h2>
        <p className="text-gray-700 leading-7">
          If you have questions about these terms, please contact us through
          the email address provided on our Contact Us page.
        </p>
      </div>
    </main>
  );
}