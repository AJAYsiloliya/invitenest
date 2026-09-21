import Link from "next/link";
import templates from "../data/templates";

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
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5 bg-amber-50">
        <p className="text-red-500 font-semibold mb-3">
          Create • Customize • Share
        </p>

        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl text-pink-800">
          Beautiful Invitations,
          <span className="text-red-500"> Made Easy</span>
        </h1>

        <p className="mt-5 max-w-xl text-gray-600">
          Create beautiful digital invitations for your special moments
          and share them with everyone through one simple link.
        </p>

        <Link
          href="/templates"
          className="mt-8 rounded-full bg-red-500 px-7 py-3 font-semibold text-white hover:bg-red-600"
        >
          Go Templates
        </Link>
      </section>

      {/* Invitation Types */}
      <section className="px-5 py-16">
        <h2 className="text-3xl font-bold text-center">
          What are you celebrating?
        </h2>

        <p className="mt-2 text-center text-gray-500">
          Choose an invitation for your special occasion
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-3">
          {invitationTypes.map((type) => (
            <div
              key={type.name}
              className="cursor-pointer bg-pink-50 rounded-2xl border border-pink-500 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg active:shadow-lg"
            >
              <div className="text-4xl">{type.emoji}</div>

              <h3 className="mt-3 font-semibold">
                {type.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}