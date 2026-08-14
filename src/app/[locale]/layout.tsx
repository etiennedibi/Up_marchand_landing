import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { isLocale, LOCALES, localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import "../globals.css";

/* Polices auto-hébergées par next/font : aucune requête vers Google au runtime.
   Budget DA §7 : ≤ 120 Ko pour l'ensemble des polices. */
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

/**
 * Layout racine, localisé.
 *
 * Il est placé sous `[locale]` plutôt qu'à la racine de `app/` : c'est ce qui
 * permet de poser `lang` sur le document avec la vraie langue de la page, et
 * non une valeur par défaut corrigée après coup côté client.
 *
 * `generateStaticParams` fait pré-rendre les deux langues à la compilation :
 * chaque page reste servie en statique par le CDN, ce qui tient l'objectif de
 * LCP du CDC §6.2.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Une langue inconnue donne une 404, jamais une page française déguisée. */
export const dynamicParams = false;

const METADATA: Record<Locale, { title: string; template: string; description: string }> = {
  fr: {
    title: "UPMARCHAND — Vendez et achetez en sécurité en Afrique",
    template: "%s · UPMARCHAND",
    description:
      "UPMARCHAND est la marketplace africaine qui sécurise chaque transaction. Marchands : créez votre boutique en 15 minutes. Acheteurs : remboursement garanti si problème.",
  },
  en: {
    title: "UPMARCHAND — Sell and buy safely across Africa",
    template: "%s · UPMARCHAND",
    description:
      "UPMARCHAND is the African marketplace that secures every transaction. Merchants: open your shop in 15 minutes. Buyers: guaranteed refund if anything goes wrong.",
  },
};

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const meta = METADATA[isLocale(locale) ? locale : "fr"];

  return {
    metadataBase: new URL(SITE.url),
    title: { default: meta.title, template: meta.template },
    description: meta.description,
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "fr_FR",
      url: SITE.url,
      siteName: "UPMARCHAND",
      title: meta.title,
      description: meta.description,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: localePath(isLocale(locale) ? locale : "fr", "/"),
      // Chaque version déclare l'autre : sans ça, les moteurs les traitent
      // comme deux pages concurrentes plutôt que comme deux traductions.
      languages: Object.fromEntries(LOCALES.map((l) => [l, localePath(l, "/")])),
    },
  };
}

export const viewport: Viewport = { themeColor: "#062A2E" };

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      {/* La barre vit dans le layout : elle doit persister d'une navigation à
          l'autre pour rester immobile pendant la transition de page. */}
      <body className="flex min-h-full flex-col">
        <Navbar locale={locale} />
        {children}
      </body>
    </html>
  );
}
