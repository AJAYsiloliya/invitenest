
export const metadata = {
  title: "About",
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

        <p className="mb-5 text-gray-700 leading-7">
          InviteNest is an online platform for creating and sharing beautiful
          digital invitations for special occasions.
        </p>

        <p className="mb-5 text-gray-700 leading-7">
          You can create invitations for weddings, birthdays, engagements,
          love celebrations and other memorable events. Our goal is to make
          digital invitation creation simple, convenient and accessible.
        </p>

        <p className="mb-5 text-gray-700 leading-7">
          InviteNest offers both free and premium invitation templates.
          Premium templates may be available for ₹49 as shown on the website.
        </p>

        <p className="text-gray-700 leading-7">
          InviteNest is designed to provide an easy way to create, customize
          and share digital invitations with friends and family.
        </p>
      </div>
    </main>
  );
}