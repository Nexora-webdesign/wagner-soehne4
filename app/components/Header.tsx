"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../lib/site";

const nav = [
  { label: "Werke", href: "#werke" },
  { label: "Über", href: "#ueber" },
  { label: "Ausstellungen", href: "#ausstellungen" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  // Transparent over the hero; settles to a dark glass bar once scrolled.
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        scrolled
          ? "border-b border-text/10 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[0.42em] text-text"
        >
          {site.brand}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.82rem] font-medium tracking-wide text-muted transition-colors duration-500 hover:text-text"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 block h-px w-6 bg-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "bottom-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Fullscreen mobile overlay with staggered link reveal */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg/95 px-8 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            className={`font-display text-4xl font-bold tracking-tight text-text transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={site.emailHref}
          onClick={() => setOpen(false)}
          style={{ transitionDelay: open ? `${120 + nav.length * 70}ms` : "0ms" }}
          className={`mt-8 text-sm tracking-wide text-gold transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {site.email}
        </a>
      </div>
    </header>
  );
}
