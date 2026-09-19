import Link from "next/link";
import { COMPANY } from "@/lib/constants";

type LogoProps = {
  /** Hides the wordmark and renders the monogram only. */
  markOnly?: boolean;
  /** Inverted palette for use on dark backgrounds. */
  light?: boolean;
  size?: number;
  className?: string;
};

export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="llDiscG" x1="14" y1="10" x2="52" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F09A2B" />
          <stop offset="0.45" stopColor="#E8721E" />
          <stop offset="1" stopColor="#A12D3D" />
        </linearGradient>
        <linearGradient id="llLeafG" x1="40" y1="4" x2="58" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4A9168" />
          <stop offset="1" stopColor="#25573F" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="34" r="26" fill="url(#llDiscG)" />
      <path
        d="M14 26a20 20 0 0 1 15-13"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.42"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M38.5 16.5c2.2-2.8 4.6-4.6 7.2-5.6"
        fill="none"
        stroke="#25573F"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M45.4 10.6c4.6-4 10.6-4.3 14.6-3.4.8 4-.3 9.9-4.9 13.4-4.2 3.2-8.9 1.9-10.9-.6-2-2.5-2-6.4 1.2-9.4Z"
        fill="url(#llLeafG)"
      />
      <path
        d="M57.4 9.2c-3.8 1.4-7.6 3.8-10.6 7.4"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <g fill="none" stroke="#FFF8EE" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 24v19h10" />
        <path d="M37 24v19h10" />
      </g>
    </svg>
  );
}

export default function Logo({ markOnly = false, light = false, size = 44, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${COMPANY.shortName} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark size={size} />
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={`whitespace-nowrap font-display text-[1.35rem] font-semibold tracking-tight sm:text-[1.5rem] ${
              light ? "text-cream" : "text-ink"
            }`}
          >
            {COMPANY.shortName}
          </span>
          <span
            className={`mt-1 whitespace-nowrap text-[0.62rem] font-medium uppercase tracking-[0.17em] ${
              light ? "text-cream/70" : "text-muted"
            }`}
          >
            {COMPANY.legalName}
          </span>
        </span>
      )}
    </Link>
  );
}
