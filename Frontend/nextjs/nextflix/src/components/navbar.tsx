"use client";
import Image from "next/image";
import { languageSelector } from "./languageSelector";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container mx-auto bg-transparent text-black">
      <div className="flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={60}
            className="w-24 h-12 sm:w-32 sm:h-16 md:w-36 md:h-18"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center space-x-4">
            {languageSelector()}
            <Button className="bg-red-600 hover:bg-red-700 transition-colors">
              Sign In
            </Button>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 border-none bg-transparent cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-black transition-all duration-300 ease-out ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2 bg-white/95 backdrop-blur-sm border-t border-gray-200">
          <ul className="flex flex-col space-y-3">
            <li className="flex justify-center">{languageSelector()}</li>
            <li className="flex justify-center">
              <Button className="bg-red-600 hover:bg-red-700 transition-colors w-full max-w-xs">
                Sign In
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
