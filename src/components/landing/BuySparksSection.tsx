import Image from "next/image";
import { landingAssets } from "./assets";

const { buy: ASSETS } = landingAssets;

/**
 * Desktop composition from Paper Frame 267 (1464×934).
 * Cards are pre-rotated rasters — position only, no CSS rotate.
 *
 * Art lives in a stage that maps to the lower 70% of the desktop band
 * (from ~30% down). Below `lg`, that stage sits under copy in normal flow
 * so wrapped text never collides with the collage.
 */
const STAGE_ORIGIN = 0.3;
const STAGE_SPAN = 0.7;

function stageTop(bandTopPercent: number) {
  return `${((bandTopPercent / 100 - STAGE_ORIGIN) / STAGE_SPAN) * 100}%`;
}

const LAYERS = [
  {
    src: ASSETS.cardSuccess,
    alt: "Sparks purchase success",
    // band: left 132 / top 309 / 367×442
    left: "9.02%",
    width: "25.07%",
    bandTop: 33.08,
    widthPx: 734,
    heightPx: 884,
    zIndex: 2,
  },
  {
    src: ASSETS.cardError,
    alt: "Sparks purchase failed",
    // band: left 962 / top 316 / 381×447
    left: "65.71%",
    width: "26.02%",
    bandTop: 33.83,
    widthPx: 762,
    heightPx: 894,
    zIndex: 2,
  },
  {
    src: ASSETS.cardGlowGiver,
    alt: "Glow Giver achievement",
    // band: left 204 / top 626 / 363×316
    left: "13.93%",
    width: "24.76%",
    bandTop: 67.02,
    widthPx: 726,
    heightPx: 632,
    zIndex: 1,
  },
  {
    src: ASSETS.cardGift,
    alt: "Gift Sparks screen",
    // band: left 867 / top 595 / 403×452
    left: "59.22%",
    width: "27.53%",
    bandTop: 63.7,
    widthPx: 806,
    heightPx: 904,
    zIndex: 1,
  },
  {
    src: ASSETS.phoneTopup,
    alt: "Top up Sparks screen",
    // band: left 532 / top 341 / 400×609
    left: "36.34%",
    width: "27.32%",
    bandTop: 36.51,
    widthPx: 800,
    heightPx: 1218,
    zIndex: 10,
  },
] as const;

export default function BuySparksSection() {
  return (
    <section
      id="buy-sparks"
      className="relative w-full bg-white px-6 pb-10 pt-6 lg:px-8 lg:pb-12 lg:pt-6"
      aria-labelledby="buy-sparks-heading"
    >
      <div
        className="relative mx-auto flex w-full max-w-[1464px] flex-col overflow-hidden rounded-[24px] border border-[#2597D0] shadow-[0px_6px_0px_#2597D0] lg:aspect-[1464/934] lg:block"
        style={{ backgroundColor: "#1391C1" }}
      >
        {/* Copy — in flow below lg; absolute Paper position on desktop */}
        <div className="relative z-20 mx-auto flex w-[min(92%,649px)] flex-col items-center gap-3 px-2 pb-6 pt-10 text-center sm:gap-4 sm:pb-8 sm:pt-12 lg:absolute lg:left-1/2 lg:top-[7.6%] lg:w-[min(90%,649px)] lg:-translate-x-1/2 lg:px-0 lg:pb-0 lg:pt-0">
          <h2
            id="buy-sparks-heading"
            className="w-full max-w-[461px] font-[family-name:var(--font-landing-display)] text-[clamp(32px,5vw,64px)] font-normal leading-none tracking-[-0.02em] text-white"
          >
            Buy Sparks Invest in Yourself
          </h2>
          <p className="max-w-[363px] font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.5vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-white/90">
            Emotional wellbeing starts with you. Each Spark you buy is a step
            toward balance, self-awareness, and genuine connection.
          </p>
        </div>

        {/* Art stage — below copy on tablet; lower 70% of band on desktop */}
        <div
          className="relative mx-auto aspect-[1464/660] w-full max-w-[920px] origin-top scale-[0.92] sm:scale-95 lg:absolute lg:inset-x-0 lg:bottom-0 lg:top-[30%] lg:aspect-auto lg:max-w-none lg:scale-100"
        >
          {LAYERS.map((layer) => (
            <div
              key={layer.src}
              className="absolute"
              style={{
                left: layer.left,
                width: layer.width,
                top: stageTop(layer.bandTop),
                zIndex: layer.zIndex,
              }}
            >
              <Image
                src={layer.src}
                alt={layer.alt}
                width={layer.widthPx}
                height={layer.heightPx}
                quality={95}
                className="h-auto w-full"
                sizes="(max-width: 1024px) 40vw, 400px"
                priority={layer.src === ASSETS.phoneTopup}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
