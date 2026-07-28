"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { landingAssets } from "@/components/landing/assets";

const SOCIAL = [
  {
    src: "/landing/footer/social-1.png",
    label: "X (Twitter)",
    href: "https://x.com/readyy_social?t=a4UdyA1lPJRtojDSLnyxyQ&s=08",
  },
  {
    src: "/landing/footer/social-2.png",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
  {
    src: "/landing/footer/social-3.png",
    label: "Facebook",
    href: "https://www.facebook.com/share/1W5wNcWBAu/",
  },
  {
    src: "/landing/footer/social-4.png",
    label: "GitHub",
    href: "https://github.com/",
  },
  {
    src: "/landing/footer/social-5.png",
    label: "Instagram",
    href: "https://www.instagram.com/ready_social?igsh=YzljYTk1ODg3Zg==",
  },
  {
    src: "/landing/footer/social-6.png",
    label: "Dribbble",
    href: "https://dribbble.com/",
  },
] as const;

/**
 * Desktop composition from Paper MacBook Pro 14" - 10 footer.
 */
export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleNavigation = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const linkClass =
    "font-[family-name:var(--font-landing-body)] text-base font-normal leading-6 tracking-[-0.011em] text-[#171717] transition-colors hover:text-[#5C5C5C]";
  const headingClass =
    "font-[family-name:var(--font-landing-body)] text-base font-normal leading-6 tracking-[-0.011em] text-[#5C5C5C]";

  return (
    <footer className="relative w-full overflow-x-clip bg-white px-6 pb-8 pt-16 lg:px-20 lg:pb-10 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1352px] flex-col gap-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between">
          {/* Brand */}
          <div className="flex min-h-[184px] w-full max-w-[351px] flex-col justify-between gap-8">
            <p className="font-[family-name:var(--font-landing-body)] text-lg font-normal leading-6 tracking-[-0.015em] text-[#5C5C5C]">
              Users create meaningful human connections across the areas of
              Life, Love, and Work.
            </p>
            <Link href="/" className="inline-flex w-fit items-center">
              <Image
                src={landingAssets.brand.logoMark}
                alt="Ready Social"
                width={39}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Link columns */}
          <div className="flex flex-col gap-10 sm:flex-row sm:flex-wrap sm:gap-x-16 sm:gap-y-10">
            <div className="flex min-w-[115px] flex-col gap-4">
              <h4 className={headingClass}>Customer Service</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("faq")}
                    className={`${linkClass} cursor-pointer text-left`}
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    Terms & condition
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex min-w-[118px] flex-col gap-4">
              <h4 className={headingClass}>Quick Links</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("home")}
                    className={`${linkClass} cursor-pointer text-left`}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("about")}
                    className={`${linkClass} cursor-pointer text-left`}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleNavigation("how-it-works")}
                    className={`${linkClass} cursor-pointer text-left`}
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Book a session
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex min-w-[232px] flex-col gap-4">
              <h4 className={headingClass}>Contact Info</h4>
              <ul className="flex flex-col gap-2">
                <li className={linkClass}>+234 901 796 4775</li>
                <li>
                  <a
                    href="mailto:contactreadysocial@gmail.com"
                    className={linkClass}
                  >
                    contactreadysocial@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-[#EAECF0] pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="font-[family-name:var(--font-landing-body)] text-base font-normal leading-6 text-[#667085]">
            © 2025 Ready Social. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src={item.src}
                  alt=""
                  width={48}
                  height={48}
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
