import type { Metadata } from "next";
import { ViewTransition } from "react";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { WaitlistIntro } from "@/components/sections/WaitlistIntro";

export const metadata: Metadata = {
  title: "Réserver ma place de marchand",
  description:
    "Vendeurs : réservez votre place avant l'ouverture d'UPMARCHAND. Deux minutes, sans engagement ni carte bancaire. Nous préparons votre boutique avec vous sur WhatsApp.",
  alternates: { canonical: "/rejoindre" },
};

/**
 * Page de liste d'attente, réservée aux marchands.
 *
 * Mise en page reprise de mindmarket.com/contact-us : un fond plein sur toute
 * la hauteur de l'écran, la barre fixe réservée en haut, et une colonne unique
 * centrée sur 8 des 16 colonnes de la grille — le formulaire ne partage la page
 * avec rien d'autre.
 */
export default function RejoindrePage() {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main className="flex-1 bg-alt pt-[var(--nav-safe)]">
        {/* Respiration verticale de leur page : --spacing-fluid-3xl, soit 80 px
            sur mobile et 128 px sur grand écran, et jamais moins d'un écran de
            haut. Le titre a besoin de ce vide au-dessus de lui. */}
        <div className="page-container min-h-screen py-[clamp(5rem,3.9565rem+5.2174vw,8rem)]">
          <div className="form-grid">
            <div className="form-col">
              <WaitlistIntro />
              <WaitlistForm />
            </div>
          </div>
        </div>
      </main>
    </ViewTransition>
  );
}
