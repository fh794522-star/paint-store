"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home","About","Quiz","Contact"]; // ❌ Products removed

  return (
    <nav className="fixed top-4 w-full flex justify-center z-50">
      
      {/* GLASS BOX */}
      <div className="w-[95%] md:w-[80%] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg px-6 py-3 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-lg font-bold bg-linear-to-r from-red-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent">
          Paint Store 🎨
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full bg-white/30 backdrop-blur-md text-gray-800 hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 rounded-full bg-white/30 flex items-center justify-center"
        >
          <div className="flex flex-col gap-0.75">
            <span className="w-5 h-0.5 bg-gray-800"></span>
            <span className="w-5 h-0.5 bg-gray-800"></span>
            <span className="w-5 h-0.5 bg-gray-800"></span>
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-20 w-[90%] bg-white/30 backdrop-blur-xl border border-white/30 rounded-2xl p-6 flex flex-col gap-4 text-center shadow-lg">
          
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-2 rounded-full bg-white/40 hover:bg-linear-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition"
            >
              {item}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}