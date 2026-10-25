# TODO

Website items from the full follow-up list in
`ready-social-fe/docs/follow-ups.md`.

## Hide purchase links when opened from the app (App Store 3.1.1)

The iOS app no longer links to `/spark-bundle`, but its Settings still opens
Terms, Privacy and FAQ here, and every page has a navbar link to buying.
When a page is opened with `?from=app`, hide purchase links and sections for
the rest of that browsing session:

- `src/components/Navbar.tsx` (bundle link)
- `src/components/landing/*` (Buy Sparks, hero and "how Sparks work" CTAs)
- `src/components/FAQ.tsx` (links to buying)

The app side adds `?from=app` to those links, and fixes its Privacy link,
which points at `/privacy-policy` instead of `/privacy`. Email links don't
carry the parameter and show the normal site.

The earlier plan for an `/account` page is dropped: iOS no longer has a web
account button, and a page that links to purchase would still count as
steering.

## Lint script is broken

`npm run lint` runs `next lint`, which Next.js 16 removed. Switch the
script to the ESLint CLI (`eslint .`).

## Bundle prices are hardcoded

`src/lib/spark-bundles.ts` assumes ₦1,500 per Spark; the charge follows the
admin rate. Read the rate from the API.

Staging deployment: https://vercel.com/imdmanuels-projects/readysoc-staging
