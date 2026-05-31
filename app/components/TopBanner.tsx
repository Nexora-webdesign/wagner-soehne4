import { site } from "../lib/site";

export default function TopBanner() {
  return (
    <a
      href={site.studioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-50 block bg-black py-2.5 text-center text-[0.8rem] leading-tight text-text/75 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-text"
    >
      <span className="px-4">
        Demo-Website von{" "}
        <span className="font-medium text-gold">Nexora Studio</span> · Künstlerin
        &amp; Werke frei erfunden · Eigene Website?{" "}
        <span className="font-medium text-gold">Jetzt anfragen →</span>
      </span>
    </a>
  );
}
