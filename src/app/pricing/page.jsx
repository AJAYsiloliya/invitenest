export const metadata = {
  title: "Pricing & Premium Templates",
  description:
    "View InviteNest pricing for free and premium digital invitation templates. Premium templates are available for ₹49.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          Pricing & Services
        </h1>

        <p className="mb-8 text-center leading-7 text-gray-700">
          Create, customize and share digital invitations with InviteNest.
          Choose a free template or unlock a premium design when you need
          something extra.
        </p>

        <div className="rounded-2xl border border-pink-200 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            Free Invitations
          </h2>

          <p className="mb-3 font-medium text-gray-800">
            Price: ₹0
          </p>

          <p className="leading-7 text-gray-700">
            Create and share invitations using the available free templates.
            You can add your event details and share your finished invitation
            through an online link.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-pink-300 p-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            Premium Invitation Templates
          </h2>

          <p className="mb-3 font-medium text-gray-800">
            Price: ₹49 per premium template
          </p>

          <p className="leading-7 text-gray-700">
            Unlock a premium invitation template for ₹49 and use its design
            for your invitation. The applicable price is clearly displayed
            before you make a payment.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-pink-50 p-5">
          <h2 className="mb-2 text-lg font-semibold text-gray-900">
            Simple & Transparent Pricing
          </h2>

          <p className="leading-7 text-gray-700">
            Free templates cost ₹0. Premium templates are priced at ₹49 as
            displayed on the website. All prices are shown in Indian Rupees
            (INR).
          </p>
        </div>
      </div>
    </main>
  );
}