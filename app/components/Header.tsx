"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "../lib/site";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Galerie", href: "#galerie" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        {/* Logo */}
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            {site.name}
          </span>
          <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
            Malerbetrieb · Münster
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-muted transition-colors hover:text-accent after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side: phone (always visible) + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 rounded-full border border-ink/10 px-3 py-2 text-sm font-bold text-accent transition-colors hover:border-accent/40 hover:bg-section"
            aria-label={`Anrufen: ${site.phoneDisplay}`}
          >
            <Icon name="phone" size={17} />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
          </a>

          <a
            href="#angebot"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-accent-hover sm:inline-block"
          >
            Angebot anfragen
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-section lg:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink/10 bg-card transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/5 py-3 text-base font-medium text-ink last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#angebot"
            onClick={() => setOpen(false)}
            className="mt-3 mb-1 rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-cream"
          >
            Kostenloses Angebot anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}
