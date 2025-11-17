"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (item: string) => {
    // Close the mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }

    const section = document.getElementById(item.toLowerCase());
    if (section) {
      const navHeight = 80; // Height of navbar
      const targetPosition = section.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    "Home",
    "About",
    "Services",
    "Training",
    "Portfolio",
    "Blog",
    "Contact",
  ];

  return (
    // Make the main div fixed to the top with a dark, slightly blurred background
    <div className=" w-full z-20 border-b border-gray-800">
      <nav>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1
                className="text-2xl font-bold text-white tracking-tight cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif" }}
                onClick={() => handleNavClick("Home")}
              >
                ANKIT PANDEY
              </h1>
            </div>

            {/* Desktop Navigation Links (Hidden on mobile) */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-slate-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Contact Button (Hidden on mobile) */}
            <div className="hidden lg:block">
              <Link
                href="https://360-salon-academy.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className=" block w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-3 rounded-md font-semibold text-base transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                Book Free Session
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger/Close Icon) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-cyan-400 p-2 cursor-pointer transition-colors"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {/* Conditionally display Burger or Close icon */}
                {!isOpen ? (
                  // Burger Icon
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                ) : (
                  // Close Icon (X)
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content (Visible only on mobile, slides open/closed) */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-screen border-t border-gray-700" : "max-h-0"
          } bg-gray-900`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-slate-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 cursor-pointer"
              >
                {item}
              </button>
            ))}

            {/* Mobile Contact Button */}
            <Link
              href="https://360-salon-academy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-3 rounded-md font-semibold text-base transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
            >
              Book Free Session
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
