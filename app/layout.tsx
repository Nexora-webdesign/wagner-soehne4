import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

// Display / headlines — Space Grotesk (variable), tight, modern-artistic.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Body — Inter (variable).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHROMA — Mara Voss",
  description:
    "CHROMA — zeitgenössische abstrakte Malerei von Mara Voss. Farbe als eigenständige Sprache: tiefes Indigo, warmes Gold, Material und Licht.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
