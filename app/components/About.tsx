import Image from "next/image";
import Reveal from "./Reveal";
import { site, ph, portraitImg } from "../lib/site";

export default function About() {
  return (
    <section
      id="ueber"
      className="relative border-t border-text/10 bg-bg px-6 py-28 sm:px-10 sm:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Statement (editorial, large) */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-[0.7rem] uppercase tracking-[0.32em] text-gold">
              Über
            </span>
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="mt-8 font-display text-[clamp(1.8rem,3.6vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.02em] text-text">
              Farbe als eigenständige Sprache — ein Moment{" "}
              <span className="text-gold">kurz vor der Form</span>.
            </blockquote>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-10 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              {site.statement}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              In den Arbeiten von {site.artist} wird der Malgrund zum Ereignis:
              Pigment, Öl und Blattgold lagern sich in Schichten ab, bis Tiefe
              entsteht. Was bleibt, ist kein Motiv, sondern ein Zustand — ruhig,
              dicht, im Schwingen.
            </p>
          </Reveal>
        </div>

        {/* Portrait */}
        <Reveal delay={120} className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-elevated">
            <Image
              src={ph(portraitImg, 900)}
              alt={`${site.artist} — Porträt`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="mt-6">
            <p className="font-display text-2xl font-medium tracking-tight text-text">
              {site.artist}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {site.born} · {site.based}
              <br />
              {site.discipline}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
