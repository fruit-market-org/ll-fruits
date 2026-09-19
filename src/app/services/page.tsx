import type { Metadata } from "next";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { DIFFERENTIATORS, PROCESS_STEPS, SERVICES, TRADE_TERMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Commission agency, wholesale fruit supply, grading, direct farm sourcing, packing and season planning from the New Fruit Market, Naroda Road, Ahmedabad.",
};

const BUYER_TYPES = [
  "Fruit retailers & shop counters",
  "Wholesalers and mandi traders",
  "Hotels, caterers & institutional kitchens",
  "Juice centres and processors",
  "Gifting and festive pack suppliers",
  "Growers consigning to Ahmedabad",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What we do"
        title="A commission agency that handles the whole chain"
        description="We represent growers on the market floor and supply buyers across Gujarat — sourcing, grading, packing and settling accounts under one roof."
      />

      {/* Services grid */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl2 border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pom-500/25 hover:shadow-[0_18px_40px_-26px_rgba(36,30,26,0.35)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 transition-colors group-hover:bg-saffron-100">
                <Icon name={service.icon} size={24} />
              </span>
              <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                {service.title}
              </h2>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps from enquiry to dispatch"
            align="center"
          />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step) => (
              <li key={step.step} className="rounded-xl2 border border-line bg-white p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-pom-50 font-display text-base font-semibold text-pom-600">
                  {step.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we serve + terms */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Who we serve"
              title="Buyers and growers across Gujarat"
              description="Over 1500 clients have traded with us — from a single shop counter to full-load institutional supply."
            />
            <ul className="mt-9 space-y-3.5">
              {BUYER_TYPES.map((type) => (
                <li key={type} className="flex items-start gap-3 text-[0.97rem] text-ink-soft">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-leaf-600">
                    <Icon name="check" size={14} />
                  </span>
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl2 border border-line bg-white p-8">
              <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                Our trade terms
              </h2>
              <p className="mt-3 text-[0.9rem] text-muted">
                The same terms printed on every bill we issue.
              </p>
              <ul className="mt-7 space-y-5">
                {TRADE_TERMS.map((term) => (
                  <li key={term} className="flex gap-3.5 text-[0.93rem] leading-relaxed text-ink-soft">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-pom-500" />
                    {term}
                  </li>
                ))}
              </ul>
              {DIFFERENTIATORS[1] && (
                <p className="mt-8 rounded-xl bg-cream-deep/60 p-5 text-[0.9rem] leading-relaxed text-ink-soft">
                  <strong className="font-semibold text-ink">
                    {DIFFERENTIATORS[1].title}.
                  </strong>{" "}
                  {DIFFERENTIATORS[1].description}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="pb-16 sm:pb-20">
        <CTABand
          title="Put us to work this season"
          description="Tell us what your counters need and we will plan arrivals around your selling window."
        />
      </div>
    </>
  );
}
