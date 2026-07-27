'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from "next/image";
import HeroLeft from "../components/HeroLeft";
import ListenerFeatures from "@/components/ListenerFeatures";
import HeroBanner from "@/components/HeroBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const pathname = usePathname();
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/faq') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsImageVisible(true);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main id="home" className="flex flex-col min-h-[auto] bg-white pt-20">
        <div className="w-full flex flex-col items-center justify-center px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 pt-8 md:pt-16 lg:pt-20 pb-0">
          {/* Hero Text */}
          <HeroLeft />
          
          {/* Phone Mockups with Floating Elements */}
          <div className="relative w-full max-w-[800px] md:max-w-[1200px] lg:max-w-full xl:max-w-full mt-4 md:mt-8 lg:mt-12">
            {/* Subtle Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] bg-gradient-to-r from-red-100 to-pink-100 rounded-full blur-3xl opacity-50 -z-10"></div>

            {/* Phone Mockup */}
            <div className="relative flex items-center justify-center">
              <div 
                className={`relative z-10 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] transition-all duration-1000 ${
                  isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '700ms' }}
              >
                <Image
                  src="/mk2.png"
                  alt="Phone mockup"
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* New Screen 2 Section */}
      <section className="relative w-full bg-white py-0">
        <Image
          src="/new screen/screen 2.png"
          alt="How it works"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </section>

      {/* New Section: Links + Illustrations */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
        <div className="container mx-auto max-w-[1600px] flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left: Links (35% width) */}
          <div className="w-full lg:w-[35%] flex flex-col gap-8 max-w-md lg:max-w-none lg:pt-[240px]">
            <a
              href="https://play.google.com/store/apps/details?id=com.tayor99.readysocial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 text-2xl pb-3 border-b border-gray-300 hover:text-[#f6535b] transition-colors w-full"
              style={{
                fontFamily: 'Cal Sans, sans-serif',
                fontWeight: 'bold',
                lineHeight: '32px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Download the App
            </a>
            <a
              href="#"
              className="text-gray-600 text-2xl pb-3 border-b border-gray-300 hover:text-[#f6535b] transition-colors w-full"
              style={{
                fontFamily: 'Cal Sans, sans-serif',
                fontWeight: 'bold',
                lineHeight: '32px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Buy or Gift a Spark
            </a>
            <a
              href="#"
              className="text-gray-600 text-2xl pb-3 border-b border-gray-300 hover:text-[#f6535b] transition-colors w-full"
              style={{
                fontFamily: 'Cal Sans, sans-serif',
                fontWeight: 'bold',
                lineHeight: '32px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Book & Attend a Listener Session
            </a>
            <a
              href="#"
              className="text-gray-600 text-2xl pb-3 border-b border-gray-300 hover:text-[#f6535b] transition-colors w-full"
              style={{
                fontFamily: 'Cal Sans, sans-serif',
                fontWeight: 'bold',
                lineHeight: '32px',
                letterSpacing: '0%',
                verticalAlign: 'middle'
              }}
            >
              Spark Real Conversations
            </a>
          </div>

          {/* Right: Text + Illustrations (65% width) */}
          <div className="w-full lg:w-[65%] flex flex-col items-start gap-8 relative overflow-hidden pl-5">
            {/* Heading */}
            <h2
              className="text-5xl sm:text-6xl font-bold text-gray-900 relative z-10"
              style={{
                fontFamily: 'Cal Sans, sans-serif',
                fontWeight: 'bold',
                lineHeight: '100%',
                letterSpacing: '-2%',
                verticalAlign: 'middle'
              }}
            >
              How Sparks Turn Conversations Into Care
            </h2>
            {/* Subtext */}
            <p
              className="text-gray-600 max-w-lg relative z-10"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '145%',
                letterSpacing: '-2%',
                verticalAlign: 'middle'
              }}
            >
              From a single tap to a meaningful talk — here’s how Sparks keep emotional wellbeing simple, human, and real.
            </p>

            {/* Login form card over tiled decorative background */}
            <div className="relative w-full max-w-[670px] h-[450px] z-10 rounded-[25px]" style={{ backgroundColor: '#F7F7F7' }}>
              {/* Second div with background image - 70% height */}
              <div className="absolute left-0 right-0 h-[375px] top-0 z-0 rounded-tl-[25px] rounded-tr-[25px]" style={{
                backgroundColor: '#F7F7F7',
                backgroundImage: 'url("/new screen/sideways.svg")',
                backgroundSize: '400px 400px',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'left top'
              }}>
                {/* Login form card */}
                <div className="absolute inset-0 m-auto w-[320px] h-[300px] rounded-[22.54px] border-[0.94px] border-[#D5F1FF] bg-white px-[22.54px] py-[37.56px] shadow-[0px_12px_32px_rgba(14,18,27,0.08)] z-20">
                  <div className="flex h-full flex-col items-center justify-between text-center">
                    <div className="flex flex-col items-center gap-3">
                      <h3
                        className="max-w-[186px] text-[#0E121B]"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontWeight: 600,
                          fontSize: '22.54px',
                          lineHeight: '30.05px',
                          letterSpacing: '-4%',
                          textAlign: 'center',
                        }}
                      >
                        Share Your Thoughts Freely
                      </h3>
                      <p
                        className="max-w-[216px] text-[#525866]"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontWeight: 400,
                          fontSize: '13.15px',
                          lineHeight: '18.78px',
                          letterSpacing: '-2%',
                          textAlign: 'center',
                        }}
                      >
                        From everyday emotions to bigger social conversations
                      </p>
                    </div>

                    <div className="flex w-full flex-col gap-[12px]">
                      <button
                        type="button"
                        className="h-[37.56px] w-full rounded-[9.6px] border-[0.94px] border-[#E5E7EB] bg-white text-[#0E121B] shadow-[0px_0.94px_1.88px_0px_rgba(10,13,20,0.03)]"
                        style={{
                          fontFamily: 'Geist, sans-serif',
                          fontWeight: 500,
                          fontSize: '13.15px',
                          lineHeight: '18.78px',
                          letterSpacing: '-2%',
                        }}
                      >
                        Sign in
                      </button>
                      <button
                        type="button"
                        className="h-[37.56px] w-full rounded-[9.6px] border-[0.94px] border-[#FFFFFF0F] text-white shadow-[0px_0px_0px_0.94px_#E23444,0px_0.94px_1.88px_0px_rgba(23,77,163,0.40)]"
                        style={{
                          background:
                            'linear-gradient(0deg, #FB3748, #FB3748), linear-gradient(360deg, rgba(255, 255, 255, 0) -12.5%, rgba(255, 255, 255, 0.2) 100%)',
                          fontFamily: 'Geist, sans-serif',
                          fontWeight: 600,
                          fontSize: '13.15px',
                          lineHeight: '18.78px',
                          letterSpacing: '-2%',
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="absolute bottom-6 left-6 right-0 text-left"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '145%',
                  letterSpacing: '-2%',
                  color: '#5C5C5C'
                }}
              >
                Tap into the Ready Social universe. Sign-up in moments.
              </p>
            </div>

            {/* Second illustration card */}
            <div className="relative w-full max-w-[670px] h-[450px] z-10 rounded-[25px]" style={{ backgroundColor: '#F7F7F7' }}>
              {/* Second div with background image - 70% height */}
              <div className="absolute left-0 right-0 h-[375px] top-0 z-0 rounded-tl-[25px] rounded-tr-[25px]" style={{
                backgroundColor: '#F7F7F7'
              }}>
                {/* illustration1.svg */}
                <Image
                  src="/new screen/illustration1.svg"
                  alt="Illustration 1"
                  width={637}
                  height={637}
                  className="absolute inset-0 m-auto w-[95%] h-[95%] z-20"
                />
              </div>
              <p
                className="absolute bottom-6 left-6 right-0 text-left"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '145%',
                  letterSpacing: '-2%',
                  color: '#5C5C5C'
                }}
              >
                Choose a Spark bundle for yourself, or send a Spark to someone who needs it. Because self-care and care for others matter.
              </p>
            </div>

            {/* Third illustration card */}
            <div className="relative w-full max-w-[670px] h-[450px] z-10 rounded-[25px]" style={{ backgroundColor: '#F7F7F7' }}>
              {/* Second div with background image - 70% height */}
              <div className="absolute left-0 right-0 h-[375px] top-0 z-0 rounded-tl-[25px] rounded-tr-[25px]" style={{
                backgroundColor: '#F7F7F7'
              }}>
                {/* illustration2.svg */}
                <Image
                  src="/new screen/illustration2.svg"
                  alt="Illustration 2"
                  width={637}
                  height={637}
                  className="absolute inset-0 m-auto w-[95%] h-[95%] z-20"
                />
              </div>
              <p
                className="absolute bottom-6 left-6 right-0 text-left"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '145%',
                  letterSpacing: '-2%',
                  color: '#5C5C5C'
                }}
              >
                Use your Sparks to connect with a trained Listener. Feel heard in a safe, judgment-free space
              </p>
            </div>

            {/* Fourth illustration card */}
            <div className="relative w-full max-w-[670px] h-[450px] z-10 rounded-[25px]" style={{ backgroundColor: '#F7F7F7' }}>
              {/* Second div with background image - 70% height */}
              <div className="absolute left-0 right-0 h-[375px] top-0 z-0 rounded-tl-[25px] rounded-tr-[25px]" style={{
                backgroundColor: '#F7F7F7'
              }}>
                {/* illustration3.svg */}
                <Image
                  src="/new screen/illustration3.svg"
                  alt="Illustration 3"
                  width={637}
                  height={637}
                  className="absolute inset-0 m-auto w-[95%] h-[95%] z-20"
                />
              </div>
              <p
                className="absolute bottom-6 left-6 right-0 text-left"
                style={{
                  fontFamily: 'Geist, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '145%',
                  letterSpacing: '-2%',
                  color: '#5C5C5C'
                }}
              >
                Gain clarity, share empathy, feel supported. And help fuel the emotional ecosystem—and keep the flow of connection alive.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What You Can Do With Sparks Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1600px]">
          <h2
            className="text-5xl sm:text-6xl font-extrabold text-black relative z-10"
            style={{
              fontFamily: 'Cal Sans, sans-serif',
              fontWeight: '800',
              lineHeight: '100%',
              letterSpacing: '-2%',
              verticalAlign: 'middle'
            }}
          >
            What You Can Do<br />With Sparks
          </h2>
          {/* Subtext */}
          <p
            className="text-gray-600 max-w-2xl relative z-10 mt-6"
            style={{
              fontFamily: 'Geist, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '145%',
              letterSpacing: '-2%',
              verticalAlign: 'middle',
              color: '#5C5C5C'
            }}
          >
            Sparks aren't just digital tokens — they're ways to invest in yourself, lift others, and be part of a growing movement for emotional wellbeing.
          </p>
          {/* Two-column grid: Buy Sparks + Trending Topics */}
          <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* LEFT: Buy Sparks card */}
            <div className="w-full h-[440px] sm:h-[500px] md:h-[576px] rounded-[24px] relative overflow-hidden transition-all" style={{ backgroundColor: '#EBEBEB' }}>
              {/* Inner white card container */}
              <div
                className="absolute top-4 sm:top-8 md:top-[65px] left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[468px] rounded-[20px] sm:rounded-[24px] p-3 sm:p-5 md:p-6 shadow-sm flex flex-col gap-2.5 sm:gap-3"
                style={{
                  background: 'linear-gradient(180deg, #FFFFFF 9.86%, #F7F7F7 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                {/* Pink outer box containing Frame 466 image */}
                <div
                  className="w-full rounded-[16px] p-2 flex flex-col items-center justify-center"
                  style={{ backgroundColor: '#FB37481A' }}
                >
                  <div className="w-full relative overflow-hidden rounded-[8px] shadow-sm">
                    <Image
                      src="/new screen/Frame 466.png"
                      alt="Spark balance card"
                      width={404}
                      height={161}
                      className="w-full h-auto object-cover rounded-[8px]"
                      priority
                    />
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex flex-row items-center justify-center gap-[8px] sm:gap-[16px] w-full mt-0.5 sm:mt-1">
                  {/* Top up button */}
                  <button
                    type="button"
                    className="flex-1 sm:flex-initial sm:w-[196px] h-[38px] sm:h-[40px] rounded-[10px] bg-white text-[#EB3F4D] flex items-center justify-center gap-[4px] p-[8px] sm:p-[10px] transition-all hover:bg-red-50 text-xs sm:text-sm"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 600,
                      lineHeight: '20px',
                      border: '1px solid #EB3F4D',
                    }}
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#EB3F4D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    <span>Top up</span>
                  </button>

                  {/* Gift spark button */}
                  <button
                    type="button"
                    className="flex-1 sm:flex-initial sm:w-[196px] h-[38px] sm:h-[40px] rounded-[10px] bg-white text-[#0E121B] flex items-center justify-center gap-[4px] p-[8px] sm:p-[10px] transition-all hover:bg-gray-50 text-xs sm:text-sm"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      fontWeight: 600,
                      lineHeight: '20px',
                      border: '1px solid #E1E4EA',
                      boxShadow: '0px 1px 2px 0px #0A0D1408',
                    }}
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#0E121B]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11 2v4H7.5a2.5 2.5 0 0 1 0-5H11zm2 0h3.5a2.5 2.5 0 0 1 0 5H13V2zM4 7h16a1 1 0 0 1 1 1v3H3V8a1 1 0 0 1 1-1zm1 6h6v9H5a1 1 0 0 1-1-1v-8zm8 9v-9h6v8a1 1 0 0 1-1 1h-5z" />
                    </svg>
                    <span>Gift spark</span>
                  </button>
                </div>
              </div>

              {/* Bottom text labels */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <p
                  className="text-lg sm:text-xl"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    color: '#171717'
                  }}
                >
                  Buy Sparks Invest in Yourself
                </p>
                <p
                  className="mt-0.5 sm:mt-1 text-xs sm:text-base"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 500,
                    lineHeight: '145%',
                    letterSpacing: '-2%',
                    color: '#5C5C5C'
                  }}
                >
                  Pick a bundle that fits your vibe. Each Spark = you valuing your wellbeing and clarity.
                </p>
              </div>
            </div>

            {/* RIGHT: Trending Topics Feed card */}
            <div
              className="w-full h-[440px] sm:h-[500px] md:h-[576px] rounded-[24px] relative overflow-hidden transition-all"
              style={{ backgroundColor: '#EBEBEB' }}
            >
              {/* Phone mockup — exact Figma layout */}
              <div
                className="absolute"
                style={{
                  width: '346px',
                  height: '628px',
                  top: '65px',
                  left: '113px',
                }}
              >
                {/* Phone shell */}
                <div
                  className="w-full h-full overflow-hidden shadow-2xl flex flex-col"
                  style={{
                    background: '#D1D1D1',
                    border: '1px solid #C4C4C4',
                    borderRadius: '32px',
                    padding: '16px',
                    gap: '10px',
                  }}
                >
                  {/* Screen content */}
                  <div className="bg-white flex-1 rounded-[20px] px-4 py-3 overflow-hidden">
                    {/* Cloud decoration inside white div, above title */}
                    <div className="flex items-center justify-between mb-3">
                      <Image
                        src="/new screen/Group.png"
                        alt="Cloud decoration left"
                        width={80}
                        height={16}
                        className="h-5 w-auto object-contain"
                      />
                      <Image
                        src="/new screen/Group.png"
                        alt="Cloud decoration right"
                        width={80}
                        height={16}
                        className="h-5 w-auto object-contain opacity-70"
                      />
                    </div>

                    {/* Title */}
                    <p
                      className="text-center font-semibold mb-3"
                      style={{ fontFamily: 'Geist, sans-serif', color: '#0E121B', fontSize: '13px' }}
                    >
                      Trending Conversations
                    </p>

                    {/* Topic rows */}
                    {[
                      { topic: 'Managing Anxiety & Stress', count: '2.8k' },
                      { topic: 'Healing from Trauma', count: '2.6k' },
                      { topic: 'Managing friendships', count: '2.1k' },
                      { topic: 'Career Anxiety & Job Stress', count: '2.0k' },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-medium text-[#0E121B]"
                            style={{ fontFamily: 'Geist, sans-serif', fontSize: '12px' }}
                          >
                            {item.topic}
                          </span>
                          <span
                            className="text-[#6B7280] flex items-center gap-1"
                            style={{ fontFamily: 'Geist, sans-serif', fontSize: '10px' }}
                          >
                            <svg className="w-2.5 h-2.5 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                            </svg>
                            {item.count} talked about this
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center shrink-0 ml-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom text labels — exact Figma layout */}
              <div
                style={{
                  position: 'absolute',
                  width: '573px',
                  height: '140px',
                  top: '436px',
                  left: '0',
                  backgroundColor: '#EBEBEB',
                  paddingTop: '20px',
                  paddingRight: '40px',
                  paddingBottom: '40px',
                  paddingLeft: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '28px',
                    letterSpacing: '0%',
                    color: '#171717',
                    margin: 0,
                  }}
                >
                  Trending Topics Feed
                </p>
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '145%',
                    letterSpacing: '-0.02em',
                    color: '#5C5C5C',
                    margin: 0,
                  }}
                >
                  See what's happening in real talk—heartbreaks, breakthroughs, life questions. When you know others are sharing, you feel less alone.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Listener Features */}
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

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
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
