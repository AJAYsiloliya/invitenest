export const metadata = {
  title: "Contact InviteNest",
  description:
    "Contact InviteNest for questions, support, feedback, payment issues, or help with digital invitations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Contact InviteNest
        </h1>

        <p className="mb-8 text-center leading-7 text-gray-700">
          Have a question about creating an invitation, using a template, or
          making a payment? We are here to help.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Email Support
            </h2>

            <p className="leading-7 text-gray-700">
              For questions, feedback, payment issues, or other support
              requests, you can reach us by email.
            </p>

            <a
              href="mailto:Invitenetsupport@gmail.com"
              className="mt-3 inline-block font-medium text-pink-600 hover:underline"
            >
              Invitenetsupport@gmail.com
            </a>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              How Can We Help?
            </h2>

            <p className="leading-7 text-gray-700">
              You can contact us if you need help with creating or sharing
              digital invitations, templates, your account, or a payment.
              Please include relevant details in your email so we can
              understand your issue.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Support Response
            </h2>

            <p className="leading-7 text-gray-700">
              We aim to respond to customer questions and support requests as
              soon as reasonably possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}