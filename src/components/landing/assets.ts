/**
 * Landing image paths — keep in sync with public/landing/<section>/
 *
 * Structure:
 *   brand/     logo
 *   hero/      phone stack + floaters (2x PNGs)
 *   buy/       Buy Sparks band
 *   process/   How Sparks… section
 *   features/  What you can do grid
 *   cta/       Final CTA
 */
export const landingAssets = {
  brand: {
    logoMark: "/landing/brand/logo-mark.svg",
  },
  hero: {
    /** Pre-rasterized 3-phone stack from Paper (blur baked in) */
    phoneStack: "/landing/hero/phone-stack.png",
    floaterSing: "/landing/hero/floater-heart-sing.png",
    floaterListen: "/landing/hero/floater-heart-listen.png",
    floaterSad: "/landing/hero/floater-heart-sad.png",
    floaterWallet: "/landing/hero/floater-wallet.png",
  },
  buy: {
    phoneTopup: "/landing/buy/phone-topup.png",
    cardSuccess: "/landing/buy/card-success.png",
    cardError: "/landing/buy/card-error.png",
    cardGlowGiver: "/landing/buy/card-glow-giver.png",
    cardGift: "/landing/buy/card-gift.png",
  },
  features: {
    buyWidget: "/landing/features/buy-sparks-widget.png",
    trendingPhone: "/landing/features/trending-phone.png",
    giftPhone: "/landing/features/gift-phone.png",
    joinTeam: "/landing/features/join-team.png",
  },
  listeners: {
    iconSafe: "/landing/listeners/icon-safe.png",
    iconIdentity: "/landing/listeners/icon-identity.png",
    iconTrained: "/landing/listeners/icon-trained.png",
    iconCare: "/landing/listeners/icon-care.png",
  },
  cta: {
    phone: "/landing/cta/phone-cta.png",
  },
  process: {
    stepSignupPattern: "/landing/process/step-signup-pattern.png",
    stepGift: "/landing/process/step-gift.png",
    stepListener: "/landing/process/step-listener.png",
    stepClarity: "/landing/process/step-clarity.png",
  },
} as const;
