import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
};

/** Compact page header used at the top of every inner page. */
export default function PageHero({ eyebrow, title, description, breadcrumb }: Props) {
  return (
    <section className="surface-glow border-b border-line">
      <div className="container-page py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-[0.8rem] text-muted">
          <Link href="/" className="transition-colors hover:text-pom-600">
            Home
          </Link>
          <span className="mx-2 text-line">/</span>
          <span className="text-ink-soft">{breadcrumb}</span>
        </nav>
        <p className="mt-6 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-pom-500">
          <span className="h-px w-8 bg-pom-500/40" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
