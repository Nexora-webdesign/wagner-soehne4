import Image from "next/image";
import Reveal from "./Reveal";
import { works, ph } from "../lib/site";

// Editorial, deliberately asymmetric placement — not a stiff uniform grid.
// `frame` positions the figure in the 12-col grid; `aspect` shapes the image.
const layout = [
  { frame: "lg:col-span-7", aspect: "aspect-[4/5]" },
  { frame: "lg:col-span-5 lg:mt-40", aspect: "aspect-[3/4]" },
  { frame: "lg:col-span-5", aspect: "aspect-square" },
  { frame: "lg:col-span-7 lg:mt-24", aspect: "aspect-[5/4]" },
  { frame: "lg:col-span-6", aspect: "aspect-[4/5]" },
  { frame: "lg:col-span-6 lg:mt-32", aspect: "aspect-square" },
];

export default function Works() {
  return (
    <section id="werke" className="relative bg-bg px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-[1400px]">
        {/* Section heading */}
        <Reveal className="mb-20 flex items-end justify-between gap-6">
          <div>
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-gold">
              Selected Works
            </span>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
              Werke
            </h2>
          </div>
          <span className="hidden font-display text-sm text-muted sm:block">
            2022 — 2024
          </span>
        </Reveal>

        {/* Asymmetric gallery */}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-20 lg:grid-cols-12">
          {works.map((w, i) => (
            <Reveal
              key={w.no}
              as="figure"
              variant={i < 2 ? "emerge" : "fade"}
              delay={i < 2 ? i * 120 : 0}
              className={`group ${layout[i].frame}`}
            >
              <div
                className={`relative w-full overflow-hidden bg-elevated ${layout[i].aspect}`}
              >
                <Image
                  src={ph(w.img, 1200)}
                  alt={`${w.title} — ${w.medium}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-bg/0 transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-bg/25" />
                <span className="absolute left-5 top-5 font-display text-xs tracking-[0.2em] text-text/70">
                  {w.no}
                </span>
              </div>

              {/* Gallery label — title always visible; details settle in on hover (and stay on touch) */}
              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-xl font-medium tracking-tight text-text sm:text-2xl">
                  {w.title}
                </h3>
                <span className="shrink-0 font-display text-sm text-gold">
                  {w.year}
                </span>
              </figcaption>
              <p className="mt-1 text-sm text-muted transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {w.medium} · {w.size}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
