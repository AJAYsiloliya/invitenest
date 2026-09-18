const Love = ({ form }) => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-rose-100 p-4 shadow-xl">
      <div className="rounded-[1.7rem] border-4 border-rose-300 bg-white p-8 text-center">

        <div className="text-5xl">❤️</div>

        <p className="mt-4 text-sm font-bold tracking-[0.3em] text-rose-500">
          LOVE INVITATION
        </p>

        <div className="my-6 text-3xl">💕 ✨ 💕</div>

        <p className="text-sm text-gray-500">
          You are invited to celebrate love with us
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold text-rose-600">
          {form.personName || "Your Name"}
        </h1>

        <div className="mx-auto my-6 h-px w-20 bg-rose-300" />

        <p className="font-semibold text-gray-800">
          {form.date || "Your Date"}
        </p>

        <p className="mt-1 text-gray-600">
          {form.time || "Your Time"}
        </p>

        <p className="mt-5 text-sm font-medium text-gray-700">
          📍 {form.venue || "Your Venue"}
        </p>

        <p className="mt-6 text-sm italic leading-6 text-gray-500">
          {form.message || "Join us for a beautiful celebration of love."}
        </p>

        <div className="mt-7 text-2xl">💖</div>

      </div>
    </div>
  );
};

export default Love;