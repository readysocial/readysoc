import Image from "next/image";
import Link from "next/link";

import { landingAssets } from "./assets";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.tayor99.readysocial";

const { process: ASSETS } = landingAssets;

const NAV_LINKS = [
  { label: "Download the App", href: PLAY_STORE, external: true },
  { label: "Buy or Gift a Spark", href: "/spark-bundle" },
  { label: "Book & Attend a Listener Session", href: "#how-it-works" },
  { label: "Spark Real Conversations", href: "#how-it-works" },
] as const;

const STEPS = [
  {
    kind: "signup" as const,
    caption: "Tap into the Ready Social universe. Sign-up in moments.",
  },
  {
    kind: "image" as const,
    src: ASSETS.stepGift,
    alt: "Gifting a Spark to someone who needs it",
    caption:
      "Choose a Spark bundle for yourself, or send a Spark to someone who needs it. Because self-care and care for others matter.",
    width: 1394,
    height: 680,
  },
  {
    kind: "image" as const,
    src: ASSETS.stepListener,
    alt: "Connecting with a trained Listener",
    caption:
      "Use your Sparks to connect with a trained Listener. Feel heard in a safe, judgment-free space",
    width: 1394,
    height: 680,
  },
  {
    kind: "image" as const,
    src: ASSETS.stepClarity,
    alt: "One-on-one listening session",
    caption:
      "Gain clarity, share empathy, feel supported. And help fuel the emotional ecosystem—and keep the flow of connection alive.",
    width: 1394,
    height: 680,
  },
];

function SignupStepCard() {
  return (
    <div className="relative aspect-[729/458] w-full overflow-hidden rounded-3xl bg-[#F7F7F7]">
      {/* Decorative pattern — tiled cover, no rotated layers (avoids overflow) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `url(${ASSETS.stepSignupPattern})`,
          backgroundSize: "55%",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />

      {/* Signup modal */}
      <div className="absolute left-1/2 top-[calc(50%-30px)] z-10 flex w-[min(88%,336px)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[22px] rounded-[22.5px] bg-white px-[22px] py-[38px] outline outline-1 outline-[#D5F1FF]">
        <div className="flex w-full flex-col items-center gap-2 px-1 text-center">
          <h3 className="max-w-[186px] font-[family-name:var(--font-landing-body)] text-[clamp(18px,2vw,22.5px)] font-semibold leading-[1.33] tracking-[-0.04em] text-[#0E121B]">
            Share Your Thoughts Freely
          </h3>
          <p className="max-w-[216px] font-[family-name:var(--font-landing-body)] text-[clamp(12px,1.2vw,13px)] font-normal leading-[1.43] tracking-[-0.02em] text-[#525866]">
            From everyday emotions to bigger social conversations
          </p>
        </div>

        <div className="flex w-full flex-col gap-[15px]">
          <Link
            href="/login"
            className="inline-flex h-[38px] w-full items-center justify-center rounded-[9.6px] border border-[#E1E4EA] bg-white font-[family-name:var(--font-landing-body)] text-[12.5px] font-medium tracking-[-0.02em] text-[#525866] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] transition-colors hover:bg-[#f8fafc]"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-[38px] w-full items-center justify-center rounded-[9.6px] font-[family-name:var(--font-landing-body)] text-[12.5px] font-medium tracking-[-0.02em] text-white shadow-[0px_1px_2px_rgba(23,77,163,0.4),0px_0px_0px_1px_#e93544] transition-opacity hover:opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(255,255,255,0) 12.5%, rgba(255,255,255,0.2) 100%), linear-gradient(90deg, #fb3748, #fb3748)",
            }}
          >
            Get started
          </Link>
        </div>
      </div>

      <p className="absolute bottom-[5%] left-6 right-6 z-10 font-[family-name:var(--font-landing-body)] text-[clamp(13px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
        Tap into the Ready Social universe. Sign-up in moments.
      </p>
    </div>
  );
}

function ImageStepCard({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <div className="relative aspect-[729/458] w-full overflow-hidden rounded-3xl bg-[#F7F7F7]">
      <div className="absolute left-1/2 top-[calc(50%-43px)] w-[95.6%] -translate-x-1/2 -translate-y-1/2">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={90}
          className="h-auto w-full rounded-lg"
          sizes="(max-width: 1024px) 100vw, 729px"
        />
      </div>
      <p className="absolute bottom-[5%] left-6 right-6 z-10 max-w-[655px] font-[family-name:var(--font-landing-body)] text-[clamp(13px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
        {caption}
      </p>
    </div>
  );
}

/**
 * Desktop composition from Paper MacBook Pro 14" - 17 (1512×2371).
 * Left step nav + right stacked process cards.
 */
export default function HowSparksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-x-clip bg-white px-6 py-16 lg:px-10 lg:py-24"
      aria-labelledby="how-sparks-heading"
    >
      <div className="relative mx-auto flex w-full max-w-[1512px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16 xl:px-5">
        {/* Left nav — sticky on desktop */}
        <nav
          className="order-2 flex w-full max-w-[476px] flex-col gap-5 lg:sticky lg:top-28 lg:order-1 lg:w-[min(476px,34%)] lg:shrink-0 lg:pt-[250px]"
          aria-label="How Sparks works"
        >
          {NAV_LINKS.map((link) => {
            const className =
              "block w-full border-t border-[#E1E4EA] pt-4 font-[family-name:var(--font-landing-display)] text-[clamp(18px,1.6vw,24px)] font-normal leading-8 tracking-normal text-[#5C5C5C] transition-colors hover:text-[#171717]";

            if ("external" in link && link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right column — min-w-0 so flex can shrink below 729px without page overflow */}
        <div className="order-1 flex w-full min-w-0 max-w-[729px] flex-col gap-10 lg:order-2 lg:flex-1">
          <div className="flex max-w-[649px] flex-col gap-4">
            <h2
              id="how-sparks-heading"
              className="font-[family-name:var(--font-landing-display)] text-[clamp(32px,4.2vw,64px)] font-normal leading-none tracking-[-0.02em] text-[#171717]"
            >
              How Sparks Turn Conversations Into Care
            </h2>
            <p className="max-w-[496px] font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
              From a single tap to a meaningful talk — here&apos;s how Sparks
              keep emotional wellbeing simple, human, and real.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {STEPS.map((step) =>
              step.kind === "signup" ? (
                <SignupStepCard key={step.caption} />
              ) : (
                <ImageStepCard
                  key={step.src}
                  src={step.src}
                  alt={step.alt}
                  caption={step.caption}
                  width={step.width}
                  height={step.height}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
