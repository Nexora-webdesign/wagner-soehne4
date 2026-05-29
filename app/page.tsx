import Image from "next/image";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import Icon, { type IconName } from "./components/Icon";
import { site } from "./lib/site";

/* Unsplash helper — verified photo IDs, bounded width, auto-format. */
const ph = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const services: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "roller",
    title: "Innenanstrich",
    desc: "Wände, Decken und Türen — saubere, perfekt deckende Oberflächen.",
  },
  {
    icon: "building",
    title: "Fassadenanstrich",
    desc: "Außenarbeiten mit langlebigem Wetter- und UV-Schutz.",
  },
  {
    icon: "wallpaper",
    title: "Tapezieren",
    desc: "Vom Raufaser-Vlies bis zur Designtapete — faltenfrei verarbeitet.",
  },
  {
    icon: "trowel",
    title: "Spachtelarbeiten",
    desc: "Glatte, ebene Wände als Basis für hochwertige Anstriche.",
  },
  {
    icon: "brush",
    title: "Lackierarbeiten",
    desc: "Türen, Fenster, Heizkörper und Möbel in neuem Glanz.",
  },
  {
    icon: "shield-tool",
    title: "Sanierungen",
    desc: "Schimmel, Feuchtigkeit und Altbau fachgerecht aufbereitet.",
  },
];

const trust: { icon: IconName; label: string }[] = [
  { icon: "medal", label: "Meisterbetrieb der HWK" },
  { icon: "shield", label: "Vollständig versichert" },
  { icon: "tag", label: "Festpreis-Garantie" },
  { icon: "guarantee", label: "2 Jahre Gewährleistung" },
];

const gallery: {
  before: string;
  after: string;
  title: string;
  area: string;
}[] = [
  {
    before: "photo-1556228453-efd6c1ff04f6",
    after: "photo-1600607687939-ce8a6c25118c",
    title: "Wohnzimmer",
    area: "Gievenbeck",
  },
  {
    before: "photo-1484154218962-a197022b5858",
    after: "photo-1600585152220-90363fe7e115",
    title: "Küche",
    area: "Hiltrup",
  },
  {
    before: "photo-1505691938895-1758d7feb511",
    after: "photo-1600210492493-0946911123ea",
    title: "Wohn- & Essbereich",
    area: "Mecklenbeck",
  },
  {
    before: "photo-1605276374104-dee2a0ed3cd6",
    after: "photo-1570129477492-45c003edd2be",
    title: "Fassade Einfamilienhaus",
    area: "Wolbeck",
  },
];

const values: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "sparkle",
    title: "Sauberkeit",
    desc: "Wir verlassen Ihr Zuhause sauberer, als wir es vorgefunden haben.",
  },
  {
    icon: "handshake",
    title: "Verlässlichkeit",
    desc: "Festpreis. Festtermin. Keine bösen Überraschungen.",
  },
  {
    icon: "medal",
    title: "Qualität",
    desc: "Nur die besten Materialien — garantiert mit 2 Jahren Gewährleistung.",
  },
];

const areaChips = [
  "Greven",
  "Senden",
  "Telgte",
  "Drensteinfurt",
  "Havixbeck",
  "Nottuln",
  "Coesfeld",
  "Sendenhorst",
  "Everswinkel",
  "Altenberge",
  "Billerbeck",
];

/* Small reusable label above each section headline. */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-gold">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <TopBanner />
      <Header />

      <main id="top">
        {/* 2 · HERO ----------------------------------------------------- */}
        <section className="relative flex min-h-[75vh] items-center overflow-hidden">
          <Image
            src={ph("photo-1562259949-e8e7689d7828", 1920)}
            alt="Maler von Wagner & Söhne streicht eine Wand"
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(15,30,46,0.55)" }}
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-cream/90">
                Meisterbetrieb · seit 1998
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.98] text-white">
                Zuverlässig.
                <br />
                Sauber. Pünktlich.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-[1.15rem] leading-relaxed text-cream/90">
                Malerarbeiten in Münster — seit über 25 Jahren machen wir dein
                Zuhause schöner. Festpreis garantiert.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="#angebot"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5"
                >
                  Kostenloses Angebot anfragen
                  <Icon
                    name="arrow-right"
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#galerie"
                  className="inline-flex items-center gap-2 text-base font-semibold text-cream underline-offset-4 hover:underline"
                >
                  Unsere Arbeiten
                  <Icon name="arrow-down" size={18} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 · TRUST-BAR ------------------------------------------------ */}
        <section className="border-b border-ink/10 bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 sm:px-8 lg:grid-cols-4 lg:gap-8">
            {trust.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 80}
                className="flex items-center gap-3 px-2"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-section text-gold">
                  <Icon name={item.icon} size={22} />
                </span>
                <span className="text-sm font-bold leading-tight text-ink">
                  {item.label}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 4 · LEISTUNGEN ----------------------------------------------- */}
        <section id="leistungen" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>Leistungen</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ink">
                Was wir für Sie tun.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Vom ersten Pinselstrich bis zur besenreinen Übergabe — alles aus
                einer Hand.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 90}
                  className="group rounded-2xl border border-ink/10 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-ink/5"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-section p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-cream">
                    <Icon name={s.icon} size={26} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-extrabold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · VORHER · NACHHER ---------------------------------------- */}
        <section id="galerie" className="bg-section py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>Unsere Arbeiten</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ink">
                Vorher · Nachher.
              </h2>
              <p className="mt-4 text-lg text-muted">
                Echte Räume, echte Verwandlungen — ein kleiner Auszug aus
                unseren Projekten in und um Münster.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {gallery.map((g, i) => (
                <Reveal
                  key={g.title}
                  delay={(i % 2) * 100}
                  className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-sm"
                >
                  <div className="grid grid-cols-2">
                    <figure className="relative aspect-[4/3]">
                      <Image
                        src={ph(g.before, 800)}
                        alt={`${g.title} in ${g.area} — vorher`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover [filter:grayscale(0.85)_brightness(0.82)_contrast(1.05)]"
                      />
                      <figcaption className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-cream">
                        Vorher
                      </figcaption>
                    </figure>
                    <figure className="relative aspect-[4/3] border-l-2 border-card">
                      <Image
                        src={ph(g.after, 800)}
                        alt={`${g.title} in ${g.area} — nachher`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <figcaption className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wider text-ink">
                        Nachher
                      </figcaption>
                    </figure>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 px-5 py-4">
                    <h3 className="font-display text-lg font-extrabold text-ink">
                      {g.title}
                    </h3>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-muted">
                      <Icon name="pin" size={15} className="text-gold" />
                      {g.area}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · ÜBER UNS ------------------------------------------------- */}
        <section id="ueber-uns" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>Familienbetrieb seit 1998</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ink">
                Drei Generationen Handwerk.
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  Gegründet wurde Wagner &amp; Söhne 1998 von Malermeister
                  Helmut Wagner — mit einem Transporter, zwei Leitern und dem
                  Anspruch, jeden Auftrag so abzuliefern, als wäre es das eigene
                  Zuhause.
                </p>
                <p>
                  Heute führt sein Sohn Andreas den Betrieb, während Enkel Lukas
                  bereits in der Ausbildung steckt. Was sich nie geändert hat:
                  ehrliche Beratung, faire Festpreise und ein Ergebnis, auf das
                  wir mit unserem Namen stehen.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {values.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-section text-gold">
                      <Icon name={v.icon} size={22} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-ink">
                        {v.title}
                      </p>
                      <p className="text-muted">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="order-first lg:order-last">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-ink/10">
                <Image
                  src={ph("photo-1574359411659-15573a27fd0c", 900)}
                  alt="Maler von Wagner & Söhne streichen eine Hausfassade"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute bottom-5 left-5 rounded-2xl bg-card/95 px-5 py-4 shadow-lg backdrop-blur">
                  <p className="font-display text-3xl font-extrabold leading-none text-accent">
                    25+
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted">
                    Jahre Erfahrung
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 7 · SERVICE-GEBIET ------------------------------------------ */}
        <section className="bg-section py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <Eyebrow>Wo wir arbeiten</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ink">
                Münster und Umgebung.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">
                Wir arbeiten in Münster und im Umkreis von 30 km. Dazu gehören
                u.&nbsp;a.: Greven, Senden, Telgte, Drensteinfurt, Havixbeck,
                Nottuln, Coesfeld und weitere.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                {areaChips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-gold/40 bg-card px-4 py-2 text-sm font-medium text-accent"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 8 · ANGEBOT ANFRAGEN (CTA) ---------------------------------- */}
        <section id="angebot" className="relative overflow-hidden bg-ink">
          <Image
            src={ph("photo-1581578731548-c64695cc6952", 1920)}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-28">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] text-white">
                Kostenloses Angebot in 24&nbsp;Stunden.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
                Schreiben Sie uns kurz, was Sie brauchen — wir melden uns
                innerhalb von 24 Stunden mit einem verbindlichen
                Festpreis-Angebot.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-base font-semibold text-ink shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
                >
                  <Icon name="phone" size={19} />
                  Jetzt anrufen · {site.phoneDisplay}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/40 px-7 py-4 text-base font-semibold text-cream transition-colors hover:bg-cream/10"
                >
                  <Icon name="whatsapp" size={19} />
                  WhatsApp schreiben
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-cream/60">
                Kostenlos · Unverbindlich · 24h Antwort
              </p>
            </Reveal>
          </div>
        </section>

        {/* 9 · KONTAKT + ÖFFNUNGSZEITEN -------------------------------- */}
        <section id="kontakt" className="bg-card py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <Eyebrow>Kontakt</Eyebrow>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-tight text-ink">
                So erreichen Sie uns.
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Kontakt-Karten */}
              <Reveal className="space-y-4">
                {[
                  {
                    icon: "phone" as IconName,
                    label: "Anrufen",
                    value: site.phoneDisplay,
                    href: site.phoneHref,
                    external: false,
                  },
                  {
                    icon: "whatsapp" as IconName,
                    label: "WhatsApp",
                    value: site.whatsappDisplay,
                    href: site.whatsappHref,
                    external: true,
                  },
                  {
                    icon: "mail" as IconName,
                    label: "E-Mail",
                    value: site.emailDisplay,
                    href: site.emailHref,
                    external: false,
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-5 transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-cream transition-colors group-hover:bg-accent-hover">
                      <Icon name={c.icon} size={22} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        {c.label}
                      </span>
                      <span className="block text-lg font-bold text-ink">
                        {c.value}
                      </span>
                    </span>
                  </a>
                ))}
              </Reveal>

              {/* Öffnungszeiten + Notfall */}
              <Reveal delay={120} className="rounded-2xl bg-section p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <Icon name="clock" size={24} className="text-gold" />
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    Öffnungszeiten
                  </h3>
                </div>
                <dl className="mt-5 divide-y divide-ink/10">
                  <div className="flex justify-between py-3">
                    <dt className="text-muted">Mo – Fr</dt>
                    <dd className="font-semibold text-ink">7:00 – 17:00</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-muted">Samstag</dt>
                    <dd className="font-semibold text-ink">nach Vereinbarung</dd>
                  </div>
                  <div className="flex justify-between py-3">
                    <dt className="text-muted">Sonntag</dt>
                    <dd className="font-semibold text-ink">geschlossen</dd>
                  </div>
                </dl>
                <div className="mt-5 flex items-start gap-3 rounded-xl border border-success/30 bg-success/10 p-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-success text-cream">
                    <Icon name="shield" size={18} />
                  </span>
                  <p className="text-sm leading-relaxed text-ink">
                    <span className="font-bold">Notfall-Schäden:</span> rund um
                    die Uhr telefonisch erreichbar — bei Wasser-, Schimmel- oder
                    Sturmschäden sind wir schnell zur Stelle.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <p className="mt-10 flex items-center justify-center gap-2 text-center text-muted">
                <Icon name="pin" size={18} className="text-gold" />
                {site.street} · {site.city}
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 10 · FOOTER --------------------------------------------------- */}
      <footer className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xs">
              <p className="font-display text-2xl font-extrabold">{site.name}</p>
              <p className="mt-2 text-sm text-cream/70">
                {site.tagline}. Meisterbetrieb mit Festpreis-Garantie.
              </p>
            </div>

            <nav className="flex flex-col gap-2.5 text-sm">
              <a href="#leistungen" className="text-cream/80 hover:text-gold">
                Leistungen
              </a>
              <a href="#galerie" className="text-cream/80 hover:text-gold">
                Galerie
              </a>
              <a href="#ueber-uns" className="text-cream/80 hover:text-gold">
                Über uns
              </a>
              <a href="#kontakt" className="text-cream/80 hover:text-gold">
                Kontakt
              </a>
            </nav>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon name="instagram" size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon name="facebook" size={20} />
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-gold/40 pt-6 text-sm text-cream/60 sm:flex sm:items-center sm:justify-between">
            <p>
              © 2026 {site.name} · {site.street}, {site.city}
            </p>
            <p className="mt-2 sm:mt-0">
              Demo-Website von{" "}
              <a
                href={site.studioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold hover:underline"
              >
                Nexora Studio · nexora-webdesign.de
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
