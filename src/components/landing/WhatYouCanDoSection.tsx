import Image from "next/image";
import Link from "next/link";

import { landingAssets } from "./assets";

const { features: ASSETS } = landingAssets;

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const cardTitleClass =
  "font-[family-name:var(--font-landing-body)] text-lg font-medium leading-7 text-[#171717] sm:text-xl";
const cardBodyClass =
  "mt-1.5 font-[family-name:var(--font-landing-body)] text-[clamp(13px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]";

/**
 * Desktop composition from Paper MacBook Pro 14" - 18 (1512×1642).
 * Fixed 576px cards, absolute mockups, 755/573 width ratio.
 */
export default function WhatYouCanDoSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-x-clip bg-[#F7F7F7] px-6 py-16 lg:px-10 lg:py-24"
      aria-labelledby="what-you-can-do-heading"
    >
      <div className="relative mx-auto flex w-full max-w-[1512px] flex-col gap-10 lg:gap-14 xl:px-5">
        <div className="flex max-w-[649px] flex-col gap-4">
          <h2
            id="what-you-can-do-heading"
            className="max-w-[475px] font-[family-name:var(--font-landing-display)] text-[clamp(32px,4.2vw,64px)] font-normal leading-none tracking-[-0.02em] text-[#171717]"
          >
            What You Can Do With Sparks
          </h2>
          <p className="font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
            Sparks aren&apos;t just digital tokens — they&apos;re ways to invest
            in yourself, lift others, and be part of a growing movement for
            emotional wellbeing.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Row 1: wide Buy + narrow Trending */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
            <article className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl bg-[#EBEBEB] lg:h-[576px] lg:min-h-0 lg:flex-[755] lg:min-w-0">
              <div className="relative mx-auto mt-8 w-[min(88%,468px)] sm:mt-12 lg:absolute lg:left-1/2 lg:top-[65px] lg:mt-0 lg:w-[468px] lg:-translate-x-1/2">
                <div className="rounded-3xl bg-gradient-to-b from-white to-[#F7F7F7] p-4 sm:p-6">
                  <Image
                    src={ASSETS.buyWidget}
                    alt="Spark balance with Top up and Gift actions"
                    width={840}
                    height={466}
                    quality={90}
                    className="h-auto w-full"
                    sizes="468px"
                  />
                </div>
              </div>
              <div className="mt-auto px-6 pb-6 pt-4 sm:px-10 sm:pb-10 lg:absolute lg:left-10 lg:top-[479px] lg:mt-0 lg:w-[min(100%-80px,675px)] lg:px-0 lg:pb-0 lg:pt-0">
                <h3 className={cardTitleClass}>Buy Sparks Invest in Yourself</h3>
                <p className={cardBodyClass}>
                  Pick a bundle that fits your vibe. Each Spark = you valuing
                  your wellbeing and clarity.
                </p>
              </div>
            </article>

            <article className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl bg-[#EBEBEB] lg:h-[576px] lg:min-h-0 lg:flex-[573] lg:min-w-0">
              <div className="relative mx-auto mt-10 w-[min(70%,346px)] rounded-[32px] bg-[#D1D1D1] p-4 lg:absolute lg:left-1/2 lg:top-[65px] lg:mt-0 lg:h-[628px] lg:w-[346px] lg:-translate-x-1/2">
                <Image
                  src={ASSETS.trendingPhone}
                  alt="Trending conversations on Ready Social"
                  width={692}
                  height={1256}
                  quality={90}
                  className="h-auto w-full rounded-[20px] lg:h-full lg:object-cover lg:object-top"
                  sizes="346px"
                />
              </div>
              <div className="relative z-10 mt-auto bg-[#EBEBEB] px-6 pb-8 pt-5 sm:px-10 sm:pb-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:px-10 lg:pb-10 lg:pt-5">
                <h3 className={cardTitleClass}>Trending Topics Feed</h3>
                <p className={cardBodyClass}>
                  See what&apos;s happening in real talk—heartbreaks,
                  breakthroughs, life questions. When you know others are
                  sharing, you feel less alone.
                </p>
              </div>
            </article>
          </div>

          {/* Row 2: narrow Gift + wide Join */}
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
            <article className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl bg-[#EBEBEB] lg:h-[576px] lg:min-h-0 lg:flex-[573] lg:min-w-0">
              <div className="relative mx-auto mt-10 w-[min(70%,346px)] rounded-[32px] bg-[#D1D1D1] p-4 lg:absolute lg:left-1/2 lg:top-[65px] lg:mt-0 lg:h-[628px] lg:w-[346px] lg:-translate-x-1/2">
                <Image
                  src={ASSETS.giftPhone}
                  alt="Gift Sparks screen"
                  width={694}
                  height={1258}
                  quality={90}
                  className="h-auto w-full rounded-[20px] lg:h-full lg:object-cover lg:object-top"
                  sizes="346px"
                />
              </div>
              <div className="relative z-10 mt-auto bg-[#EBEBEB] px-6 pb-8 pt-5 sm:px-10 sm:pb-10 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:p-10">
                <h3 className={cardTitleClass}>Gift Sparks Show You Care</h3>
                <p className={cardBodyClass}>
                  Send a Spark. Offer someone support when they need it. Because
                  empathy is best when action-based.
                </p>
              </div>
            </article>

            <article className="relative flex min-h-[420px] w-full flex-col overflow-hidden rounded-3xl bg-[#EBEBEB] lg:h-[576px] lg:min-h-0 lg:flex-[755] lg:min-w-0">
              <div className="relative mx-auto mt-8 w-[min(90%,470px)] sm:mt-10 lg:absolute lg:left-[calc(50%-6px)] lg:top-[calc(50%-99.5px)] lg:mt-0 lg:w-[470px] lg:-translate-x-1/2 lg:-translate-y-1/2">
                <Image
                  src={ASSETS.joinTeam}
                  alt="Join as Listener or Talent"
                  width={942}
                  height={494}
                  quality={90}
                  className="h-auto w-full"
                  sizes="470px"
                />
              </div>
              <div className="mt-auto px-6 pb-6 pt-2 sm:px-10 sm:pb-8 lg:absolute lg:left-0 lg:top-[368px] lg:mt-0 lg:w-full lg:px-10 lg:pb-0 lg:pt-0">
                <h3 className={cardTitleClass}>
                  Join Our Team (Talent or Listener)
                </h3>
                <p className={`${cardBodyClass} max-w-[696px]`}>
                  Want to be part of the spark movement? Whether you&apos;re
                  ready to support others as a Listener or share your voice as a
                  Talent, we&apos;ve got a spot for you.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:gap-6 lg:absolute lg:left-[133px] lg:top-[125px] lg:mt-0">
                  <a
                    href={PLAY_STORE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[38px] w-full items-center justify-center rounded-[10px] font-[family-name:var(--font-landing-body)] text-[12.5px] font-medium tracking-[-0.02em] text-white shadow-[0px_1px_2px_rgba(23,77,163,0.4),0px_0px_0px_1px_#e93544] transition-opacity hover:opacity-90 sm:w-[232px]"
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, rgba(255,255,255,0) 12.5%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #fb3748, #fb3748)",
                    }}
                  >
                    Join as a Listener
                  </a>
                  <Link
                    href="/signup"
                    className="inline-flex h-[38px] w-full items-center justify-center rounded-[10px] border border-[#E93544] bg-white font-[family-name:var(--font-landing-body)] text-[12.5px] font-medium tracking-[-0.02em] text-[#171717] shadow-[0px_1px_2px_rgba(23,77,163,0.4)] transition-colors hover:bg-[#fff5f5] sm:w-[232px]"
                  >
                    Join as a Talent
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
