"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeroSection, BuySparksSection, HowSparksSection, WhatYouCanDoSection, MeetOurListenerSection } from "@/components/landing";
import HeroBanner from "@/components/HeroBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <HeroSection />
      <BuySparksSection />

      <HowSparksSection />

      <WhatYouCanDoSection />

      <MeetOurListenerSection />
      <HeroBanner />

      {/* FAQ Section */}
      <section id="faq" className="bg-[#f8fafc]">
        <FAQ />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white">
        <div className="container mx-auto max-w-6xl px-4 py-12">
          {/* Add your contact content here */}
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
