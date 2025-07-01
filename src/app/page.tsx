'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import HeroLeft from "../components/HeroLeft";
import HowItWorks from "../components/HowItWorks";
import MeetOurListener from "@/components/MeetOurListener";
import ListenerFeatures from "@/components/ListenerFeatures";
import HeroBanner from "@/components/HeroBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/faq') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main id="home" className="flex min-h-screen bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-[1280px] px-6 md:px-8 py-12">
          {/* Left Side: Hero Text */}
          <div className="flex-1 md:pr-8">
            <HeroLeft />
          </div>
          
          {/* Right Side: Illustration */}
          <div className="flex-1 flex justify-end items-center mt-12 md:mt-0">
            <div className="relative w-full max-w-[640px]">
              <Image
                src="/aa.png"
                alt="Ready Social Illustration"
                width={640}
                height={640}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-white">
        <HowItWorks />
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white">
        <MeetOurListener />
      </section>

      <ListenerFeatures />
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
    </div>
  );
}
