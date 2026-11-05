"use client";

import Image from "next/image";
import Link from "next/link";

import { landingAssets } from "./assets";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const { hero: ASSETS } = landingAssets;

const floaters = [
  {
    src: ASSETS.floaterSing,
    alt: "Happy blue Spark character",
    className:
      "left-[2%] top-2 w-14 -rotate-[11deg] sm:left-[6%] sm:top-4 sm:w-20 md:left-[8%] md:top-6 md:w-[107px] lg:left-[12%]",
    delay: "0ms",
  },
  {
    src: ASSETS.floaterListen,
    alt: "Listening blue Spark character",
    className:
      "right-[2%] top-0 w-12 sm:right-[6%] sm:top-2 sm:w-[72px] md:right-[8%] md:w-[100px] lg:right-[12%]",
    delay: "150ms",
  },
] as const;

const lowerFloaters = [
  {
    src: ASSETS.floaterSad,
    alt: "Sad red Spark character",
    className:
      "left-[2%] top-0 z-20 w-12 -rotate-[15deg] sm:left-[4%] sm:w-16 md:-left-2 md:w-[82px] lg:-left-6",
    delay: "250ms",
  },
  {
    src: ASSETS.floaterWallet,
    alt: "Green wallet Spark character",
    className:
      "right-[2%] top-4 z-20 w-14 rotate-[30deg] sm:right-[4%] sm:w-18 md:-right-2 md:w-[94px] lg:-right-8",
    delay: "400ms",
  },
] as const;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white pt-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1512px] flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Headline band + floaters (desktop only — avoid tablet overlap) */}
        <div className="relative z-20 mt-10 w-full sm:mt-14 md:mt-16">
          {floaters.map((floater) => (
            <div
              key={floater.src}
              className={`pointer-events-none absolute z-0 hidden lg:block ${floater.className}`}
              aria-hidden
            >
              <div
                style={{
                  animation: "landing-float 3.2s ease-in-out infinite",
                  animationDelay: floater.delay,
                }}
              >
                <Image
                  src={floater.src}
                  alt=""
                  width={256}
                  height={256}
                  quality={90}
                  className="h-auto w-full drop-shadow-sm"
                />
              </div>
            </div>
          ))}

          <div className="relative z-10 mx-auto flex w-full max-w-[649px] flex-col items-center gap-6 text-center md:gap-8">
            <div className="flex flex-col items-center gap-4">
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

            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4">
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

        {/* Rasterized phone stack from Paper — sits flush at section bottom */}
        <div className="relative z-10 mt-8 w-full max-w-[720px] pb-0 sm:mt-10 md:mt-12 md:max-w-[835px]">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[55%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(251,55,72,0.18) 0%, rgba(92,195,235,0.16) 45%, transparent 70%)",
            }}
            aria-hidden
          />

          <div className="relative mx-auto w-full">
            {lowerFloaters.map((floater) => (
              <div
                key={floater.src}
                className={`pointer-events-none absolute ${floater.className}`}
                aria-hidden
              >
                <div
                  style={{
                    animation: "landing-float 3.2s ease-in-out infinite",
                    animationDelay: floater.delay,
                  }}
                >
                  <Image
                    src={floater.src}
                    alt=""
                    width={256}
                    height={256}
                    quality={90}
                    className="h-auto w-full drop-shadow-sm"
                  />
                </div>
              </div>
            ))}

            <Image
              src={ASSETS.phoneStack}
              alt="Ready Social app screens"
              width={1670}
              height={1228}
              quality={95}
              className="relative z-10 h-auto w-full"
              sizes="(max-width: 835px) 100vw, 835px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
