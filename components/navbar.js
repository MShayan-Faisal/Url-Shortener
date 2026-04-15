"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#5D1C6A] fixed w-full top-0 left-0 z-20 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Gypsy CodArt
        </Link>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-purple-700"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // hamburger
              }
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#5D1C6A] md:flex transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            <li>
              <Link href="/" className="block py-2 hover:text-gray-300">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="block py-2 hover:text-gray-300">
                About
              </Link>
            </li>

            <li>
              <Link
                href="/shorten"
                className="block py-2 bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded md:mb-1 border border-black hover:border-black-500"
              >
                Shortener
              </Link>
            </li>

            <li>
              <Link
                href="/github"
                className="block py-2  bg-yellow-400 hover:bg-yellow-500 text-black px-3 rounded mt-0 md:mt-2 border border-black hover:border-yellow-500"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
