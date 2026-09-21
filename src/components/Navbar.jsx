"use client";

"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <nav className="flex fixed z-30 top-0 w-[100%] justify-between items-center px-3.5 py-4 bg-pink-300">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-pink-800">
          Invite<span className="text-red-500">Nest</span>
        </Link>

        {/* Menu */}
        <button onClick={() => setMenu(true)}>
          <img src="/Menu.png" alt="menu" className="h-6" />
        </button>
      </nav>

      {/* Overlay */}
      {menu && (
        <div
          onClick={() => setMenu(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl
  transition-transform duration-300
  ${menu ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenu(false)}
            className="rounded-full px-3 py-1 text-2xl text-gray-500
      transition hover:bg-pink-100 hover:text-pink-600"
          >
            ×
          </button>
        </div>

        {/* User Email - Top */}
        {user && (
          <div className="mx-5 mb-5 rounded-2xl bg-gradient-to-r from-pink-100 to-rose-100 p-4">
            <p className="text-xs font-medium text-pink-500">Logged in as</p>

            <p className="mt-1 break-all text-sm font-semibold text-pink-800">
              {user.email}
            </p>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-col gap-2 px-5 text-base font-semibold">
          <Link
            href="/"
            onClick={() => setMenu(false)}
            className="rounded-xl px-4 py-3 text-gray-700 transition
      hover:bg-pink-100 hover:text-pink-600"
          >
            🏠 Home
          </Link>

          <Link
            href="/about"
            onClick={() => setMenu(false)}
            className="rounded-xl px-4 py-3 text-gray-700 transition
      hover:bg-pink-100 hover:text-pink-600"
          >
            ℹ️ About
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenu(false)}
            className="rounded-xl px-4 py-3 text-gray-700 transition
      hover:bg-pink-100 hover:text-pink-600"
          >
            📩 Contact
          </Link>

          {user ? (
            <button
              onClick={async () => {
                await handleLogout();
                setMenu(false);
              }}
              className="mt-3 rounded-xl bg-red-50 px-4 py-3 text-left
        font-semibold text-red-500 transition
        hover:bg-red-500 hover:text-white"
            >
              🚪 Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setMenu(false)}
                className="mt-3 rounded-xl bg-pink-50 px-4 py-3
          text-pink-600 transition hover:bg-pink-500 hover:text-white"
              >
                🔑 Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenu(false)}
                className="rounded-xl bg-pink-500 px-4 py-3
          text-white transition hover:bg-pink-600"
              >
                ✨ Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
