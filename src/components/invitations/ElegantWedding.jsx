



const ElegantWedding = ({ form }) => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl bg-[#f8f5ef] p-4 shadow-xl">
      <div className="rounded-3xl border border-gray-300 bg-white p-8 text-center">

        <p className="text-xs tracking-[0.4em] text-gray-500">
          TOGETHER WITH THEIR FAMILIES
        </p>

        <div className="my-6 text-3xl">✦</div>

        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Wedding
        </p>

        <h1 className="mt-5 font-serif text-4xl text-gray-800">
          {form.groomName || "Groom"}
        </h1>

        <p className="my-2 text-xl text-gray-400">&</p>

        <h1 className="font-serif text-4xl text-gray-800">
          {form.brideName || "Bride"}
        </h1>

        <div className="mx-auto my-7 h-px w-20 bg-gray-300" />

        <p className="text-sm uppercase tracking-widest text-gray-500">
          Save the Date
        </p>

        <p className="mt-3 font-semibold text-gray-800">
          {form.date || "Your Date"}
        </p>

        <p className="mt-1 text-gray-600">
          {form.time || "Your Time"}
        </p>

        <p className="mt-5 text-sm text-gray-600">
          📍 {form.venue || "Your Venue"}
        </p>

        <p className="mt-6 text-sm italic leading-6 text-gray-500">
          {form.message || "We invite you to celebrate our special day with us."}
        </p>

        <div className="mt-7 text-xl text-gray-400">✦</div>

      </div>
    </div>
  );
};

export default ElegantWedding;