import Icon from "./Icon";
import { site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-text/10 bg-bg px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl font-bold tracking-[0.3em] text-text">
              {site.brand}
            </p>
            <p className="mt-3 text-sm text-muted">
              {site.artist} · {site.location}
            </p>
          </div>

          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm text-muted transition-colors duration-500 hover:text-text"
          >
            <Icon name="instagram" size={18} className="text-gold" />
            {site.instagram}
            <span className="opacity-0 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:opacity-100">
              <Icon name="arrow-up-right" size={14} />
            </span>
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-text/10 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.brand} · {site.artist}
          </p>
          <p>
            Demo-Website von{" "}
            <a
              href={site.studioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-opacity duration-500 hover:opacity-70"
            >
              Nexora Studio · nexora-webdesign.de
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
