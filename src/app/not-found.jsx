import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-rose-50 px-5 py-20">
      <div className="w-full max-w-xl text-center">

        {/* Broken Envelope Illustration */}
        <div className="relative mx-auto mb-7 h-52 w-64">

          {/* Soft shadow */}
          <div className="absolute bottom-2 left-1/2 h-5 w-48 -translate-x-1/2 rounded-full bg-pink-100 blur-sm" />

          {/* Envelope */}
          <div className="absolute left-1/2 top-10 h-32 w-52 -translate-x-1/2 rounded-2xl border-4 border-pink-400 bg-white shadow-xl">

            {/* Left flap */}
            <div className="absolute left-1/2 top-[-4px] h-20 w-20 -translate-x-1/2 rotate-45 border-r-4 border-b-4 border-pink-400 bg-pink-50" />

            {/* Letter */}
            <div className="absolute left-1/2 top-8 h-20 w-36 -translate-x-1/2 rounded-lg border-2 border-pink-200 bg-white p-3 shadow-sm">
              <div className="h-2 w-20 rounded-full bg-pink-200" />
              <div className="mt-3 h-2 w-28 rounded-full bg-gray-100" />
              <div className="mt-2 h-2 w-20 rounded-full bg-gray-100" />
            </div>

            {/* Envelope bottom folds */}
            <div className="absolute bottom-0 left-0 h-20 w-20 -translate-x-1/2 translate-y-1/2 rotate-45 border-r-4 border-b-4 border-pink-400 bg-white" />

            <div className="absolute bottom-0 right-0 h-20 w-20 translate-x-1/2 translate-y-1/2 rotate-45 border-l-4 border-t-4 border-pink-400 bg-white" />
          </div>

          {/* Broken heart */}
          <div className="absolute right-2 top-1 flex h-12 w-12 rotate-12 items-center justify-center rounded-full bg-pink-100 text-2xl">
            💔
          </div>

          {/* Small floating dots */}
          <span className="absolute left-4 top-16 h-3 w-3 rounded-full bg-pink-300" />
          <span className="absolute right-0 top-28 h-2 w-2 rounded-full bg-rose-300" />
          <span className="absolute left-10 bottom-7 h-2 w-2 rounded-full bg-pink-200" />
        </div>

        {/* 404 */}
        <p className="text-7xl font-black tracking-tight text-pink-600">
          404
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md leading-7 text-gray-500">
          Oops! This invitation page seems to have disappeared.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-pink-500 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-pink-600"
          >
            Go to Home
          </Link>

          <Link
            href="/templates"
            className="rounded-xl border border-pink-300 bg-white px-7 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
          >
            Explore Templates
          </Link>
        </div>
      </div>
    </main>
  );
}