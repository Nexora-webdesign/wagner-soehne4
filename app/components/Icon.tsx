import type { SVGProps } from "react";

export type IconName =
  | "roller" // Innenanstrich
  | "building" // Fassadenanstrich
  | "wallpaper" // Tapezieren
  | "trowel" // Spachtelarbeiten
  | "brush" // Lackierarbeiten
  | "shield-tool" // Sanierungen
  | "check"
  | "shield"
  | "tag"
  | "guarantee"
  | "sparkle" // Sauberkeit
  | "handshake" // Verlässlichkeit
  | "medal" // Qualität / Meister
  | "phone"
  | "whatsapp"
  | "mail"
  | "pin"
  | "clock"
  | "instagram"
  | "facebook"
  | "arrow-right"
  | "arrow-down";

const paths: Record<IconName, React.ReactNode> = {
  roller: (
    <>
      <rect x="3" y="4" width="13" height="6" rx="1.5" />
      <path d="M16 7h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-7" />
      <path d="M12 13v3a2 2 0 0 1-2 2H9" />
      <rect x="7" y="18" width="4" height="3" rx="1" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M15 9h3a1 1 0 0 1 1 1v11" />
      <path d="M8 8h2M8 12h2M8 16h2" />
    </>
  ),
  wallpaper: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 3v18M15 3v18M4 9h16M4 15h16" />
    </>
  ),
  trowel: (
    <>
      <path d="m14 4 6 6-8 3-1-1 3-8Z" />
      <path d="m11 12-7 7" />
      <path d="m4 19 1.5 1.5" />
    </>
  ),
  brush: (
    <>
      <path d="M9 3h6v7a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V3Z" />
      <path d="M9 6h6" />
      <path d="M11 12v3a1 1 0 0 0 1 1 1 1 0 0 1 1 1v3a1 1 0 0 1-1 1 1 1 0 0 1-1-1" />
    </>
  ),
  "shield-tool": (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="M9.5 12.5 11 14l3.5-3.5" />
    </>
  ),
  check: <path d="m4 12 5 5L20 6" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </>
  ),
  guarantee: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9.5 9 1.8 1.8L15 7" />
      <path d="m8 14-2 7 6-3 6 3-2-7" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
      <path d="m6.5 6.5 2.5 2.5M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6" />
      <path d="M3 11.5 6.5 8 11 11.5l1.5-1.5a1 1 0 0 1 1.4 0L21 17" />
      <path d="M3 11.5V17M21 11.5V17" />
      <path d="m6.5 8 3-3 4 1 3-1" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14" r="5" />
      <path d="m9.5 14 1.6 1.6L14.5 12" />
      <path d="M9 3h6l-2 5h-2L9 3Z" />
    </>
  ),
  phone: (
    <path d="M5 3h3l1.5 5-2 1.5a13 13 0 0 0 6 6L15 13l5 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  whatsapp: (
    <>
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M9 9c0 3 2.5 5.5 5.5 5.5.6 0 .9-.4.9-.9 0-.3-.1-.5-.4-.7l-1.3-.7c-.3-.1-.6 0-.8.2l-.4.5c-.9-.4-1.7-1.2-2.1-2.1l.5-.4c.2-.2.3-.5.2-.8l-.7-1.3c-.2-.3-.4-.4-.7-.4-.5 0-.9.3-.9.9Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" />
    </>
  ),
  facebook: (
    <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.6C16.6 2.5 15.6 2.4 14.4 2.4c-2.5 0-4.1 1.5-4.1 4.2v1.9H7.5V12h2.8v9.6h3.4V12h2.6l.4-3.5H14Z" />
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  "arrow-down": (
    <>
      <path d="M12 5v14" />
      <path d="m6 13 6 6 6-6" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export default function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
