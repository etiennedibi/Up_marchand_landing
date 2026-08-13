import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { SITE } from "@/lib/site";
import "./globals.css";

/* Polices auto-hébergées par next/font : aucune requête vers Google au runtime.
   Budget DA §7 : ≤ 120 Ko pour l'ensemble des polices. */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "UPMARCHAND — Vendez et achetez en sécurité en Afrique",
    template: "%s · UPMARCHAND",
  },
  description:
    "UPMARCHAND est la marketplace africaine qui sécurise chaque transaction. Marchands : créez votre boutique en 15 minutes. Acheteurs : remboursement garanti si problème.",
  keywords: [
    "marketplace afrique",
    "vendre en ligne afrique de l'ouest",
    "e-commerce afrique livraison",
    "boutique en ligne afrique",
    "marketplace côte d'ivoire",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: "UPMARCHAND",
    title: "UPMARCHAND — La marketplace de confiance",
    description:
      "Vendez plus, encaissez en sécurité, livrez partout en Afrique. Rejoignez la liste d'attente.",
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#062A2E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      {/* La barre vit dans le layout, pas dans les pages : elle doit persister
          d'une navigation à l'autre pour rester immobile pendant la transition
          de page — c'est le seul point de repère fixe de l'écran. */}
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
