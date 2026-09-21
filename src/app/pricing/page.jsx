export default function PricingPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Pricing & Services
        </h1>

        <p className="mb-8 text-center text-gray-700 leading-7">
          Create and share beautiful digital invitations with InviteNest.
        </p>

        <div className="rounded-2xl border border-pink-200 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            Free Invitations
          </h2>

          <p className="mb-2 text-gray-700">
            Price: ₹0
          </p>

          <p className="text-gray-700 leading-7">
            Create and share invitations using our available free templates.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-pink-300 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            Premium Invitation Templates
          </h2>

          <p className="mb-2 text-gray-700">
            Price: ₹49 per premium template
          </p>

          <p className="text-gray-700 leading-7">
            Premium templates provide access to additional invitation designs.
            The applicable price is displayed on the website before payment.
          </p>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          All prices are displayed in Indian Rupees (INR).
        </p>
      </div>
    </main>
  );
}