import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { COMPANY, CONTACT, SITE, SOCIAL, WHATSAPP } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${COMPANY.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

/** schema.org payload so search engines can read the firm's details. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.legalName,
  alternateName: COMPANY.shortName,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/logo.svg`,
  email: CONTACT.email,
  foundingDate: String(COMPANY.heritageYear),
  telephone: CONTACT.mobiles.map((m) => m.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${CONTACT.address.line1}, ${CONTACT.address.line2}`,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.state,
    postalCode: CONTACT.address.pincode,
    addressCountry: "IN",
  },
  sameAs: [SOCIAL.instagram.url, SOCIAL.facebook.url, `https://wa.me/${WHATSAPP.primary.number}`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
