# TODO

## Store compliance: dedicated web account page

The iOS app's **Settings → Manage your account on the web** currently deep-links
straight to `/spark-bundle`, which is a purchase page. For stricter App Store
compliance, add an authenticated `/account` page on this site that shows the
balance and account details, with top-up as a secondary action, and point the
mobile button there instead.

- Mobile: `ready-social-fe/app/(user)/Settings.tsx` (`WEB_TOP_UP_URL`)
- Web: add `src/app/account/page.tsx`
- Keep `/spark-bundle` as the actual top-up page.

The current compromise keeps the mobile label neutral ("Manage your account on
the web") instead of an explicit purchase CTA.
