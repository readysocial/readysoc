"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About us", href: "#about" },
  { name: "How it works", href: "#how-it-works" },
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/spark-bundle")) {
    return null;
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname === "/") {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${href}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex min-w-[120px] items-center md:min-w-[140px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/landing/brand/logo-mark.svg"
                alt="Ready Social"
                width={39}
                height={24}
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop: Centered Nav Links */}
          <ul className="hidden items-center gap-8 text-sm font-medium text-[#475467] md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="cursor-pointer tracking-[-0.084px] transition-colors duration-200 hover:text-[#fb3748]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: Download app */}
          <div className="hidden min-w-[120px] justify-end md:flex md:min-w-[140px]">
            <a
              href={PLAY_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e1e4ea] bg-white px-3 text-sm font-medium tracking-[-0.084px] text-[#525866] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] transition-colors hover:bg-[#f8fafc]"
            >
              Download app
            </a>
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
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block cursor-pointer text-lg font-medium text-[#475467] transition-colors hover:text-[#fb3748]"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full pt-4 text-center">
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e1e4ea] bg-white px-6 text-sm font-medium text-[#525866]"
                onClick={() => setIsMenuOpen(false)}
              >
                Download app
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
