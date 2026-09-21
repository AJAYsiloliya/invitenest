const RomanticInvitation = ({ form }) => {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border-2 border-rose-300 bg-gradient-to-b from-[#fff5f7] via-white to-[#ffeef2] p-3 shadow-[0_20px_55px_rgba(150,40,70,0.28)]">

      {/* Floating Hearts */}
      <div className="pointer-events-none absolute left-5 top-16 rotate-[-15deg] text-2xl text-rose-300">
        ♥
      </div>

      <div className="pointer-events-none absolute right-5 top-28 rotate-[18deg] text-xl text-pink-300">
        ♥
      </div>

      <div className="pointer-events-none absolute left-8 bottom-28 rotate-[15deg] text-lg text-rose-300">
        ♡
      </div>

      <div className="pointer-events-none absolute right-8 bottom-36 rotate-[-15deg] text-2xl text-pink-300">
        ♥
      </div>

      {/* Inner Frame */}
      <div className="relative overflow-hidden rounded-[1.6rem] border border-rose-200 bg-white/60 px-5 py-7">

        {/* Corner Flowers */}
        <div className="absolute left-2 top-2 text-3xl text-rose-300">
          ❀
        </div>

        <div className="absolute right-2 top-2 text-3xl text-rose-300">
          ❀
        </div>

        <div className="absolute bottom-2 left-2 rotate-180 text-3xl text-rose-300">
          ❀
        </div>

        <div className="absolute bottom-2 right-2 rotate-180 text-3xl text-rose-300">
          ❀
        </div>

        {/* Top Heart */}
        <div className="relative z-10 text-center">
          <div className="text-5xl leading-none text-rose-500">
            ♥
          </div>

          <p className="mt-3 text-[10px] font-bold tracking-[0.4em] text-rose-500">
            TOGETHER WITH LOVE
          </p>
        </div>

        {/* Romantic Divider */}
        <div className="my-5 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-rose-200" />
          <span className="text-xs text-rose-400">♡</span>
          <span className="h-px w-12 bg-rose-200" />
        </div>

        {/* Intro */}
        <p className="text-center font-serif text-sm italic text-rose-400">
          Two hearts, one beautiful journey
        </p>

        {/* ================= COUPLE ILLUSTRATION ================= */}
        <div className="relative mx-auto mt-5 h-44 w-full">

          {/* Big Heart Behind Couple */}
          <div className="absolute left-1/2 top-3 h-32 w-32 -translate-x-1/2 rotate-45 rounded-[35%] bg-rose-100/70" />
          <div className="absolute left-1/2 top-[-5px] -translate-x-1/2 text-7xl text-rose-200">
            ♥
          </div>

          {/* Small Hearts */}
          <div className="absolute left-7 top-12 rotate-[-15deg] text-xl text-pink-400">
            ♥
          </div>

          <div className="absolute right-7 top-20 rotate-[15deg] text-lg text-rose-400">
            ♡
          </div>

          {/* GIRL */}
          <div className="absolute bottom-0 left-[23%]">

            {/* Hair */}
            <div className="absolute left-1/2 top-[-5px] h-14 w-14 -translate-x-1/2 rounded-full bg-[#3d2525]">
              <div className="absolute -left-2 top-5 h-12 w-5 rounded-full bg-[#3d2525]" />
              <div className="absolute -right-2 top-5 h-12 w-5 rounded-full bg-[#3d2525]" />
            </div>

            {/* Face */}
            <div className="relative z-10 mt-1 h-12 w-11 rounded-[45%] bg-[#f5c7a9]">

              {/* Hair Front */}
              <div className="absolute left-0 top-[-2px] h-5 w-full rounded-t-full bg-[#3d2525]" />

              {/* Eyes */}
              <div className="absolute left-2 top-6 h-1 w-1 rounded-full bg-[#392020]" />
              <div className="absolute right-2 top-6 h-1 w-1 rounded-full bg-[#392020]" />

              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 h-2 w-4 -translate-x-1/2 rounded-b-full border-b-2 border-rose-500" />
            </div>

            {/* Neck */}
            <div className="mx-auto h-3 w-4 bg-[#f5c7a9]" />

            {/* Dress */}
            <div className="relative h-20 w-20 -translate-x-[4px] rounded-t-[40px] bg-gradient-to-b from-rose-400 to-rose-600">
              <div className="absolute left-1/2 top-4 h-12 w-1 -translate-x-1/2 bg-rose-200/70" />
            </div>

            {/* Hand */}
            <div className="absolute right-[-7px] top-[52px] h-5 w-5 rounded-full bg-[#f5c7a9]" />
          </div>

          {/* BOY */}
          <div className="absolute bottom-0 right-[21%]">

            {/* Hair */}
            <div className="absolute left-1/2 top-[-5px] h-14 w-14 -translate-x-1/2 rounded-full bg-[#241b1b]">
              <div className="absolute left-1 top-[-3px] h-5 w-8 rotate-[-12deg] rounded-full bg-[#241b1b]" />
            </div>

            {/* Face */}
            <div className="relative z-10 mt-1 h-12 w-11 rounded-[45%] bg-[#d99b78]">

              {/* Hair Front */}
              <div className="absolute left-0 top-[-2px] h-5 w-full rounded-t-full bg-[#241b1b]" />

              {/* Eyes */}
              <div className="absolute left-2 top-6 h-1 w-1 rounded-full bg-[#211616]" />
              <div className="absolute right-2 top-6 h-1 w-1 rounded-full bg-[#211616]" />

              {/* Smile */}
              <div className="absolute bottom-2 left-1/2 h-2 w-4 -translate-x-1/2 rounded-b-full border-b-2 border-rose-400" />
            </div>

            {/* Neck */}
            <div className="mx-auto h-3 w-4 bg-[#d99b78]" />

            {/* Suit */}
            <div className="relative h-20 w-20 -translate-x-[4px] rounded-t-[40px] bg-gradient-to-b from-[#4b3340] to-[#281e27]">

              {/* Shirt */}
              <div className="absolute left-1/2 top-1 h-12 w-7 -translate-x-1/2 bg-white" />

              {/* Tie */}
              <div className="absolute left-1/2 top-2 h-10 w-2 -translate-x-1/2 bg-rose-500" />
            </div>

            {/* Hand */}
            <div className="absolute left-[-7px] top-[52px] h-5 w-5 rounded-full bg-[#d99b78]" />
          </div>

          {/* Couple Hands + Heart */}
          <div className="absolute bottom-[43px] left-1/2 -translate-x-1/2 text-lg text-rose-500">
            ♥
          </div>

        </div>

        {/* Names */}
        <div className="relative z-10 mt-2 text-center">

          <h1 className="font-serif text-3xl font-bold text-rose-700">
            {form.groomName || "Groom Name"}
          </h1>

          <div className="my-1 text-xl text-rose-400">
            &
          </div>

          <h1 className="font-serif text-3xl font-bold text-rose-700">
            {form.brideName || "Bride Name"}
          </h1>

        </div>

        {/* Romantic Divider */}
        <div className="my-6 flex items-center justify-center gap-2">
          <span className="h-px w-14 bg-rose-200" />
          <span className="text-sm text-rose-500">♥</span>
          <span className="h-px w-14 bg-rose-200" />
        </div>

        {/* Date Card */}
        <div className="rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 px-4 py-4 text-center shadow-[0_8px_20px_rgba(200,70,100,0.12)]">

          <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-500">
            Our Special Day
          </p>

          <p className="mt-2 font-serif text-xl font-bold text-rose-700">
            {form.date || "Your Date"}
          </p>

          <div className="mx-auto my-2 h-px w-10 bg-rose-200" />

          <p className="text-sm font-medium text-gray-600">
            {form.time || "Your Time"}
          </p>

        </div>

        {/* Venue */}
        <div className="mt-6 text-center">

          <div className="text-2xl text-rose-400">
            ❧
          </div>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            Celebration At
          </p>

          <p className="mt-1 font-serif text-lg font-bold text-gray-800">
            {form.venue || "Your Venue"}
          </p>

        </div>

        {/* Message */}
        <div className="relative mt-6 px-3 text-center">

          <span className="absolute left-0 top-[-8px] text-2xl text-rose-200">
            “
          </span>

          <p className="font-serif text-sm italic leading-6 text-gray-500">
            {form.message ||
              "Your presence will make our beautiful celebration even more special."}
          </p>

          <span className="absolute bottom-[-15px] right-0 text-2xl text-rose-200">
            ”
          </span>

        </div>

        {/* Bottom Romantic Decoration */}
        <div className="mt-8 flex items-center justify-center gap-3 text-rose-400">
          <span>❀</span>
          <span>♡</span>
          <span className="text-xl">♥</span>
          <span>♡</span>
          <span>❀</span>
        </div>

        <p className="mt-3 text-center text-[9px] font-semibold tracking-[0.35em] text-rose-300">
          FOREVER • TOGETHER
        </p>

      </div>
    </div>
  );
};

export default RomanticInvitation;