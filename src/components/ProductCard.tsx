import Image from "next/image";
import Icon from "./Icon";
import type { Product } from "@/lib/constants";

type Props = {
  product: Product;
  /** Compact cards omit the long description (used on the home page grid). */
  compact?: boolean;
  priority?: boolean;
};

export default function ProductCard({ product, compact = false, priority = false }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-pom-500/25 hover:shadow-[0_18px_40px_-24px_rgba(36,30,26,0.35)]">
      <div
        className="flex items-center justify-center px-6 py-7"
        style={{ backgroundColor: product.accent }}
      >
        <Image
          src={product.image}
          alt={`${product.name} — ${product.varieties}`}
          width={320}
          height={240}
          priority={priority}
          unoptimized
          className="h-36 w-auto transition-transform duration-500 group-hover:scale-[1.06] sm:h-40"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[0.82rem] font-medium text-pom-600">{product.varieties}</p>

        {!compact && (
          <p className="mt-4 flex-1 text-[0.93rem] leading-relaxed text-muted">
            {product.description}
          </p>
        )}

        <p
          className={`${compact ? "mt-4" : "mt-6"} inline-flex items-center gap-2 text-[0.8rem] font-medium text-ink-soft`}
        >
          <Icon name="clock" size={15} className="text-saffron-500" />
          {product.season}
        </p>
      </div>
    </article>
  );
}
