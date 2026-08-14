import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Footer } from "@/components/layout/Footer";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { WaitlistIntro } from "@/components/sections/WaitlistIntro";
import { isLocale, localePath, type Locale } from "@/lib/i18n";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Réserver ma place de marchand",
    description:
      "Vendeurs : réservez votre place avant l'ouverture d'UPMARCHAND. Deux minutes, sans engagement ni carte bancaire. Nous préparons votre boutique avec vous sur WhatsApp.",
  },
  en: {
    title: "Claim my merchant place",
    description:
      "Merchants: claim your place before UPMARCHAND opens. Two minutes, no commitment and no bank card. We set your shop up with you on WhatsApp.",
  },
};

export async function generateMetadata({ params }: PageProps<"/[locale]/rejoindre">): Promise<Metadata> {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "fr";
  return { ...META[lang], alternates: { canonical: localePath(lang, "/rejoindre") } };
}

/**
 * Page de liste d'attente, réservée aux marchands.
 *
 * Mise en page reprise de mindmarket.com/contact-us : un fond plein sur toute
 * la hauteur de l'écran, la barre fixe réservée en haut, et une colonne unique
 * centrée sur 8 des 16 colonnes de la grille — le formulaire ne partage la page
 * avec rien d'autre.
 */
export default async function RejoindrePage({ params }: PageProps<"/[locale]/rejoindre">) {
  const { locale } = await params;
  const lang = locale as Locale;

  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main className="flex-1 bg-alt pt-[var(--nav-safe)]">
        {/* Respiration verticale de leur page : 80 px sur mobile et 128 px sur
            grand écran, et jamais moins d'un écran de haut. */}
        <div className="page-container min-h-screen py-[clamp(5rem,3.9565rem+5.2174vw,8rem)]">
          <div className="form-grid">
            <div className="form-col">
              <WaitlistIntro locale={lang} />
              <WaitlistForm locale={lang} />
            </div>
          </div>
        </div>
      </main>
      <Footer locale={lang} />
    </ViewTransition>
  );
}
