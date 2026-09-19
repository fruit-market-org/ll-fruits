import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import StatsBand from "@/components/StatsBand";
import {
  COMPANY,
  CONTACT,
  DIFFERENTIATORS,
  MILESTONES,
  PARTNERS,
  STORY_PARAGRAPHS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `${COMPANY.legalName} has been in the Ahmedabad fruit trade since ${COMPANY.heritageYear}. Read the story of the family, the firm and the stall at the New Fruit Market.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="Our story"
        title="Three generations in the Ahmedabad fruit trade"
        description={`${COMPANY.legalName} — fruit merchant and commission agent at ${CONTACT.address.line1}, ${CONTACT.address.line2}.`}
      />

      {/* Story */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Since 1960"
              title="Built on trust, a handshake and what sits in the crate"
            />
            <div className="mt-8 space-y-5">
              {STORY_PARAGRAPHS.map((paragraph, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-muted ${
                    i === 0 ? "text-[1.05rem] text-ink-soft" : "text-[0.98rem]"
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-xl2 border border-line bg-white p-8">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                The firm at a glance
              </h3>
              <dl className="mt-6 space-y-5 text-[0.93rem]">
                {[
                  ["Trade name", COMPANY.legalName],
                  ["Also known as", COMPANY.shortName],
                  ["Nature of business", COMPANY.tagline],
                  ["In the trade since", String(COMPANY.heritageYear)],
                  ["Firm established", COMPANY.establishedYear],
                  ["Experience", "30+ years of active trading"],
                  ["Clients served", "1500+"],
                  [
                    "Market stall",
                    `${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.city} – ${CONTACT.address.pincode}`,
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-b border-line pb-5 last:border-0 last:pb-0 sm:flex-row sm:gap-6"
                  >
                    <dt className="shrink-0 text-muted sm:w-40">{label}</dt>
                    <dd className="font-medium text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-7 border-t border-line pt-6 text-center text-[0.78rem] uppercase tracking-[0.2em] text-saffron-600">
                {COMPANY.blessing}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <StatsBand />

      {/* Milestones */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="Milestones"
          title="How the firm grew"
          align="center"
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {MILESTONES.map((milestone) => (
            <li key={milestone.year} className="relative border-t-2 border-pom-500/20 pt-6">
              <span
                aria-hidden="true"
                className="absolute -top-[7px] left-0 h-3 w-3 rounded-full bg-pom-500"
              />
              <p className="font-display text-2xl font-semibold text-pom-600">{milestone.year}</p>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                {milestone.title}
              </h3>
              <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">
                {milestone.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* People */}
      <section className="border-y border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="The people"
            title="Partners behind the name"
            description="A father who started it and a son who runs it — both on first-name terms with the growers and the buyers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {PARTNERS.map((partner) => (
              <div key={partner.name} className="rounded-xl2 border border-line bg-white p-8">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-saffron-500 to-pom-600 font-display text-lg font-semibold text-white">
                    {partner.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                      {partner.name}
                    </h3>
                    <p className="mt-0.5 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-pom-600">
                      {partner.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-[0.93rem] leading-relaxed text-muted">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          eyebrow="What we stand for"
          title="The terms we trade on"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 rounded-xl2 border border-line bg-white p-7"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-600">
                <Icon name="check" size={19} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.93rem] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CTABand
          title="Come and see the fruit for yourself"
          description="Visit the stall at 33-B, New Fruit Market, or send us a WhatsApp — we will tell you exactly what has arrived today."
        />
      </div>
    </>
  );
}
