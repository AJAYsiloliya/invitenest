export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Contact Us
        </h1>

        <p className="mb-8 text-center leading-7 text-gray-700">
          If you have any questions, feedback, or need help with InviteNest,
          feel free to contact us.
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-900">
              Email Support
            </h2>

            <p className="text-gray-700">
              For support and enquiries, please contact us through our
              registered support email.
            </p>

            <a
              href="mailto:Invitenetsupport@gmail.com"
              className="mt-2 inline-block font-medium text-pink-600 hover:underline"
            >
              Invitenetsupport@gmail.com
            </a>
          </div>

          <div>
            <h2 className="mb-1 text-xl font-semibold text-gray-900">
              Support
            </h2>

            <p className="text-gray-700 leading-7">
              We aim to respond to customer queries and support requests as
              soon as reasonably possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}