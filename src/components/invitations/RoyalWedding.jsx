

const RoyalWedding = ({ form }) => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2rem] border-4 border-amber-300 bg-[#fffaf0] p-6 text-center shadow-xl">

      {/* Top Decoration */}
      <div className="text-4xl">🌿</div>

      <p className="mt-3 text-xs font-semibold tracking-[0.35em] text-amber-700">
        WEDDING INVITATION
      </p>

      <div className="mx-auto my-5 h-px w-28 bg-amber-400" />

      {/* Intro */}
      <p className="text-sm text-gray-600">
        Together with their families
      </p>

      {/* Names */}
      <h1 className="mt-5 font-serif text-3xl font-bold text-gray-800">
        {form.groomName || "Groom Name"}
      </h1>

      <p className="my-2 text-2xl text-amber-500">♥</p>

      <h1 className="font-serif text-3xl font-bold text-gray-800">
        {form.brideName || "Bride Name"}
      </h1>

      {/* Divider */}
      <div className="mx-auto my-6 h-px w-20 bg-amber-300" />

      {/* Date & Time */}
      <div className="text-gray-700">
        <p className="font-semibold">
          {form.date || "Your Date"}
        </p>

        <p className="mt-1">
          {form.time || "Your Time"}
        </p>
      </div>

      {/* Venue */}
      <div className="mt-5">
        <p className="text-lg">📍</p>

        <p className="mt-1 font-semibold text-gray-800">
          {form.venue || "Your Venue"}
        </p>
      </div>

      {/* Message */}
      <p className="mt-6 text-sm italic leading-6 text-gray-600">
        {form.message || "We would be delighted to have you with us on our special day."}
      </p>

      {/* Bottom Decoration */}
      <div className="mt-6 text-2xl">✦</div>

    </div>
  );
};

export default RoyalWedding;