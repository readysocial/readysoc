"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (pathname?.startsWith("/spark-bundle")) {
    return null;
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex items-center justify-between h-20">
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
              <span className="font-bold text-base md:text-lg text-gray-900">Ready Social</span>
            </Link>
          </div>

          {/* Desktop: Centered Nav Links */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-base font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="hover:text-[#f6535b] transition-colors duration-200 cursor-pointer">
                    {link.name}
                  </Link>
                ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#f6535b] transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </a>
                )}
              </li>
            ))}
          </ul>

          {/* Right: Log in Button */}
          <div className="hidden md:flex min-w-[140px] justify-end">
            <Link
              href="/login"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 text-base font-medium"
            >
              Log in
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
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
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20">
          <ul className="flex flex-col items-center gap-8 p-8">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="block text-lg font-medium text-gray-700 hover:text-[#f6535b] transition-colors cursor-pointer">
                    {link.name}
                  </Link>
                ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-lg font-medium text-gray-700 hover:text-[#f6535b] transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
                )}
              </li>
            ))}
            <li className="w-full text-center pt-4">
              <Link
                href="/login"
                className="inline-block px-8 py-3 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 
