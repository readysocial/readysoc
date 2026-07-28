import Image from "next/image";

import { landingAssets } from "./assets";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const { cta: ASSETS } = landingAssets;

/**
 * Desktop composition from Paper MacBook Pro 14" - 21 / Frame 267.
 * Blue band CTA with copy left and rasterized phone stack right.
 */
export default function FinalCtaSection() {
  return (
    <section
      id="download"
      className="relative w-full overflow-x-clip bg-white px-6 py-10 lg:px-8 lg:py-12"
      aria-labelledby="final-cta-heading"
    >
      <div
        className="relative mx-auto flex min-h-[320px] w-full max-w-[1464px] flex-col justify-center overflow-hidden rounded-[24px] border border-[#2597D0] shadow-[0px_6px_0px_#2597D0] lg:min-h-0 lg:aspect-[1464/444]"
        style={{
          backgroundColor: "#1391C1",
        }}
      >
        {/* Starfield / grain lives in Paper SVG — soft fallback glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0, transparent 35%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col justify-center gap-8 px-6 py-10 sm:px-10 lg:max-w-[52%] lg:px-14 lg:py-0">
          <div className="flex max-w-[652px] flex-col gap-4">
            <h2
              id="final-cta-heading"
              className="max-w-[461px] font-[family-name:var(--font-landing-display)] text-[clamp(36px,4.4vw,64px)] font-normal leading-none tracking-[-0.02em] text-white"
            >
              Ready to start?
            </h2>
            <p className="max-w-[363px] font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-white/90">
              Download Ready Social, buy your Sparks, and spark the connections
              that matter.
            </p>
          </div>

          <a
            href={PLAY_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-fit items-center justify-center rounded-[10px] border border-[#E1E4EA] bg-white px-3.5 font-[family-name:var(--font-landing-body)] text-sm font-medium tracking-[-0.02em] text-[#1391C1] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] transition-colors hover:bg-[#f8fafc]"
          >
            Download app
          </a>
        </div>

        <div className="pointer-events-none absolute bottom-0 right-[-4%] hidden w-[55%] max-w-[785px] sm:block lg:right-[2%] lg:w-[54%]">
          <Image
            src={ASSETS.phoneStack}
            alt="Ready Social app on phones"
            width={1570}
            height={734}
            quality={95}
            className="h-auto w-full"
            sizes="(max-width: 1024px) 55vw, 785px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
