const ClassicWedding = ({ form }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-[#c9a96e] bg-[#fffdf8] p-3 shadow-[0_15px_40px_rgba(80,55,20,0.25)]">

      {/* Outer Decorative Border */}
      <div className="relative rounded-[1.5rem] border border-[#dfc58f] p-6">

        {/* Floral Corners */}
        <div className="absolute left-2 top-2 text-2xl text-[#b89552]">
          ❀
        </div>

        <div className="absolute right-2 top-2 rotate-90 text-2xl text-[#b89552]">
          ❀
        </div>

        <div className="absolute bottom-2 left-2 -rotate-90 text-2xl text-[#b89552]">
          ❀
        </div>

        <div className="absolute bottom-2 right-2 text-2xl text-[#b89552]">
          ❀
        </div>

        {/* Top Ornament */}
        <div className="text-center text-4xl text-[#b89552]">
          ❦
        </div>

        <p className="mt-3 text-xs font-semibold tracking-[0.35em] text-[#9b7a3d]">
          WEDDING INVITATION
        </p>

        <div className="mx-auto my-5 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-[#d6bd82]" />
          <span className="text-sm text-[#b89552]">◆</span>
          <span className="h-px w-12 bg-[#d6bd82]" />
        </div>

        {/* Intro */}
        <p className="font-serif text-sm italic text-stone-500">
          Together with their families
        </p>

        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#9b7a3d]">
          request the pleasure of your company
        </p>

        {/* Names */}
        <h1 className="mt-7 font-serif text-3xl font-bold text-[#4b3a24]">
          {form.groomName || "Groom Name"}
        </h1>

        <div className="my-2 text-2xl text-[#b89552]">
          ❦
        </div>

        <h1 className="font-serif text-3xl font-bold text-[#4b3a24]">
          {form.brideName || "Bride Name"}
        </h1>

        {/* Elegant Divider */}
        <div className="mx-auto my-6 flex items-center justify-center gap-2">
          <span className="h-px w-14 bg-[#d6bd82]" />
          <span className="text-xs text-[#b89552]">✦</span>
          <span className="h-px w-14 bg-[#d6bd82]" />
        </div>

        {/* Date & Time */}
        <div className="rounded-2xl border border-[#eadbb8] bg-[#fffaf0] px-4 py-4 shadow-inner">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#8b6b32]">
            {form.date || "Your Date"}
          </p>

          <div className="mx-auto my-2 h-px w-10 bg-[#d6bd82]" />

          <p className="text-sm text-stone-600">
            {form.time || "Your Time"}
          </p>
        </div>

        {/* Venue */}
        <div className="mt-6">
          <div className="text-xl text-[#b89552]">❧</div>

          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">
            Venue
          </p>

          <p className="mt-1 font-serif text-lg font-semibold text-[#4b3a24]">
            {form.venue || "Your Venue"}
          </p>
        </div>

        {/* Message */}
        <p className="mt-6 font-serif text-sm italic leading-6 text-stone-500">
          {form.message ||
            "Join us as we celebrate the beginning of our beautiful journey together."}
        </p>

        {/* Bottom Ornament */}
        <div className="mt-6 text-2xl text-[#b89552]">
          ❧ ✦ ❧
        </div>

      </div>
    </div>
  );
};

export default ClassicWedding;