import { ViewTransition } from "react";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Solution } from "@/components/sections/Solution";

/**
 * Landing page UPMARCHAND — assemblage des sections du CDC.
 *
 * Fait   : S0 navigation · S1 hero
 * Reste  : S2 barre de confiance · S3 problème · S4 solution
 *          S5 fonctionnement · S6 fonctionnalités · S7 preuve sociale
 *          S8 tarifs · S9 diaspora · S10 compte à rebours · S11 formulaire
 *          S12 FAQ · S13 footer
 *
 * L'enveloppe ViewTransition va par page et jamais dans le layout : un layout
 * persiste d'une navigation à l'autre, ses animations d'entrée et de sortie ne
 * se déclencheraient donc jamais.
 */
export default function Home() {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main id="top" className="flex-1">
        <Hero />
        <Solution />
        <Features />
      </main>
    </ViewTransition>
  );
}
