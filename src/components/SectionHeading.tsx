type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && (
        <p
          className={`flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-pom-500 ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-pom-500/40" aria-hidden="true" />
          {eyebrow}
          {centered && <span className="h-px w-8 bg-pom-500/40" aria-hidden="true" />}
        </p>
      )}
      <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">{description}</p>
      )}
    </div>
  );
}
