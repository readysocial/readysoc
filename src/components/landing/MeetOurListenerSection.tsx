import Image from "next/image";

import { landingAssets } from "./assets";

const { listeners: ASSETS } = landingAssets;

const CARDS = [
  {
    title: "What you say is safe.",
    body: "Every conversation with a Listener stays private. We believe openness only happens when you feel secure — so your words, emotions, and experiences are protected at every step. Nothing leaves the space you choose to share in.",
    icon: ASSETS.iconSafe,
    bg: "#EBF1FF",
    outline: "#C0D5FF",
  },
  {
    title: "You stay in control of your identity.",
    body: "Ready Social lets you decide how much of yourself you share. Whether you want to stay completely anonymous or open up freely, you have full control over your identity and comfort level — no pressure, just presence.",
    icon: ASSETS.iconIdentity,
    bg: "#FFF3EB",
    outline: "#FFD9C0",
  },
  {
    title: "They’re equipped to listen on matters big or small.",
    body: "Our Listeners aren’t just kind hearts — they’re trained and certified in emotional support, active listening, and empathy. From small worries to big life changes, they’re here to meet you where you are, with care that feels professional yet personal.",
    icon: ASSETS.iconTrained,
    bg: "#FAFAFA",
    outline: "#EBEBEB",
  },
  {
    title: "Real people who care and create safe, non-judgmental space.",
    body: "Each Listener brings warmth, understanding, and genuine curiosity about your story. No judgment, no fixing — just someone who listens with empathy and helps you feel seen, heard, and supported in the moment you need it most.",
    icon: ASSETS.iconCare,
    bg: "#FFF4DA",
    outline: "#EBEBEB",
  },
] as const;

/**
 * Desktop composition from Paper MacBook Pro 14" - 19 (1512×841).
 * Four tinted cards in a row; fourth peeks (horizontal scroll).
 */
export default function MeetOurListenerSection() {
  return (
    <section
      id="meet-our-listener"
      className="relative w-full overflow-x-clip bg-white px-0 py-16 lg:py-24"
      aria-labelledby="meet-listener-heading"
    >
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 lg:gap-14">
        <div className="mx-auto flex w-full max-w-[649px] flex-col items-center gap-4 px-6 text-center">
          <h2
            id="meet-listener-heading"
            className="font-[family-name:var(--font-landing-display)] text-[clamp(32px,4.2vw,64px)] font-normal leading-none tracking-[-0.02em] text-[#171717]"
          >
            Meet Our Listener
          </h2>
          <p className="font-[family-name:var(--font-landing-body)] text-[clamp(14px,1.1vw,16px)] font-medium leading-[1.45] tracking-[-0.02em] text-[#5C5C5C]">
            Our Listeners are trained, certified, warm and relatable.
          </p>
        </div>

        {/* Paper peeks the 4th card — keep that with horizontal scroll */}
        <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="mx-auto flex w-max max-w-none gap-6 px-6 lg:px-[clamp(24px,4.8vw,73px)]">
            {CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-[382px] w-[min(85vw,429px)] shrink-0 flex-col justify-between rounded-3xl p-8"
                style={{
                  backgroundColor: card.bg,
                  outline: `0.5px solid ${card.outline}`,
                  outlineOffset: "-0.5px",
                }}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={162}
                  height={160}
                  className="h-20 w-20 object-contain"
                />
                <div className="flex max-w-[365px] flex-col gap-3">
                  <h3 className="font-[family-name:var(--font-landing-body)] text-[clamp(18px,1.6vw,24px)] font-medium text-[#0E121B]">
                    {card.title}
                  </h3>
                  <p className="font-[family-name:var(--font-landing-body)] text-sm font-normal leading-5 tracking-[-0.02em] text-[#525866]">
                    {card.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
