/**
 * Single source of truth for every piece of business content on the site.
 * Edit values here and the whole website updates — no component changes needed.
 */

/* -------------------------------------------------------------------------- */
/*  Company                                                                    */
/* -------------------------------------------------------------------------- */

export const COMPANY = {
  /** Short brand name used in the logo and navigation. */
  shortName: "LL Fruits",
  /** Full registered trade name as printed on the firm's letterhead. */
  legalName: "Lachhmandas Lalchand",
  legalNameGujarati: "લક્ષ્મણદાસ લાલચંદ",
  tagline: "Fruit Merchant & Commission Agent",
  blessing: "Jai Shri Ganesh",
  /** One-line positioning statement used in the hero and meta description. */
  summary:
    "A family-run fruit merchant and commission agent at Ahmedabad's New Fruit Market, supplying premium grapes, pomegranate, dates and melons to traders across Gujarat.",
  /** Year the family entered the fruit trade. */
  heritageYear: 1960,
  /** Year the present firm was established. */
  establishedYear: "2005-06",
  jurisdiction: "Subject to Ahmedabad Jurisdiction",
} as const;

/* -------------------------------------------------------------------------- */
/*  Contact details                                                            */
/* -------------------------------------------------------------------------- */

export const CONTACT = {
  address: {
    line1: "33-B, New Fruit Market",
    line2: "Naroda Road",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "382330",
    country: "India",
  },
  /** Landlines, shown as-is with tel: links generated from `tel`. */
  phones: [
    { label: "Office", display: "079 - 2220 4367", tel: "+917922204367" },
    { label: "Residence", display: "079 - 2286 4867", tel: "+917922864867" },
  ],
  /** Mobile contacts for the people who run the firm. */
  mobiles: [{ label: "Naresh", display: "+91 98259 31608", tel: "+919825931608" }],
  email: "LL22204367@gmail.com",
} as const;

/** Numbers wired to the "WhatsApp Us" buttons. `number` must be in E.164 without "+". */
export const WHATSAPP = {
  primary: {
    label: "Enquiries",
    name: "LL Fruits Enquiry Desk",
    display: "+91 92651 08230",
    number: "919265108230",
  },
  secondary: {
    label: "Orders",
    name: "Naresh Relwani",
    display: "+91 98259 31608",
    number: "919825931608",
  },
  /** Pre-filled message opened in WhatsApp when a button is tapped. */
  defaultMessage:
    "Hello Lachhmandas Lalchand (LL Fruits), I would like to enquire about your fruit supply.",
} as const;

export const SOCIAL = {
  instagram: {
    handle: "nareshrelwani52139",
    url: "https://www.instagram.com/nareshrelwani52139",
  },
  facebook: {
    handle: "Lachhmandas Lalchand",
    url: "https://www.facebook.com/search/top?q=lachhmandas%20lalchand",
  },
} as const;

/** Embedded map of the New Fruit Market, Naroda Road location. */
export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=New+Fruit+Market+Naroda+Road+Ahmedabad&output=embed";

export const MAP_LINK_URL =
  "https://www.google.com/maps/search/?api=1&query=New+Fruit+Market+Naroda+Road+Ahmedabad";

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Headline numbers                                                           */
/* -------------------------------------------------------------------------- */

export const STATS = [
  { value: "30+", label: "Years of serving experience" },
  { value: "1500+", label: "Clients & customers served" },
  { value: "7", label: "Fruit categories in season" },
  { value: "1960", label: "Family in the fruit trade since" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Products                                                                   */
/* -------------------------------------------------------------------------- */

export type Product = {
  slug: string;
  name: string;
  /** Common varieties / grades handled. */
  varieties: string;
  season: string;
  description: string;
  /** Path under /public. Swap in a photograph any time — keep the same path. */
  image: string;
  /** Soft background tint used behind the artwork. */
  accent: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "grapes",
    name: "Grapes",
    varieties: "Thompson Seedless, Sonaka, Black Jumbo",
    season: "January – April",
    description:
      "Tight, well-filled bunches sourced from the Nashik and Sangli belts. Graded for colour, berry size and sugar, then pre-cooled and packed so they reach the counter with their bloom intact.",
    image: "/images/products/grapes.svg",
    accent: "#F1ECF7",
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    varieties: "Bhagwa, Ganesh",
    season: "September – February",
    description:
      "Deep-blushed Bhagwa with heavy, ruby arils and a clean skin finish. Counted, cushioned and boxed by size so every crate carries a uniform grade.",
    image: "/images/products/pomegranate.svg",
    accent: "#FBEAEA",
  },
  {
    slug: "dates",
    name: "Dates",
    varieties: "Fresh & semi-dry, assorted grades",
    season: "Year round · peak May – August",
    description:
      "Plump, glossy dates handled in temperature-controlled lots. Available in retail-ready packs and bulk cartons for the festive and Ramzan seasons.",
    image: "/images/products/dates.svg",
    accent: "#F6EDE3",
  },
  {
    slug: "muskmelon",
    name: "Muskmelon",
    varieties: "Kharbuja, netted varieties",
    season: "March – June",
    description:
      "Field-ripened melons picked at full net and aroma. Sorted by weight and firmness so wholesalers get consistent shelf life through the summer rush.",
    image: "/images/products/muskmelon.svg",
    accent: "#FCF3E2",
  },
  {
    slug: "kiwi",
    name: "Kiwi",
    varieties: "Hayward, imported grades",
    season: "Year round",
    description:
      "Firm, evenly sized kiwi from trusted import channels, held at the right temperature and released in ripening stages that suit your selling window.",
    image: "/images/products/kiwi.svg",
    accent: "#EDF3E6",
  },
  {
    slug: "malta",
    name: "Malta Orange",
    varieties: "Malta sweet orange",
    season: "November – February",
    description:
      "Juice-heavy Malta with thin, bright rind. Sized and traded in full loads through the winter, straight from the growing regions to the market floor.",
    image: "/images/products/malta.svg",
    accent: "#FDF0DF",
  },
  {
    slug: "mini-orange",
    name: "Mini Orange",
    varieties: "Kinnow, mandarin, mini orange",
    season: "December – March",
    description:
      "Easy-peel mandarins with a clean sweet-tart balance. Graded small to medium for fruit bowls, gifting packs and daily retail counters.",
    image: "/images/products/mini-orange.svg",
    accent: "#FDEEE2",
  },
];

/* -------------------------------------------------------------------------- */
/*  Services                                                                   */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  description: string;
  /** Icon key rendered by components/Icon.tsx */
  icon: "handshake" | "truck" | "scale" | "leaf" | "box" | "clock";
};

export const SERVICES: Service[] = [
  {
    title: "Commission Agency",
    description:
      "We represent growers and traders on the New Fruit Market floor, securing fair day rates and settling accounts transparently on every consignment.",
    icon: "handshake",
  },
  {
    title: "Wholesale Fruit Supply",
    description:
      "Full-load and part-load supply of grapes, pomegranate, dates, melons and citrus to retailers, mandis, hotels and institutional buyers.",
    icon: "truck",
  },
  {
    title: "Grading & Quality Checks",
    description:
      "Every lot is opened, inspected and graded for size, colour and firmness before it is priced, so buyers know exactly what is inside the box.",
    icon: "scale",
  },
  {
    title: "Direct Farm Sourcing",
    description:
      "Long-standing relationships with growers across Maharashtra, Gujarat and Rajasthan let us buy at source and keep the chain short and fresh.",
    icon: "leaf",
  },
  {
    title: "Packing & Dispatch",
    description:
      "Careful crating, cushioning and labelling for transit, with loading handled at our stall so consignments leave the market the same day.",
    icon: "box",
  },
  {
    title: "Season Planning",
    description:
      "Advance indents and arrival forecasts for peak seasons, so your counters stay stocked through the grape, pomegranate and melon windows.",
    icon: "clock",
  },
];

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                              */
/* -------------------------------------------------------------------------- */

export const DIFFERENTIATORS = [
  {
    title: "Three generations of trade",
    description:
      "The family has traded fruit since 1960. That history is the reason growers consign to us and buyers keep coming back season after season.",
  },
  {
    title: "Honest weights, honest rates",
    description:
      "Rates are quoted from the day's market, weights are taken openly and accounts are settled without deductions you were not told about.",
  },
  {
    title: "Quality you can inspect",
    description:
      "Come to the stall, open the box, check the fruit. Nothing is sold from a photograph — what you see on the floor is what is loaded.",
  },
  {
    title: "A name inside the market",
    description:
      "At 33-B, New Fruit Market, Naroda Road, we are a fixed address in Ahmedabad's fruit trade, reachable on the phone the whole selling day.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  How we work                                                                */
/* -------------------------------------------------------------------------- */

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tell us your requirement",
    description:
      "Send a WhatsApp with the fruit, grade and quantity you need. We reply with availability and the current market rate.",
  },
  {
    step: "02",
    title: "We source and grade",
    description:
      "The lot is bought at source or picked from the day's arrivals, then inspected and graded against what you asked for.",
  },
  {
    step: "03",
    title: "Packed and loaded",
    description:
      "Fruit is crated, cushioned and labelled at our stall, and loaded onto your transport or the carrier you nominate.",
  },
  {
    step: "04",
    title: "Clear accounts",
    description:
      "You receive a clear debit bill with packets, weight, rate and total. Any rate difference is settled within the agreed window.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Story & milestones                                                         */
/* -------------------------------------------------------------------------- */

export const STORY_PARAGRAPHS = [
  "Lachhmandas Lalchand began as a family trading in fruit in Ahmedabad in 1960 — an era when the day's business was done on trust, a handshake and the quality of what sat in the crate. Those were the terms the family learned the trade on, and they have not changed since.",
  "The firm as it trades today was established in 2005-06 at 33-B, New Fruit Market, Naroda Road, and has grown into a familiar name on the market floor. Across more than three decades of active trading, the family has served over 1500 clients — retailers, wholesalers, mandi buyers and institutional kitchens across Gujarat.",
  "We work as both fruit merchants and commission agents. Growers consign to us because their produce is represented fairly; buyers deal with us because the fruit is graded honestly and the accounts are clean. Grapes, pomegranate, dates, muskmelon, kiwi, malta and mini oranges move through our stall every season, each handled by people who have spent their lives around fruit.",
] as const;

export const MILESTONES = [
  {
    year: "1960",
    title: "The family enters the fruit trade",
    description:
      "Lalchandbhai Relwani begins trading fruit in Ahmedabad, building the relationships with growers that the firm still rests on.",
  },
  {
    year: "2005-06",
    title: "Lachhmandas Lalchand is established",
    description:
      "The firm takes its own stall at 33-B, New Fruit Market, Naroda Road, trading as a fruit merchant and commission agent.",
  },
  {
    year: "Today",
    title: "A second generation on the floor",
    description:
      "Naresh Lalchand Relwani runs the day-to-day trade, with a range spanning grapes, pomegranate, dates, melons and citrus.",
  },
  {
    year: "1500+",
    title: "Clients served and counting",
    description:
      "Retailers, wholesalers and institutional buyers across Gujarat rely on our arrivals through every season.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  People                                                                     */
/* -------------------------------------------------------------------------- */

export const PARTNERS = [
  {
    name: "Lalchandbhai Relwani",
    role: "Founder",
    initials: "LR",
    description:
      "Began the family's journey in the fruit trade and set the standards of fair dealing the firm still trades by.",
  },
  {
    name: "Naresh Lalchand Relwani",
    role: "Partner",
    initials: "NR",
    description:
      "Runs the daily trade at the New Fruit Market stall — sourcing, grading, pricing and looking after long-standing buyers.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Business hours                                                             */
/* -------------------------------------------------------------------------- */

export const BUSINESS_HOURS = [
  { days: "Monday – Saturday", hours: "5:00 AM – 8:00 PM" },
  { days: "Sunday", hours: "5:00 AM – 1:00 PM" },
] as const;

/* -------------------------------------------------------------------------- */
/*  Site metadata                                                              */
/* -------------------------------------------------------------------------- */

export const SITE = {
  name: `${COMPANY.shortName} — ${COMPANY.legalName}`,
  /** Update to the live domain once the site is deployed. */
  url: "https://llfruits.in",
  description: COMPANY.summary,
  keywords: [
    "fruit merchant Ahmedabad",
    "commission agent New Fruit Market",
    "wholesale grapes Ahmedabad",
    "pomegranate supplier Gujarat",
    "Lachhmandas Lalchand",
    "LL Fruits",
  ],
} as const;
