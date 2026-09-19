import Link from "next/link";
import Icon from "@/components/Icon";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="surface-glow">
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-7xl font-semibold text-pom-500/30 sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          This page is out of season
        </h1>
        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-muted">
          The page you were looking for could not be found. Head back to the home page or send us a
          message and we will point you the right way.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-[0.95rem] font-semibold text-ink transition-all hover:border-pom-500/40 hover:text-pom-600"
          >
            Back to home
            <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <WhatsAppButton size="lg" />
        </div>
      </div>
    </section>
  );
}
