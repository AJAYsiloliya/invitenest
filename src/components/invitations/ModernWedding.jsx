const ModernWedding = ({ form }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-amber-400 bg-[#11100e] p-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)]">

      {/* Inner Frame */}
      <div className="relative rounded-[1.5rem] border border-amber-700/70 px-6 py-7">

        {/* Decorative Corners */}
        <div className="absolute left-2 top-2 text-2xl text-amber-400">
          ❈
        </div>

        <div className="absolute right-2 top-2 text-2xl text-amber-400">
          ❈
        </div>

        <div className="absolute bottom-2 left-2 text-2xl text-amber-400">
          ❈
        </div>

        <div className="absolute bottom-2 right-2 text-2xl text-amber-400">
          ❈
        </div>

        {/* Top Ornament */}
        <div className="text-center text-4xl text-amber-400">
          ❦
        </div>

        <p className="mt-3 text-xs tracking-[0.45em] text-amber-300">
          WEDDING
        </p>

        <div className="mx-auto my-5 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-amber-700" />
          <span className="text-xs text-amber-400">◆</span>
          <span className="h-px w-12 bg-amber-700" />
        </div>

        {/* Intro */}
        <p className="text-sm italic text-stone-400">
          We are getting married
        </p>

        {/* Names */}
        <h1 className="mt-7 font-serif text-4xl text-amber-100">
          {form.groomName || "Groom Name"}
        </h1>

        <p className="my-3 text-2xl text-amber-400">
          &
        </p>

        <h1 className="font-serif text-4xl text-amber-100">
          {form.brideName || "Bride Name"}
        </h1>

        {/* Divider */}
        <div className="mx-auto my-7 flex items-center justify-center gap-2">
          <span className="h-px w-14 bg-amber-700" />
          <span className="text-xs text-amber-400">✦</span>
          <span className="h-px w-14 bg-amber-700" />
        </div>

        {/* Date & Time */}
        <div className="rounded-2xl border border-amber-800/60 bg-[#191713] px-4 py-4 shadow-inner">
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
            {form.date || "Your Date"}
          </p>

          <p className="mt-2 text-sm text-stone-400">
            {form.time || "Your Time"}
          </p>
        </div>

        {/* Venue */}
        <div className="mt-6">
          <p className="text-xl text-amber-400">❧</p>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">
            Celebration at
          </p>

          <p className="mt-1 font-serif text-lg text-amber-100">
            {form.venue || "Your Venue"}
          </p>
        </div>

        {/* Message */}
        <p className="mt-7 text-sm italic leading-6 text-stone-400">
          {form.message ||
            "We would love to celebrate this special moment with you."}
        </p>

        {/* Bottom Ornament */}
        <div className="mt-7 text-xl text-amber-400">
          ❧ ✦ ❧
        </div>

      </div>
    </div>
  );
};

export default ModernWedding;