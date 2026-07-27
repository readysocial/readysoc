"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const floaters = [
  {
    src: "/landing/spark-coin.png",
    alt: "Happy blue Spark character",
    className:
      "left-[2%] top-2 w-14 -rotate-[11deg] sm:left-[6%] sm:top-4 sm:w-20 md:left-[8%] md:top-6 md:w-[107px] lg:left-[12%]",
    delay: "700ms",
  },
  {
    src: "/landing/spark-sprout.png",
    alt: "Listening blue Spark character",
    className:
      "right-[2%] top-0 w-12 sm:right-[6%] sm:top-2 sm:w-[72px] md:right-[8%] md:w-[100px] lg:right-[12%]",
    delay: "850ms",
  },
] as const;

const lowerFloaters = [
  {
    src: "/landing/spark-apple.png",
    alt: "Sad red Spark character",
    className:
      "left-[2%] top-0 z-20 w-12 -rotate-[15deg] sm:left-[4%] sm:w-16 md:-left-2 md:w-[82px] lg:-left-6",
    delay: "950ms",
  },
  {
    src: "/landing/spark-piggy.png",
    alt: "Green wallet Spark character",
    className:
      "right-[2%] top-4 z-20 w-14 rotate-[30deg] sm:right-[4%] sm:w-18 md:-right-2 md:w-[94px] lg:-right-8",
    delay: "1100ms",
  },
] as const;

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-x-clip bg-white pt-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1512px] flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Headline band + floaters */}
        <div className="relative z-20 mt-10 w-full sm:mt-14 md:mt-16">
          {floaters.map((floater) => (
            <div
              key={floater.src}
              className={`pointer-events-none absolute z-0 transition-all duration-1000 ${
                floater.className
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: floater.delay }}
              aria-hidden
            >
              <div
                style={{
                  animation: isVisible
                    ? "landing-float 3.2s ease-in-out infinite"
                    : undefined,
                  animationDelay: floater.delay,
                }}
              >
                <Image
                  src={floater.src}
                  alt=""
                  width={128}
                  height={128}
                  className="h-auto w-full drop-shadow-sm"
                />
              </div>
            </div>
          ))}

          <div className="relative z-10 mx-auto flex w-full max-w-[649px] flex-col items-center gap-6 text-center md:gap-8">
            <div
              className={`flex flex-col items-center gap-4 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h1 className="font-[family-name:var(--font-landing-display)] text-[28px] font-normal leading-none tracking-[-0.02em] text-[#171717] sm:text-5xl md:text-[64px]">
                Real Conversations.
                <br />
                Sparked. Just for You.
              </h1>
              <p className="max-w-[496px] font-[family-name:var(--font-landing-body)] text-[13px] font-medium leading-[1.45] tracking-[-0.02em] text-[#5c5c5c] sm:text-base">
                The emotional currency fueling genuine connection on Ready
                Social. Whether you&apos;re looking to invest in yourself, offer
                a caring lift to someone else, or join a movement of empathy,
                Sparks make it real.
              </p>
            </div>

            <div
              className={`flex flex-row items-center justify-center gap-3 transition-all duration-700 sm:gap-4 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "350ms" }}
            >
              <a
                href={PLAY_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-[10px] px-3.5 font-[family-name:var(--font-landing-body)] text-sm font-medium tracking-[-0.02em] text-white shadow-[0px_1px_2px_0px_rgba(23,77,163,0.4),0px_0px_0px_1px_#e93544] transition-opacity hover:opacity-90"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, rgba(255,255,255,0) 12.5%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #fb3748, #fb3748)",
                }}
              >
                Get the app
              </a>
              <Link
                href="/spark-bundle"
                className="inline-flex h-10 items-center justify-center rounded-[10px] border border-[#e1e4ea] bg-white px-3.5 font-[family-name:var(--font-landing-body)] text-sm font-medium tracking-[-0.02em] text-[#525866] shadow-[0px_1px_2px_0px_rgba(10,13,20,0.03)] transition-colors hover:bg-[#f8fafc]"
              >
                Get sparks
              </Link>
            </div>
          </div>
        </div>

        {/* Phone stack */}
        <div
          className={`relative z-10 mt-8 w-full max-w-[835px] transition-all duration-1000 sm:mt-10 md:mt-12 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(251,55,72,0.18) 0%, rgba(92,195,235,0.16) 45%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto aspect-[835/780] w-full">
            {lowerFloaters.map((floater) => (
              <div
                key={floater.src}
                className={`pointer-events-none absolute transition-all duration-1000 ${
                  floater.className
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: floater.delay }}
                aria-hidden
              >
                <div
                  style={{
                    animation: isVisible
                      ? "landing-float 3.2s ease-in-out infinite"
                      : undefined,
                    animationDelay: floater.delay,
                  }}
                >
                  <Image
                    src={floater.src}
                    alt=""
                    width={128}
                    height={128}
                    className="h-auto w-full drop-shadow-sm"
                  />
                </div>
              </div>
            ))}

            <div className="absolute left-0 top-[8%] hidden w-[48%] opacity-50 sm:block md:w-[47.9%]">
              <Image
                src="/landing/phone-left.png"
                alt="Ready Social achievements screen"
                width={800}
                height={1088}
                className="h-auto w-full"
                sizes="(max-width: 640px) 0px, 40vw"
              />
            </div>

            <div className="absolute right-0 top-[8%] hidden w-[48%] opacity-50 sm:block md:w-[47.9%]">
              <Image
                src="/landing/phone-right.png"
                alt="Ready Social listener sessions screen"
                width={800}
                height={1088}
                className="h-auto w-full"
                sizes="(max-width: 640px) 0px, 40vw"
              />
            </div>

            <div className="absolute left-1/2 top-0 z-10 w-[72%] -translate-x-1/2 sm:w-[47.9%]">
              <Image
                src="/landing/phone-center.png"
                alt="Ready Social home screen"
                width={800}
                height={1228}
                className="h-auto w-full drop-shadow-2xl"
                sizes="(max-width: 640px) 72vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
