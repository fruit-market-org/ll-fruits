import Link from "next/link";
import Icon from "./Icon";
import { LogoMark } from "./Logo";
import { whatsappHref } from "./WhatsAppButton";
import {
  COMPANY,
  CONTACT,
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  SOCIAL,
  WHATSAPP,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-ink text-cream/75">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <LogoMark size={46} />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-semibold text-cream">
                {COMPANY.shortName}
              </span>
              <span className="mt-1.5 text-[0.62rem] font-medium uppercase tracking-[0.17em] text-cream/55">
                {COMPANY.legalName}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{COMPANY.summary}</p>
          <p className="mt-5 text-[0.78rem] uppercase tracking-[0.2em] text-saffron-500">
            {COMPANY.blessing}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-saffron-500 hover:text-saffron-500"
            >
              <Icon name="instagram" size={19} />
            </a>
            <a
              href={SOCIAL.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-saffron-500 hover:text-saffron-500"
            >
              <Icon name="facebook" size={19} />
            </a>
            <a
              href={whatsappHref(WHATSAPP.primary.number)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-leaf-500 hover:text-leaf-500"
            >
              <Icon name="whatsapp" size={19} />
            </a>
          </div>
        </div>

        {/* Navigate */}
        <div className="lg:col-span-2">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream">
            Navigate
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-saffron-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream">
            What we trade
          </h2>
          <ul className="mt-5 space-y-5 text-sm">
            {PRODUCT_CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/products#${category.slug}`}
                  className="font-medium text-cream transition-colors hover:text-saffron-500"
                >
                  {category.name}
                  <span className="ml-2 text-cream/45">{category.products.length}</span>
                </Link>
                <p className="mt-1.5 leading-relaxed text-cream/60">
                  {category.products
                    .slice(0, 4)
                    .map((product) => product.name)
                    .join(", ")}{" "}
                  and more
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach us */}
        <div className="lg:col-span-3">
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream">
            Reach us
          </h2>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <p className="flex gap-3">
              <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-saffron-500" />
              <span>
                {CONTACT.address.line1},<br />
                {CONTACT.address.line2},<br />
                {CONTACT.address.city} – {CONTACT.address.pincode}, {CONTACT.address.state}
              </span>
            </p>
            {CONTACT.mobiles.map((m) => (
              <p key={m.tel} className="flex gap-3">
                <Icon name="phone" size={15} className="mt-0.5 shrink-0 text-saffron-500" />
                <a href={`tel:${m.tel}`} className="transition-colors hover:text-saffron-500">
                  {m.display}{" "}
                  <span className="text-cream/45">({m.label})</span>
                </a>
              </p>
            ))}
            <p className="flex gap-3">
              <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-saffron-500" />
              <a
                href={`mailto:${CONTACT.email}`}
                className="break-all transition-colors hover:text-saffron-500"
              >
                {CONTACT.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 text-[0.8rem] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {COMPANY.legalName} ({COMPANY.shortName}). All rights reserved.
          </p>
          <p>{COMPANY.jurisdiction}</p>
        </div>
      </div>
    </footer>
  );
}
