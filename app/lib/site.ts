// CHROMA — fiktive Daten (Künstlerin, Werke, Ausstellungen). Frei erfunden.

export const site = {
  brand: "CHROMA",
  artist: "Mara Voss",
  born: "*1989, Leipzig",
  based: "lebt und arbeitet in Berlin",
  discipline: "Zeitgenössische abstrakte Malerei",
  email: "studio@chroma-art.de",
  emailHref: "mailto:studio@chroma-art.de",
  instagram: "@chroma.studio",
  instagramHref: "https://instagram.com/chroma.studio",
  location: "Berlin",
  studioUrl: "https://nexora-webdesign.de",
  statement:
    "Mara Voss erkundet Farbe als eigenständige Sprache. In großformatigen, fließenden Kompositionen treffen tiefes Indigo und warmes Gold aufeinander — Material, Licht und Bewegung verdichten sich zu einem Moment kurz vor der Form.",
} as const;

export type Work = {
  no: string;
  title: string;
  year: string;
  medium: string;
  size: string;
  img: string; // Unsplash photo id (visually verified abstract works)
};

export const works: Work[] = [
  {
    no: "01",
    title: "Auflösung I",
    year: "2024",
    medium: "Acryl & Pigment auf Leinwand",
    size: "180 × 140 cm",
    img: "photo-1541701494587-cb58502866ab",
  },
  {
    no: "02",
    title: "Indigostrom",
    year: "2023",
    medium: "Öl auf Leinwand",
    size: "200 × 160 cm",
    img: "photo-1536924940846-227afb31e2a5",
  },
  {
    no: "03",
    title: "Goldbruch",
    year: "2024",
    medium: "Mischtechnik auf Leinwand",
    size: "120 × 120 cm",
    img: "photo-1561214115-f2f134cc4912",
  },
  {
    no: "04",
    title: "Schwebezustand",
    year: "2023",
    medium: "Pigment & Harz",
    size: "150 × 150 cm",
    img: "photo-1558865869-c93f6f8482af",
  },
  {
    no: "05",
    title: "Nachtblüte",
    year: "2022",
    medium: "Acryl auf Leinwand",
    size: "160 × 130 cm",
    img: "photo-1574169208507-84376144848b",
  },
  {
    no: "06",
    title: "Resonanz",
    year: "2024",
    medium: "Öl & Blattgold",
    size: "100 × 100 cm",
    img: "photo-1573221566340-81bdde00e00b",
  },
];

export type Exhibition = {
  year: string;
  title: string;
  place: string;
  city: string;
  kind: string;
};

export const exhibitions: Exhibition[] = [
  {
    year: "2024",
    title: "Farbräume",
    place: "Galerie Konnex",
    city: "Berlin",
    kind: "Einzelausstellung",
  },
  {
    year: "2023",
    title: "Material & Licht",
    place: "Kunsthalle Spandau",
    city: "Berlin",
    kind: "Gruppe",
  },
  {
    year: "2023",
    title: "Emergence",
    place: "Lumen Project Space",
    city: "London",
    kind: "Gruppe",
  },
  {
    year: "2022",
    title: "Pigmentum",
    place: "Galerie Nord",
    city: "Hamburg",
    kind: "Einzelausstellung",
  },
  {
    year: "2021",
    title: "Junge Positionen",
    place: "Art Cologne",
    city: "Köln",
    kind: "Gruppe",
  },
];

// Artist portrait (visually verified — contemplative, muted, editorial).
export const portraitImg = "photo-1502323777036-f29e3972d82f";

// Unsplash URL helper.
export const ph = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
