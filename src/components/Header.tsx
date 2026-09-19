"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-ink text-cream/80 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-[0.78rem]">
          <span className="inline-flex items-center gap-2">
            <Icon name="pin" size={15} className="text-saffron-500" />
            {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.city} –{" "}
            {CONTACT.address.pincode}
          </span>
          <span className="inline-flex items-center gap-5">
            <a
              href={`tel:${CONTACT.mobiles[0].tel}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-saffron-500"
            >
              <Icon name="phone" size={14} className="text-saffron-500" />
              {CONTACT.mobiles[0].display}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-saffron-500"
            >
              <Icon name="mail" size={14} className="text-saffron-500" />
              {CONTACT.email}
            </a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-cream/90 backdrop-blur-md"
            : "border-b border-transparent bg-cream"
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                    active ? "text-pom-600" : "text-ink-soft hover:text-pom-600"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-pom-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <WhatsAppButton className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-pom-500/40 hover:text-pom-600 md:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          className={`overflow-hidden border-t border-line bg-cream transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    active ? "bg-pom-50 text-pom-600" : "text-ink-soft hover:bg-cream-deep"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <WhatsAppButton size="lg" className="mt-3 w-full" />
            <a
              href={`tel:${CONTACT.mobiles[0].tel}`}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink-soft"
            >
              <Icon name="phone" size={16} className="text-pom-500" />
              Call {CONTACT.mobiles[0].display}
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
