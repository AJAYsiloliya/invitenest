'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className="flex fixed top-0 w-[100%] justify-between items-center px-3.5 py-4 bg-pink-300">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-pink-800">
          Invite<span className="text-red-500">Nest</span>
        </Link>

        {/* Menu */}
        <button onClick={() => setMenu(true)}>
          <img
            src="/Menu.png"
            alt="menu"
            className="h-6"
          />
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
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-xl
        transition-transform duration-300
        ${menu ? 'translate-x-0' : 'translate-x-full'}`}
      >

        {/* Close */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenu(false)}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 px-6 text-lg font-medium">

          <Link href="/" onClick={() => setMenu(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setMenu(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setMenu(false)}>
            Contact
          </Link>

          <Link href="/login" onClick={() => setMenu(false)}>
            Login
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar