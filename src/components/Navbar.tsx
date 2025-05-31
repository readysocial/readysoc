import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white shadow-sm relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 min-w-[180px]">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/RS icon png@3x 1.png"
            alt="Ready Social Logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-bold text-lg text-gray-800">Ready Social</span>
        </Link>
      </div>
      {/* Center: Nav Links */}
      <ul className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 items-center text-base font-medium text-gray-700">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="hover:text-red-500 transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* Right: Placeholder for future (keeps center alignment) */}
      <div className="min-w-[180px]" />
    </nav>
  );
} 