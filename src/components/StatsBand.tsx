import { STATS } from "@/lib/constants";

export default function StatsBand() {
  return (
    <section className="container-page">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-line bg-line lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white px-6 py-8 text-center sm:py-10">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-display text-4xl font-semibold tracking-tight text-pom-600 sm:text-[2.75rem]">
                {stat.value}
              </span>
              <span className="mt-2 block text-[0.82rem] leading-snug text-muted sm:text-sm">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
