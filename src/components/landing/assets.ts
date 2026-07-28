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
    phoneCenter: "/landing/hero/phone-center.png",
    phoneLeft: "/landing/hero/phone-left.png",
    phoneRight: "/landing/hero/phone-right.png",
    floaterSing: "/landing/hero/floater-heart-sing.png",
    floaterListen: "/landing/hero/floater-heart-listen.png",
    floaterSad: "/landing/hero/floater-heart-sad.png",
    floaterWallet: "/landing/hero/floater-wallet.png",
  },
  buy: {
    phoneTopup: "/landing/buy/phone-topup.png",
    cardApple: "/landing/buy/card-apple.png",
    cardCoin: "/landing/buy/card-coin.png",
    cardPiggy: "/landing/buy/card-piggy.png",
    cardSprout: "/landing/buy/card-sprout.png",
  },
  features: {
    giftSparks: "/landing/features/gift-sparks.png",
    joinTeam: "/landing/features/join-team.png",
    productSearch: "/landing/features/product-search.png",
  },
  cta: {
    phone: "/landing/cta/phone-cta.png",
  },
  process: {
    signupModal: "/landing/process/signup-modal.png",
  },
} as const;
