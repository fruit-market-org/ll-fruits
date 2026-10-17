import type { Metadata } from "next";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PRODUCT_CATEGORIES, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Indian and imported fruits supplied wholesale from the New Fruit Market, Naroda Road, Ahmedabad — grapes, mango, pomegranate, chikoo, avocado, berries, cherries and exotics.",
};

const QUALITY_NOTES = [
  {
    icon: "leaf" as const,
    title: "Picked in season",
    description:
      "Every category is bought at the peak of its own season, from the growing belts and import channels that do it best.",
  },
  {
    icon: "scale" as const,
    title: "Graded before pricing",
    description:
      "Size, colour and firmness are checked lot by lot, so the rate you are quoted matches the fruit.",
  },
  {
    icon: "box" as const,
    title: "Packed for the journey",
    description:
      "Cushioned, crated and labelled at our stall so the consignment arrives the way it left.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Products"
        eyebrow="Our range"
        title="Indian and imported fruit, under one roof"
        description="Two ranges, handled with the same care — the Indian belts we have bought from for decades, and premium imported lines landed through trusted channels."
      />

      {/* Category jump links */}
      <section className="border-b border-line bg-cream-deep/40">
        <div className="container-page flex flex-wrap items-center gap-3 py-5">
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-muted">
            Jump to
          </span>
          {PRODUCT_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`#${category.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[0.88rem] font-medium text-ink-soft transition-colors hover:border-pom-500/40 hover:text-pom-600"
            >
              {category.name}
              <span className="text-[0.78rem] text-muted">{category.products.length}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* One section per category */}
      {PRODUCT_CATEGORIES.map((category, index) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`scroll-mt-24 py-16 sm:py-20 ${
            index % 2 === 1 ? "border-y border-line bg-cream-deep/45" : ""
          }`}
        >
          <div className="container-page">
            <SectionHeading
              eyebrow={category.eyebrow}
              title={category.name}
              description={category.description}
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.products.map((product, i) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  priority={index === 0 && i < 4}
                />
              ))}

              {/* Enquiry tile closes out the last grid */}
              {index === PRODUCT_CATEGORIES.length - 1 && (
                <div className="flex flex-col justify-center rounded-xl2 border border-dashed border-pom-500/30 bg-pom-50/40 p-7 text-center">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    Looking for something else?
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">
                    Seasonal arrivals change week to week. Tell us what you need and we will
                    source it.
                  </p>
                  <WhatsAppButton
                    className="mx-auto mt-5"
                    message={`${WHATSAPP.defaultMessage} I am looking for a specific fruit and quantity.`}
                    label="Ask on WhatsApp"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Quality notes */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading eyebrow="Quality" title="What every crate goes through" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {QUALITY_NOTES.map((note) => (
            <div key={note.title} className="rounded-xl2 border border-line bg-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600">
                <Icon name={note.icon} size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
                {note.title}
              </h3>
              <p className="mt-2.5 text-[0.93rem] leading-relaxed text-muted">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Season guide */}
      <section className="border-t border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Season guide"
            title="When to expect what"
            description="Approximate arrival windows for the Ahmedabad market. Ask us for the current week's availability."
          />
          <div className="mt-10 overflow-hidden rounded-xl2 border border-line bg-white">
            <table className="w-full text-left text-[0.93rem]">
              <thead>
                <tr className="border-b border-line bg-cream-deep/60 text-[0.75rem] uppercase tracking-[0.13em] text-muted">
                  <th scope="col" className="px-5 py-4 font-semibold sm:px-7">
                    Fruit
                  </th>
                  <th scope="col" className="hidden px-5 py-4 font-semibold sm:table-cell sm:px-7">
                    Varieties &amp; grades
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold sm:px-7">
                    Season
                  </th>
                </tr>
              </thead>
              {PRODUCT_CATEGORIES.map((category) => (
                <tbody key={category.slug}>
                  <tr className="border-b border-line bg-pom-50/50">
                    <th
                      scope="colgroup"
                      colSpan={3}
                      className="px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-pom-600 sm:px-7"
                    >
                      {category.name}
                    </th>
                  </tr>
                  {category.products.map((product) => (
                    <tr key={product.slug} className="border-b border-line last:border-0">
                      <th
                        scope="row"
                        className="px-5 py-4 font-display text-base font-semibold text-ink sm:px-7"
                      >
                        {product.name}
                        <span className="mt-1 block text-[0.82rem] font-normal text-muted sm:hidden">
                          {product.varieties}
                        </span>
                      </th>
                      <td className="hidden px-5 py-4 text-muted sm:table-cell sm:px-7">
                        {product.varieties}
                      </td>
                      <td className="px-5 py-4 text-ink-soft sm:px-7">{product.season}</td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20">
        <CTABand
          title="Ask for today's rate"
          description="Rates move with the day's arrivals. Message us for live availability, grades and prices on any fruit in our range."
        />
      </div>
    </>
  );
}
