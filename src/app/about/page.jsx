export const metadata = {
  title: "About InviteNest",
  description:
    "Learn about InviteNest, a simple platform for creating beautiful digital wedding, birthday, love and event invitations.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-pink-50 px-6 py-24">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-md md:p-12">
        <h1 className="mb-6 text-center text-4xl font-bold text-pink-600">
          About InviteNest
        </h1>

        <p className="mb-5 leading-7 text-gray-700">
          InviteNest is a simple online platform that helps you create
          beautiful digital invitations for your special moments.
        </p>

        <p className="mb-5 leading-7 text-gray-700">
          Whether you are planning a wedding, birthday, engagement, love
          celebration, baby event or housewarming, you can choose a template,
          add your event details and create your invitation online.
        </p>

        <p className="mb-5 leading-7 text-gray-700">
          Our goal is to make creating and sharing digital invitations simple
          and convenient. Once your invitation is ready, you can share it with
          friends and family through an online link.
        </p>

        <p className="mb-5 leading-7 text-gray-700">
          InviteNest offers both free and premium invitation templates.
          Premium templates may be available for ₹49 as shown on the website.
        </p>

        <p className="leading-7 text-gray-700">
          We are building InviteNest to make digital invitations easier to
          create, customize and share without making the process complicated.
        </p>
      </div>
    </main>
  );
}