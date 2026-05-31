import Reveal from "./Reveal";
import { exhibitions } from "../lib/site";

export default function Exhibitions() {
  return (
    <section
      id="ausstellungen"
      className="relative border-t border-text/10 bg-bg px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mb-16">
          <span className="text-[0.7rem] uppercase tracking-[0.32em] text-gold">
            Selected Exhibitions
          </span>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
            Ausstellungen
          </h2>
        </Reveal>

        <ul>
          {exhibitions.map((ex, i) => (
            <Reveal
              key={`${ex.year}-${ex.title}`}
              as="li"
              delay={i * 60}
              className="group grid grid-cols-1 gap-2 border-t border-text/10 py-7 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text/30 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-9"
            >
              <span className="font-display text-sm text-gold sm:col-span-2">
                {ex.year}
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-text transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 sm:col-span-5 sm:text-3xl">
                {ex.title}
              </h3>
              <span className="text-muted sm:col-span-4 sm:text-right">
                {ex.place}, {ex.city}
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-muted/70 sm:col-span-1 sm:text-right">
                {ex.kind}
              </span>
            </Reveal>
          ))}
          <li className="border-t border-text/10" aria-hidden="true" />
        </ul>
      </div>
    </section>
  );
}
