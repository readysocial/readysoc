"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="w-full flex items-center justify-between py-4 px-4 md:px-6 bg-white shadow-sm relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 min-w-[140px] md:min-w-[180px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/RS icon png@3x 1.png"
            alt="Ready Social Logo"
            width={32}
            height={32}
            className="w-8 h-8 md:w-10 md:h-10"
            priority
          />
          <span className="font-bold text-base md:text-lg text-gray-800">Ready Social</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop: Nav Links */}
      <ul className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8 items-center text-base font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.name}>
            {link.href.startsWith("/") ? (
              <Link href={link.href} className="hover:text-red-500 transition-colors cursor-pointer">
                {link.name}
              </Link>
            ) : (
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="block text-lg font-medium text-gray-700 hover:text-red-500 transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-gray-700 hover:text-red-500 transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Placeholder for future (keeps center alignment) */}
      <div className="hidden md:block min-w-[180px]" />
    </nav>
  );
} 