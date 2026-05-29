import { site } from "../lib/site";

export default function TopBanner() {
  return (
    <a
      href={site.studioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-ink py-2.5 text-center text-[0.8rem] leading-tight text-cream/90 transition-colors hover:text-cream"
    >
      <span className="px-4">
        Demo-Website von{" "}
        <span className="font-semibold text-gold">Nexora Studio</span> · Namen &
        Inhalte frei erfunden · Eigene Website?{" "}
        <span className="font-semibold text-gold">Jetzt anfragen →</span>
      </span>
    </a>
  );
}
