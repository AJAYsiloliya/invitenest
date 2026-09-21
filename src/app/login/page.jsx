"use client";

import Link from "next/link";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);

      router.push("/templates");
    } catch (error) {
      console.error(error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setError("Email ya password galat hai.");
      } else if (error.code === "auth/invalid-email") {
        setError("Valid email enter karein.");
      } else {
        setError("Login nahi hua. Dobara try karein.");
      }
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-pink-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>

        <p className="mt-1 text-sm text-gray-500">
          InviteNest account me login karein
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-pink-500"
            />
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition hover:bg-pink-600 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="mt-4 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/signup" className="font-semibold text-pink-500">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}
