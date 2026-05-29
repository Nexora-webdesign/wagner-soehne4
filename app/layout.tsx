import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

// Headlines — Manrope (variable font, ExtraBold used via utility classes)
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Body — Inter (variable font)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wagner & Söhne — Malerbetrieb Münster",
  description:
    "Zuverlässig. Sauber. Pünktlich. Malerarbeiten in Münster seit 1998. Festpreis garantiert.",
};

export const viewport: Viewport = {
  // Next.js 16: themeColor lives in the `viewport` export, not in `metadata`.
  themeColor: "#0f1e2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-ink">{children}</body>
    </html>
  );
}
