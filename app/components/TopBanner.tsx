import { site } from "../lib/site";

export default function TopBanner() {
  return (
    <a
      href={site.studioUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-gold/40 bg-section transition-colors hover:bg-[#efe9df]"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3 sm:px-8 sm:py-3.5">
        {/* Stern-Icon */}
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card text-gold shadow-sm">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 16.77l-5.2 2.73.99-5.78-4.21-4.1 5.82-.85L12 3.5z" />
          </svg>
        </span>

        {/* Text */}
        <div className="text-left leading-snug">
          <p className="text-sm font-bold text-gold">
            Demo-Website von Nexora Studio
          </p>
          <p className="mt-0.5 text-[0.8rem] text-muted sm:text-sm">
            Diese Website ist ein Beispielprojekt — Namen, Bilder und Inhalte
            sind frei erfunden. So könnte deine eigene Website aussehen.
          </p>
          <p className="mt-1 text-[0.8rem] font-bold text-gold underline-offset-2 group-hover:underline sm:text-sm">
            »&nbsp;Eigene Website anfragen →&nbsp;«
          </p>
        </div>
      </div>
    </a>
  );
}
