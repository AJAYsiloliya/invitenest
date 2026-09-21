const BirthdayParty = ({ form }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-fuchsia-300 bg-gradient-to-b from-purple-50 to-pink-50 p-3 shadow-[0_18px_45px_rgba(120,50,120,0.25)]">

      {/* Inner Frame */}
      <div className="relative rounded-[1.5rem] border border-fuchsia-200 px-6 py-7">

        {/* Decorative Corners */}
        <div className="absolute left-2 top-2 text-2xl text-fuchsia-400">
          ✿
        </div>

        <div className="absolute right-2 top-2 text-2xl text-pink-400">
          ❀
        </div>

        <div className="absolute bottom-2 left-2 text-2xl text-pink-400">
          ❀
        </div>

        <div className="absolute bottom-2 right-2 text-2xl text-fuchsia-400">
          ✿
        </div>

        {/* Top Decoration */}
        <div className="text-center text-4xl">
          🎈
        </div>

        <p className="mt-3 text-xs font-bold tracking-[0.35em] text-fuchsia-500">
          YOU'RE INVITED
        </p>

        {/* Divider */}
        <div className="mx-auto my-5 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-fuchsia-300" />
          <span className="text-sm text-pink-400">✦</span>
          <span className="h-px w-10 bg-fuchsia-300" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-4xl font-bold text-fuchsia-700">
          Birthday Party
        </h1>

        <p className="mt-3 text-sm italic text-gray-500">
          Come celebrate this special day with us!
        </p>

        {/* Name */}
        <div className="mx-auto my-6 h-px w-20 bg-fuchsia-200" />

        <h2 className="font-serif text-3xl font-bold text-gray-800">
          {form.personName || "Birthday Person"}
        </h2>

        {/* Date & Time */}
        <div className="mt-6 rounded-2xl border border-fuchsia-100 bg-white/80 p-4 shadow-md">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-600">
            {form.date || "Your Date"}
          </p>

          <div className="mx-auto my-2 h-px w-10 bg-pink-200" />

          <p className="text-sm text-gray-600">
            {form.time || "Your Time"}
          </p>
        </div>

        {/* Venue */}
        <div className="mt-6">
          <p className="text-xl text-pink-400">❧</p>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-400">
            Celebration at
          </p>

          <p className="mt-1 font-serif text-lg font-semibold text-gray-800">
            {form.venue || "Your Venue"}
          </p>
        </div>

        {/* Message */}
        <p className="mt-6 text-sm italic leading-6 text-gray-500">
          {form.message ||
            "Let's make this birthday a day to remember!"}
        </p>

        {/* Bottom Decoration */}
        <div className="mt-7 text-2xl text-fuchsia-400">
          ✿ 🎂 ✿
        </div>

      </div>
    </div>
  );
};

export default BirthdayParty;