import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton, { whatsappHref } from "@/components/WhatsAppButton";
import {
  BUSINESS_HOURS,
  COMPANY,
  CONTACT,
  MAP_EMBED_URL,
  MAP_LINK_URL,
  SOCIAL,
  TRADE_TERMS,
  TRADE_TERMS_GUJARATI,
  WHATSAPP,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Reach ${COMPANY.legalName} at ${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city}. WhatsApp us for availability, grades and rates.`,
};

const fullAddress = `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city} – ${CONTACT.address.pincode}, ${CONTACT.address.state}, ${CONTACT.address.country}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get in touch"
        title="Message us on WhatsApp — we reply the same day"
        description="No forms, no waiting. Send us the fruit, grade and quantity you need and we will come back with today's availability and rate."
      />

      {/* WhatsApp cards */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <div className="rounded-xl2 border border-leaf-500/25 bg-leaf-50/60 p-6 sm:p-8 lg:p-10">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-white">
                <Icon name="whatsapp" size={28} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                WhatsApp is the fastest way to reach us
              </h2>
              <p className="mt-4 max-w-xl text-[1rem] leading-relaxed text-muted">
                Both numbers below are on WhatsApp through the whole selling day. Tap a button and
                a chat opens with your message ready to send.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[WHATSAPP.primary, WHATSAPP.secondary].map((entry) => (
                  <div
                    key={entry.number}
                    className="flex flex-col rounded-xl border border-line bg-white p-5 sm:p-6"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-pom-600">
                      {entry.label}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                      {entry.name}
                    </p>
                    <p className="mt-1 text-[0.92rem] text-muted">{entry.display}</p>
                    <WhatsAppButton
                      number={entry.number}
                      label="WhatsApp Us"
                      className="mt-5 w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct details */}
          <div className="min-w-0 lg:col-span-5">
            <div className="h-full rounded-xl2 border border-line bg-white p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Other ways to reach us
              </h2>

              <div className="mt-7 space-y-7 text-[0.95rem]">
                <div className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pom-50 text-pom-600">
                    <Icon name="pin" size={18} />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Visit the stall
                    </p>
                    <address className="mt-1.5 not-italic leading-relaxed text-ink-soft">
                      {CONTACT.address.line1},<br />
                      {CONTACT.address.line2},<br />
                      {CONTACT.address.city} – {CONTACT.address.pincode}, {CONTACT.address.state}
                    </address>
                    <a
                      href={MAP_LINK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-2.5 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-pom-600"
                    >
                      Open in Google Maps
                      <Icon
                        name="arrow"
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pom-50 text-pom-600">
                    <Icon name="phone" size={16} />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Call us
                    </p>
                    <ul className="mt-1.5 space-y-1.5">
                      {[...CONTACT.mobiles, ...CONTACT.phones].map((item) => (
                        <li key={item.tel}>
                          <a
                            href={`tel:${item.tel}`}
                            className="text-ink-soft transition-colors hover:text-pom-600"
                          >
                            {item.display}
                          </a>
                          <span className="ml-2 text-[0.82rem] text-muted">({item.label})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pom-50 text-pom-600">
                    <Icon name="mail" size={17} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="mt-1.5 block break-all text-ink-soft transition-colors hover:text-pom-600"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pom-50 text-pom-600">
                    <Icon name="clock" size={18} />
                  </span>
                  <div>
                    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                      Market hours
                    </p>
                    <ul className="mt-1.5 space-y-1.5 text-ink-soft">
                      {BUSINESS_HOURS.map((slot) => (
                        <li key={slot.days} className="flex flex-wrap gap-x-2">
                          <span>{slot.days}</span>
                          <span className="text-muted">·</span>
                          <span className="font-medium">{slot.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-line pt-7">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Follow us
                </p>
                <div className="mt-3.5 flex gap-3">
                  <a
                    href={SOCIAL.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.85rem] font-medium text-ink-soft transition-colors hover:border-pom-500/40 hover:text-pom-600"
                  >
                    <Icon name="instagram" size={17} />
                    Instagram
                  </a>
                  <a
                    href={SOCIAL.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[0.85rem] font-medium text-ink-soft transition-colors hover:border-pom-500/40 hover:text-pom-600"
                  >
                    <Icon name="facebook" size={17} />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-y border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Find us"
            title="33-B, New Fruit Market, Naroda Road"
            description={fullAddress}
          />
          <div className="mt-10 overflow-hidden rounded-xl2 border border-line bg-white">
            <iframe
              src={MAP_EMBED_URL}
              title={`Map showing ${COMPANY.legalName} at the New Fruit Market, Naroda Road, Ahmedabad`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-[320px] w-full border-0 sm:h-[440px]"
            />
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <SectionHeading eyebrow="Please note" title="Terms of trade" />
          </div>
          <div className="min-w-0 lg:col-span-7">
            <ul className="space-y-5">
              {TRADE_TERMS.map((term) => (
                <li
                  key={term}
                  className="flex gap-3.5 text-[0.97rem] leading-relaxed text-ink-soft"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pom-500" />
                  {term}
                </li>
              ))}
            </ul>
            <p
              lang="gu"
              className="mt-7 rounded-xl border border-line bg-white p-5 text-[0.95rem] leading-relaxed text-muted"
            >
              {TRADE_TERMS_GUJARATI}
            </p>
          </div>
        </div>
      </section>

      {/* Closing WhatsApp band */}
      <section className="container-page pb-16 sm:pb-20">
        <div className="flex flex-col items-center gap-6 rounded-[1.75rem] border border-line bg-white px-6 py-12 text-center sm:px-12">
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-saffron-600">
            {COMPANY.blessing}
          </p>
          <h2 className="max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            One message is all it takes to start
          </h2>
          <a
            href={whatsappHref(WHATSAPP.primary.number)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-leaf-500 px-8 py-4 text-[1rem] font-semibold text-white shadow-sm shadow-leaf-500/25 transition-all hover:bg-leaf-600 hover:shadow-md"
          >
            <Icon name="whatsapp" size={22} />
            WhatsApp {WHATSAPP.primary.display}
          </a>
        </div>
      </section>
    </>
  );
}
