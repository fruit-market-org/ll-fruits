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
  { value: "28", label: "Indian & imported varieties" },
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

export type ProductCategory = {
  slug: string;
  name: string;
  /** Short label shown above the category heading. */
  eyebrow: string;
  description: string;
  products: Product[];
};

/**
 * The full catalogue, split into the two ranges we trade.
 * Add, remove or reorder a fruit here and it updates across the whole site.
 */
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: "indian-fruits",
    name: "Indian Fruits",
    eyebrow: "Grown in India",
    description:
      "Sourced directly from the growing belts we have bought from for decades — Nashik and Sangli grapes, Kashmir apples, Kesar mango, Bhagwa pomegranate and Gujarat's own chikoo.",
    products: [
      {
        slug: "grapes",
        name: "Grapes",
        varieties: "Thompson Seedless, Sonaka, Black Jumbo",
        season: "January – April",
        description:
          "Tight, well-filled bunches from the Nashik and Sangli belts. Graded for colour, berry size and sugar, then pre-cooled so they reach the counter with their bloom intact.",
        image: "/images/products/grapes.svg",
        accent: "#F1ECF7",
      },
      {
        slug: "apple",
        name: "Apple",
        varieties: "Delicious, Royal Gala, Kashmiri",
        season: "August – February",
        description:
          "Firm, high-colour apples from the Kashmir and Himachal hills, counted and tray-packed by size so every box grades the same.",
        image: "/images/products/apple.svg",
        accent: "#FBEAEA",
      },
      {
        slug: "mango",
        name: "Mango",
        varieties: "Kesar, Alphonso, Badam, Langra",
        season: "March – July",
        description:
          "The season everyone waits for. Kesar and Alphonso handled in ripening lots and released to match your selling window.",
        image: "/images/products/mango.svg",
        accent: "#FDF2DC",
      },
      {
        slug: "pomegranate",
        name: "Pomegranate",
        varieties: "Bhagwa, Ganesh",
        season: "September – February",
        description:
          "Deep-blushed Bhagwa with heavy, ruby arils and a clean skin finish. Counted, cushioned and boxed by size.",
        image: "/images/products/pomegranate.svg",
        accent: "#FBEAEA",
      },
      {
        slug: "muskmelon",
        name: "Muskmelon",
        varieties: "Kharbuja, netted varieties",
        season: "March – June",
        description:
          "Field-ripened melons picked at full net and aroma, sorted by weight and firmness for consistent shelf life through the summer rush.",
        image: "/images/products/muskmelon.svg",
        accent: "#FCF3E2",
      },
      {
        slug: "orange",
        name: "Orange",
        varieties: "Nagpur mandarin, Kinnow, mini orange",
        season: "November – March",
        description:
          "Easy-peel mandarins with a clean sweet-tart balance, graded small to medium for fruit bowls, gifting packs and daily retail counters.",
        image: "/images/products/orange.svg",
        accent: "#FDEEE2",
      },
      {
        slug: "kiwi",
        name: "Kiwi",
        varieties: "Hayward, Indian & imported grades",
        season: "Year round",
        description:
          "Firm, evenly sized kiwi held at the right temperature and released in ripening stages that suit your selling window.",
        image: "/images/products/kiwi.svg",
        accent: "#EDF3E6",
      },
      {
        slug: "dragon-fruit",
        name: "Dragon Fruit",
        varieties: "Red and white flesh",
        season: "June – November",
        description:
          "Bright, heavy pitaya from Gujarat and Maharashtra growers, cut with the bracts intact so the fruit arrives looking as fresh as it eats.",
        image: "/images/products/dragon-fruit.svg",
        accent: "#FBE8F0",
      },
      {
        slug: "chikoo",
        name: "Chikoo",
        varieties: "Kalipatti, Cricket Ball",
        season: "October – March",
        description:
          "Gujarat's own sapota from the Gholvad and Navsari belts, picked at the right maturity and ripened evenly in trays.",
        image: "/images/products/chikoo.svg",
        accent: "#F4EBDF",
      },
      {
        slug: "malta",
        name: "Malta",
        varieties: "Malta sweet orange",
        season: "November – February",
        description:
          "Juice-heavy Malta with a thin, bright rind. Sized and traded in full loads through the winter, straight from the growing regions.",
        image: "/images/products/malta.svg",
        accent: "#FDF0DF",
      },
    ],
  },
  {
    slug: "imported-fruits",
    name: "Imported Fruits",
    eyebrow: "Landed from abroad",
    description:
      "Premium imported lines brought in through trusted channels and held in the right conditions — berries, stone fruit, exotics and seedless grapes for hotels, gifting and high-end retail.",
    products: [
      {
        slug: "apricot",
        name: "Apricot",
        varieties: "Turkish and Iranian grades",
        season: "May – August",
        description:
          "Soft-skinned apricots with a clean blush, handled in cool lots and released in small, fast-moving consignments.",
        image: "/images/products/apricot.svg",
        accent: "#FDEFD9",
      },
      {
        slug: "australian-peach",
        name: "Australian Peach",
        varieties: "Yellow flesh, export grade",
        season: "December – March",
        description:
          "Southern-hemisphere peaches that land in our winter, firm enough to travel and sweet enough to sell straight off the box.",
        image: "/images/products/australian-peach.svg",
        accent: "#FCE9DE",
      },
      {
        slug: "avocado",
        name: "Avocado",
        varieties: "Hass, imported grades",
        season: "Year round",
        description:
          "Hass avocados brought in at the right pressure and ripened to order, so kitchens and counters get them exactly when they need them.",
        image: "/images/products/avocado.svg",
        accent: "#EDF2E4",
      },
      {
        slug: "black-grapes",
        name: "Black Grapes",
        varieties: "Imported seedless black",
        season: "December – April",
        description:
          "Big, dark, crunchy berries on clean stems — a premium bunch for gifting trays and high-end retail shelves.",
        image: "/images/products/black-grapes.svg",
        accent: "#F0EBF4",
      },
      {
        slug: "beauty-pears",
        name: "Beauty Pears",
        varieties: "Red Beauty, imported pears",
        season: "September – March",
        description:
          "Crisp, blushed pears that hold their bite for days, packed in moulded trays so they arrive unbruised.",
        image: "/images/products/beauty-pears.svg",
        accent: "#F6F3DF",
      },
      {
        slug: "blueberry",
        name: "Blueberry",
        varieties: "Peruvian and Chilean punnets",
        season: "November – March",
        description:
          "Firm, bloom-covered berries in sealed punnets, moved quickly through the cold chain to protect every day of shelf life.",
        image: "/images/products/blueberry.svg",
        accent: "#ECEEF7",
      },
      {
        slug: "dragon-kiwi",
        name: "Dragon Kiwi",
        varieties: "Red-centred kiwi",
        season: "November – February",
        description:
          "The red-hearted kiwi — sweeter and less sharp than green, and a genuine talking point on a premium counter.",
        image: "/images/products/dragon-kiwi.svg",
        accent: "#FBEAEE",
      },
      {
        slug: "green-apple",
        name: "Green Apple",
        varieties: "Granny Smith, imported",
        season: "Year round",
        description:
          "Hard, tart green apples with a waxy shine, sized uniformly for retail counters, juice centres and institutional kitchens.",
        image: "/images/products/green-apple.svg",
        accent: "#F0F4E3",
      },
      {
        slug: "malta-imported",
        name: "Malta (Imported)",
        varieties: "Imported sweet orange",
        season: "December – April",
        description:
          "Thin-skinned imported Malta with high juice recovery, landed in full containers through the peak winter demand.",
        image: "/images/products/malta-imported.svg",
        accent: "#FDF0DF",
      },
      {
        slug: "green-grapes",
        name: "Green Grapes",
        varieties: "Imported seedless green",
        season: "December – April",
        description:
          "Long, crisp green berries with a clean finish, graded on bunch weight and packed to hold their snap.",
        image: "/images/products/green-grapes.svg",
        accent: "#F1F5E2",
      },
      {
        slug: "mulberry",
        name: "Mulberry",
        varieties: "Fresh seasonal mulberry",
        season: "March – May",
        description:
          "A short, delicate season. Handled in shallow trays and moved the same day, because mulberry waits for nobody.",
        image: "/images/products/mulberry.svg",
        accent: "#F6EAF0",
      },
      {
        slug: "mangosteen",
        name: "Mangosteen",
        varieties: "Thai mangosteen",
        season: "June – September",
        description:
          "The queen of fruits — deep purple shells with snow-white segments, brought in by air for the short monsoon window.",
        image: "/images/products/mangosteen.svg",
        accent: "#F2EBF3",
      },
      {
        slug: "red-cherry",
        name: "Red Cherry",
        varieties: "Turkish, American and Chilean",
        season: "May – August",
        description:
          "Dark, glossy cherries with green stems intact, graded by calibre and kept cold from the airport to our stall.",
        image: "/images/products/red-cherry.svg",
        accent: "#FBE9EC",
      },
      {
        slug: "red-globe-grapes",
        name: "Red Globe Grapes",
        varieties: "Imported Red Globe",
        season: "October – February",
        description:
          "Large, firm red berries that travel well and display beautifully — a reliable favourite for festive and gifting demand.",
        image: "/images/products/red-globe-grapes.svg",
        accent: "#FBEBEF",
      },
      {
        slug: "pink-guava",
        name: "Pink Guava",
        varieties: "Imported pink-flesh guava",
        season: "August – February",
        description:
          "Pale green outside, deep pink within. Sweet, aromatic and increasingly asked for by juice centres and hotels.",
        image: "/images/products/pink-guava.svg",
        accent: "#F2F4E2",
      },
      {
        slug: "nectarine",
        name: "Nectarine",
        varieties: "Imported yellow flesh",
        season: "December – March",
        description:
          "Smooth-skinned and deeply coloured, with the firm bite buyers expect from a premium stone fruit.",
        image: "/images/products/nectarine.svg",
        accent: "#FBE8E5",
      },
      {
        slug: "blackberry",
        name: "Blackberry",
        varieties: "Imported punnets",
        season: "November – March",
        description:
          "Plump, near-black berries in sealed punnets — a specialist line for patisseries, hotels and premium retail.",
        image: "/images/products/blackberry.svg",
        accent: "#EFEBF2",
      },
      {
        slug: "golden-kiwi",
        name: "Golden Kiwi",
        varieties: "SunGold and imported golden",
        season: "May – November",
        description:
          "Golden-fleshed kiwi, sweeter and smoother than green, with a thin hairless skin that sells itself on the shelf.",
        image: "/images/products/golden-kiwi.svg",
        accent: "#FBF2DC",
      },
    ],
  },
];

/** Flat view of every fruit we trade, in catalogue order. */
export const PRODUCTS: Product[] = PRODUCT_CATEGORIES.flatMap(
  (category) => category.products,
);

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
