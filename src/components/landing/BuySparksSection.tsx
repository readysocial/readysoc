import Image from "next/image";
import { landingAssets } from "./assets";

const { buy: ASSETS } = landingAssets;

/**
 * Desktop composition from updated Paper Frame 267 (1464×934).
 * Cards are pre-rotated rasters — position only, no CSS rotate.
 * Positions are % of the 1464×934 band.
 */
const LAYERS = [
  {
    src: ASSETS.cardSuccess,
    alt: "Sparks purchase success",
    // left 132 / top 309 / 367×442
    style: {
      left: "9.02%",
      top: "33.08%",
      width: "25.07%",
    },
    width: 734,
    height: 884,
    zIndex: 2,
  },
  {
    src: ASSETS.cardError,
    alt: "Sparks purchase failed",
    // left 962 / top 316 / 381×447
    style: {
      left: "65.71%",
      top: "33.83%",
      width: "26.02%",
    },
    width: 762,
    height: 894,
    zIndex: 2,
  },
  {
    src: ASSETS.cardGlowGiver,
    alt: "Glow Giver achievement",
    // left 204 / top 626 / 363×316
    style: {
      left: "13.93%",
      top: "67.02%",
      width: "24.76%",
    },
    width: 726,
    height: 632,
    zIndex: 1,
  },
  {
    src: ASSETS.cardGift,
    alt: "Gift Sparks screen",
    // left 867 / top 595 / 403×452
    style: {
      left: "59.22%",
      top: "63.70%",
      width: "27.53%",
    },
    width: 806,
    height: 904,
    zIndex: 1,
  },
  {
    src: ASSETS.phoneTopup,
    alt: "Top up Sparks screen",
    // left 532 / top 341 / 400×609 (relative to band)
    style: {
      left: "36.34%",
      top: "36.51%",
      width: "27.32%",
    },
    width: 800,
    height: 1218,
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
        className="relative mx-auto w-full max-w-[1464px] overflow-hidden rounded-[24px] border border-[#2597D0] shadow-[0px_6px_0px_#2597D0]"
        style={{
          backgroundColor: "#1391C1",
          aspectRatio: "1464 / 934",
        }}
      >
        {/* Title — Paper top 71px, centered */}
        <div
          className="absolute left-1/2 z-20 flex w-[min(90%,649px)] -translate-x-1/2 flex-col items-center gap-4 text-center"
          style={{ top: "7.6%" }}
        >
          <h2
            id="buy-sparks-heading"
            className="w-full max-w-[461px] font-[family-name:var(--font-landing-display)] text-[clamp(36px,4.4vw,64px)] font-normal leading-none tracking-[-0.02em] text-white"
          >
            Buy Sparks Invest in Yourself
          </h2>
          <p className="max-w-[363px] font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-white/90">
            Emotional wellbeing starts with you. Each Spark you buy is a step
            toward balance, self-awareness, and genuine connection.
          </p>
        </div>

        {LAYERS.map((layer) => (
          <div
            key={layer.src}
            className="absolute"
            style={{ ...layer.style, zIndex: layer.zIndex }}
          >
            <Image
              src={layer.src}
              alt={layer.alt}
              width={layer.width}
              height={layer.height}
              quality={95}
              className="h-auto w-full"
              sizes={`${layer.width}px`}
              priority={layer.src === ASSETS.phoneTopup}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
