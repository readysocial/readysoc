"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeroSection, BuySparksSection, HowSparksSection, WhatYouCanDoSection, MeetOurListenerSection, FinalCtaSection } from "@/components/landing";
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

      <FAQ />

      <FinalCtaSection />

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
