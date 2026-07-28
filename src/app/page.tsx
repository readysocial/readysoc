"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HeroSection, BuySparksSection, HowSparksSection } from "@/components/landing";
import ListenerFeatures from "@/components/ListenerFeatures";
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

      {/* What You Can Do With Sparks Section */}
      <section className="relative w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
        <div className="container mx-auto max-w-[1600px]">
          <h2
            className="text-5xl sm:text-6xl font-extrabold text-black relative z-10"
            style={{
              fontFamily: "Cal Sans, sans-serif",
              fontWeight: "800",
              lineHeight: "100%",
              letterSpacing: "-2%",
              verticalAlign: "middle",
            }}
          >
            What You Can Do
            <br />
            With Sparks
          </h2>
          {/* Subtext */}
          <p
            className="text-gray-600 max-w-2xl relative z-10 mt-6"
            style={{
              fontFamily: "Geist, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "145%",
              letterSpacing: "-2%",
              verticalAlign: "middle",
              color: "#5C5C5C",
            }}
          >
            Sparks aren't just digital tokens — they're ways to invest in
            yourself, lift others, and be part of a growing movement for
            emotional wellbeing.
          </p>
          {/* Two-column grid: Buy Sparks + Trending Topics */}
          <div className="w-full mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* LEFT: Buy Sparks card */}
            <div
              className="w-full h-[440px] sm:h-[500px] md:h-[576px] rounded-[24px] relative overflow-hidden transition-all"
              style={{ backgroundColor: "#EBEBEB" }}
            >
              {/* Inner white card container */}
              <div
                className="absolute top-4 sm:top-8 md:top-[65px] left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[468px] rounded-[20px] sm:rounded-[24px] p-3 sm:p-5 md:p-6 shadow-sm flex flex-col gap-2.5 sm:gap-3"
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 9.86%, #F7F7F7 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                {/* Pink outer box containing Frame 466 image */}
                <div
                  className="w-full rounded-[16px] p-2 flex flex-col items-center justify-center"
                  style={{ backgroundColor: "#FB37481A" }}
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
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 600,
                      lineHeight: "20px",
                      border: "1px solid #EB3F4D",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#EB3F4D]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                    <span>Top up</span>
                  </button>

                  {/* Gift spark button */}
                  <button
                    type="button"
                    className="flex-1 sm:flex-initial sm:w-[196px] h-[38px] sm:h-[40px] rounded-[10px] bg-white text-[#0E121B] flex items-center justify-center gap-[4px] p-[8px] sm:p-[10px] transition-all hover:bg-gray-50 text-xs sm:text-sm"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 600,
                      lineHeight: "20px",
                      border: "1px solid #E1E4EA",
                      boxShadow: "0px 1px 2px 0px #0A0D1408",
                    }}
                  >
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-[#0E121B]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
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
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 600,
                    lineHeight: "28px",
                    letterSpacing: "0%",
                    color: "#171717",
                  }}
                >
                  Buy Sparks Invest in Yourself
                </p>
                <p
                  className="mt-0.5 sm:mt-1 text-xs sm:text-base"
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 500,
                    lineHeight: "145%",
                    letterSpacing: "-2%",
                    color: "#5C5C5C",
                  }}
                >
                  Pick a bundle that fits your vibe. Each Spark = you valuing
                  your wellbeing and clarity.
                </p>
              </div>
            </div>

            {/* RIGHT: Trending Topics Feed card */}
            <div
              className="w-full h-[440px] sm:h-[500px] md:h-[576px] rounded-[24px] relative overflow-hidden transition-all"
              style={{ backgroundColor: "#EBEBEB" }}
            >
              {/* Phone mockup — exact Figma layout */}
              <div
                className="absolute"
                style={{
                  width: "346px",
                  height: "628px",
                  top: "65px",
                  left: "113px",
                }}
              >
                {/* Phone shell */}
                <div
                  className="w-full h-full overflow-hidden shadow-2xl flex flex-col"
                  style={{
                    background: "#D1D1D1",
                    border: "1px solid #C4C4C4",
                    borderRadius: "32px",
                    padding: "16px",
                    gap: "10px",
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
                      style={{
                        fontFamily: "Geist, sans-serif",
                        color: "#0E121B",
                        fontSize: "13px",
                      }}
                    >
                      Trending Conversations
                    </p>

                    {/* Topic rows */}
                    {[
                      { topic: "Managing Anxiety & Stress", count: "2.8k" },
                      { topic: "Healing from Trauma", count: "2.6k" },
                      { topic: "Managing friendships", count: "2.1k" },
                      { topic: "Career Anxiety & Job Stress", count: "2.0k" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2.5 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-medium text-[#0E121B]"
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontSize: "12px",
                            }}
                          >
                            {item.topic}
                          </span>
                          <span
                            className="text-[#6B7280] flex items-center gap-1"
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontSize: "10px",
                            }}
                          >
                            <svg
                              className="w-2.5 h-2.5 text-blue-400 shrink-0"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
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
                  position: "absolute",
                  width: "573px",
                  height: "140px",
                  top: "436px",
                  left: "0",
                  backgroundColor: "#EBEBEB",
                  paddingTop: "20px",
                  paddingRight: "40px",
                  paddingBottom: "40px",
                  paddingLeft: "40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "28px",
                    letterSpacing: "0%",
                    color: "#171717",
                    margin: 0,
                  }}
                >
                  Trending Topics Feed
                </p>
                <p
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "145%",
                    letterSpacing: "-0.02em",
                    color: "#5C5C5C",
                    margin: 0,
                  }}
                >
                  See what's happening in real talk—heartbreaks, breakthroughs,
                  life questions. When you know others are sharing, you feel
                  less alone.
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
