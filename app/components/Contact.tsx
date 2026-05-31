"use client";

import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "../lib/site";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend — compose a prefilled mail to the studio.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage über chroma-art.de — ${name || "Interesse"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full border-b border-text/15 bg-transparent py-3 text-text placeholder:text-muted/60 outline-none transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] focus:border-gold";

  return (
    <section
      id="kontakt"
      className="relative border-t border-text/10 bg-bg px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Big call */}
        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-gold">
              Kontakt
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-bold leading-[0.92] tracking-[-0.03em]">
              Werk- &amp;<br />
              Ausstellungs-<br />
              anfragen.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <a
              href={site.emailHref}
              className="group mt-10 inline-flex items-center gap-4 text-lg text-text"
            >
              <span className="border-b border-text/30 pb-1 transition-colors duration-500 group-hover:border-gold group-hover:text-gold">
                {site.email}
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-text/20 text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-gold group-hover:text-gold group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                <Icon name="arrow-up-right" size={18} />
              </span>
            </a>
          </Reveal>
        </div>

        {/* Minimal form */}
        <Reveal delay={120} className="lg:col-span-6 lg:pt-4">
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div>
              <label htmlFor="c-name" className="text-[0.7rem] uppercase tracking-[0.25em] text-muted">
                Name
              </label>
              <input
                id="c-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={field}
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label htmlFor="c-email" className="text-[0.7rem] uppercase tracking-[0.25em] text-muted">
                E-Mail
              </label>
              <input
                id="c-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={field}
                placeholder="name@beispiel.de"
              />
            </div>
            <div>
              <label htmlFor="c-message" className="text-[0.7rem] uppercase tracking-[0.25em] text-muted">
                Nachricht
              </label>
              <textarea
                id="c-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className={`${field} resize-none`}
                placeholder="Worum geht es?"
              />
            </div>
            <button
              type="submit"
              className="group mt-2 inline-flex w-fit items-center gap-4 rounded-full border border-text/20 py-3 pl-7 pr-3 text-sm font-medium tracking-wide text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-gold/60 active:scale-[0.98]"
            >
              Anfrage senden
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-text text-bg transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-[1px] group-hover:translate-x-[1px]">
                <Icon name="arrow-up-right" size={16} />
              </span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
