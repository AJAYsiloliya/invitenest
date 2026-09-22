import Link from "next/link";

const invitationTypes = [
  { name: "Wedding", emoji: "💍" },
  { name: "Engagement", emoji: "💐" },
  { name: "Birthday", emoji: "🎂" },
  { name: "Love", emoji: "❤️" },
  { name: "Baby", emoji: "👶" },
  { name: "Housewarming", emoji: "🏠" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-amber-50 px-5 text-center">
        <p className="mb-3 font-semibold text-red-500">
          Create • Customize • Share
        </p>

        <h1 className="max-w-3xl text-3xl font-bold text-pink-800 md:text-6xl">
          Digital Invitation Maker for Every Special Moment
          <span className="text-red-500"> Made Easy</span>
        </h1>

        <p className="mt-5 max-w-2xl text-gray-600">
          Create beautiful digital invitations online for weddings, birthdays,
          engagements, love celebrations, baby events and housewarmings.
          Customize your invitation and share it with everyone through one
          simple link.
        </p>

        <Link
          href="/templates"
          className="mt-8 rounded-full bg-red-500 px-7 py-3 font-semibold text-white hover:bg-red-600"
        >
          Create Your Invitation
        </Link>
      </section>

      {/* Invitation Types */}
      <section className="px-5 py-16">
        <h2 className="text-center text-3xl font-bold">
          Create an Online Invitation
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Choose an invitation for your special occasion
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
          {invitationTypes.map((type) => (
            <Link
              key={type.name}
              href="/templates"
              className="cursor-pointer rounded-2xl border border-pink-500 bg-pink-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{type.emoji}</div>

              <h3 className="mt-3 font-semibold">
                {type.name} Invitation
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-pink-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-pink-800">
            Create Beautiful Digital Invitations Online
          </h2>

          <div className="mt-8 space-y-5 text-gray-600">
            <p>
              InviteNest is an online digital invitation maker that lets you
              create and share invitations for weddings, birthdays,
              engagements, love celebrations, baby events and housewarming
              parties.
            </p>

            <p>
              Choose a template, add your event details and create a
              personalized invitation that can be shared through a simple
              online link.
            </p>

            <p>
              Whether you need a wedding invitation, birthday invitation or
              another event invitation, InviteNest provides customizable
              digital templates for your special occasion.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/templates"
              className="inline-block rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white hover:bg-pink-600"
            >
              Explore Invitation Templates
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}