# LL Fruits — Lachhmandas Lalchand

Marketing website for **Lachhmandas Lalchand (LL Fruits)** — fruit merchant &
commission agent at 33-B, New Fruit Market, Naroda Road, Ahmedabad.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Every page is
statically pre-rendered.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint    # eslint
```

## Pages

| Route       | Contents                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| `/`         | Hero, headline numbers, about preview, product preview, services, process |
| `/about`    | Company story, firm-at-a-glance table, milestones, partners, values       |
| `/products` | Indian & imported ranges, quality notes, season guide table               |
| `/services` | Services, four-step process, who we serve                                 |
| `/contact`  | WhatsApp-first contact, phones, email, hours, map                         |

There is **no email/contact form anywhere on the site** — the contact page is
built around WhatsApp buttons, plus tap-to-call and tap-to-mail links. A floating
WhatsApp button is pinned to every page.

## All content lives in one file

`src/lib/constants.ts` is the single source of truth for every piece of business
content: company details, address, phone numbers, WhatsApp numbers, social links,
products, services, milestones, partners, stats, business hours and SEO
metadata. Change a value there and it updates everywhere on the site — no
component edits needed.

Things worth knowing:

- **WhatsApp numbers** (`WHATSAPP`) must be in E.164 form *without* the `+`
  (e.g. `919265108230`). `WHATSAPP.defaultMessage` is the text pre-filled in the
  chat window.
- **Phone numbers** each have a `display` value (what a visitor reads) and a
  `tel` value (what the `tel:` link dials).
- **Navigation** is driven by `NAV_LINKS`, which also generates `sitemap.xml`.
- **`SITE.url`** should be updated to the live domain once the site is deployed —
  it feeds canonical URLs, Open Graph tags, the sitemap and the schema.org block.

## Branding

- The logo is an original SVG built for the firm: a warm fruit disc carrying the
  `LL` monogram with a leaf. Source lives in two places, keep them in sync:
  - `src/components/Logo.tsx` — the React component used across the site
  - `public/logo.svg` — a standalone copy for social/sharing use
- The favicon is `src/app/icon.svg` (Next.js picks this up automatically).
- Colour tokens and fonts are defined in `src/app/globals.css` under `@theme`.
  Fonts are Fraunces (display) and Inter (body), loaded via `next/font`.

## The product catalogue

`PRODUCT_CATEGORIES` in `src/lib/constants.ts` holds the whole catalogue, split
into the two ranges the firm trades:

- **Indian Fruits** — 10 varieties
- **Imported Fruits** — 18 varieties

`PRODUCTS` is a flat view of both, derived automatically — nothing to keep in
sync. Add, remove or reorder a fruit inside a category and the products page,
the season guide, the home page preview and the footer all follow.

## Product images

Product artwork lives in `public/images/products/` as original SVG illustrations
(no photographs of people, only fruit). Each product points at its file through
the `image` field, and each file namespaces its own gradient ids so the artwork
stays correct even if several are inlined on one page.

To swap in photographs later, drop the file into `public/images/products/` and
change that one `image` path in `src/lib/constants.ts` — nothing else needs to
change. The cards render at roughly a 4:3 ratio.
