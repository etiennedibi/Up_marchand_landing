import { ViewTransition } from "react";
import { Footer } from "@/components/layout/Footer";
import { Brands } from "@/components/sections/Brands";
import { Coverage } from "@/components/sections/Coverage";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Fees } from "@/components/sections/Fees";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Solution } from "@/components/sections/Solution";
import type { Locale } from "@/lib/i18n";

/**
 * Landing page UPMARCHAND — assemblage des sections du CDC.
 *
 * Fait   : S0 navigation · S1 hero · S2 marques · S4 solution · écosystème
 *          S6 différenciateurs · couverture · S8 tarifs · frais · S12 FAQ
 *          S13 footer
 * Reste  : S3 problème · S5 fonctionnement · S7 preuve sociale
 *          S9 diaspora · S10 compte à rebours
 *
 * La langue descend en propriété depuis le paramètre de route : les sections
 * sont des composants serveur, elles ne peuvent pas lire un état client.
 *
 * L'enveloppe ViewTransition va par page et jamais dans le layout : un layout
 * persiste d'une navigation à l'autre, ses animations d'entrée et de sortie ne
 * se déclencheraient donc jamais.
 */
export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const lang = locale as Locale;

  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main id="top" className="flex-1">
        <Hero locale={lang} />
        <Brands locale={lang} />
        <Solution locale={lang} />
        <Ecosystem locale={lang} />
        <Features locale={lang} />
        <Coverage locale={lang} />
        <Pricing locale={lang} />
        <Fees locale={lang} />
        <Faq locale={lang} />
      </main>
      <Footer locale={lang} />
    </ViewTransition>
  );
}
