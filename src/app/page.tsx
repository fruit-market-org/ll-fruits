import Image from "next/image";
import Link from "next/link";
import CTABand from "@/components/CTABand";
import Icon from "@/components/Icon";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import StatsBand from "@/components/StatsBand";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  COMPANY,
  CONTACT,
  DIFFERENTIATORS,
  PRODUCT_CATEGORIES,
  PRODUCTS,
  PROCESS_STEPS,
  SERVICES,
} from "@/lib/constants";

export default function HomePage() {
  // Two from each range, so the preview shows what we actually trade.
  const featured = PRODUCT_CATEGORIES.flatMap((category) => category.products.slice(0, 2));

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="surface-glow relative overflow-hidden">
        <div className="container-page grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          <div className="animate-rise lg:col-span-6">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-pom-500/20 bg-white/70 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-pom-600">
              <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" aria-hidden="true" />
              In the fruit trade since {COMPANY.heritageYear}
            </p>

            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-[3.4rem] lg:text-[3.85rem]">
              Fresh fruit,
              <span className="block text-pom-600">honestly traded.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted sm:text-[1.12rem]">
              {COMPANY.legalName} is a fruit merchant and commission agent at{" "}
              {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.city} — supplying
              graded Indian and imported fruit to traders across Gujarat.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton size="lg" label="WhatsApp Us" className="w-full sm:w-auto" />
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:border-pom-500/40 hover:text-pom-600 sm:w-auto"
              >
                Browse our range
                <Icon
                  name="arrow"
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <dl className="mt-11 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-7">
              <div>
                <dt className="text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                  Experience
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">30+ years</dd>
              </div>
              <div>
                <dt className="text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                  Clients served
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">1500+</dd>
              </div>
              <div>
                <dt className="text-[0.78rem] uppercase tracking-[0.14em] text-muted">
                  Market stall
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink">33-B, Naroda</dd>
              </div>
            </dl>
          </div>

          {/* Hero artwork collage */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto grid max-w-lg grid-cols-2 gap-4 sm:gap-5">
              {PRODUCTS.slice(0, 4).map((product, i) => (
                <div
                  key={product.slug}
                  className={`flex items-center justify-center rounded-xl2 border border-line p-5 shadow-[0_14px_38px_-26px_rgba(36,30,26,0.4)] sm:p-7 ${
                    i % 2 === 1 ? "sm:translate-y-7" : ""
                  }`}
                  style={{ backgroundColor: product.accent }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={320}
                    height={240}
                    priority={i < 2}
                    unoptimized
                    className="h-24 w-auto sm:h-32"
                  />
                </div>
              ))}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-1/2 hidden -translate-x-1/2 rounded-full bg-white px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-pom-600 shadow-md sm:block"
              >
                {COMPANY.blessing}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- Stats */}
      <div className="-mt-2 pb-6 sm:pb-10">
        <StatsBand />
      </div>

      {/* ------------------------------------------------------------- About */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Who we are"
              title="A family name on the Ahmedabad fruit market floor"
              description="What began as a family trading fruit in 1960 is today a working stall at the New Fruit Market, Naroda Road — run by the second generation, on the same terms the first generation set."
            />
            <p className="mt-6 text-[0.98rem] leading-relaxed text-muted">
              We act as both fruit merchants and commission agents. Growers consign to us because
              their produce is represented fairly; buyers deal with us because the fruit is graded
              honestly and the accounts are clean.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-pom-600"
            >
              Read our story
              <Icon
                name="arrow"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {DIFFERENTIATORS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl2 border border-line bg-white p-6 transition-colors hover:border-pom-500/25"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pom-50 text-pom-600">
                    <Icon name="check" size={18} />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Products */}
      <section className="border-y border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our range"
              title="Indian and imported fruit"
              description="Two ranges and twenty-eight varieties, each sourced at the peak of its own season and graded before it is priced."
            />
            <Link
              href="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-pom-600"
            >
              View all products
              <Icon
                name="arrow"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/products#${category.slug}`}
                className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-5 py-2.5 text-[0.9rem] font-medium text-ink-soft transition-colors hover:border-pom-500/40 hover:text-pom-600"
              >
                {category.name}
                <span className="text-[0.78rem] text-muted">
                  {category.products.length} varieties
                </span>
                <Icon
                  name="arrow"
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Services */}
      <section className="container-page py-16 sm:py-20">
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title="Everything between the orchard and your counter"
          description="Sourcing, grading, packing, dispatch and clean settlement — handled by people who have spent their lives around fruit."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl2 border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-pom-500/25 hover:shadow-[0_18px_40px_-26px_rgba(36,30,26,0.35)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-saffron-50 text-saffron-600 transition-colors group-hover:bg-saffron-100">
                <Icon name={service.icon} size={24} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.93rem] leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- Process */}
      <section className="border-y border-line bg-cream-deep/45 py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From your message to your loading bay"
          />
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.step} className="relative">
                <span className="font-display text-4xl font-semibold text-pom-500/25">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-muted">
                  {step.description}
                </p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-6 hidden h-px w-6 bg-line lg:block"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------------- CTA */}
      <div className="py-16 sm:py-20">
        <CTABand />
      </div>
    </>
  );
}
