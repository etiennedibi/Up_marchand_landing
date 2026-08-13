import type { Persona } from "@/lib/persona";
import { ANCHORS } from "@/lib/site";

/**
 * Entrées de la barre de navigation (CDC S0).
 * Deux entrées à sous-menu, deux entrées simples : MindMarket en propose douze,
 * ce qui est trop pour une landing page (DA §1).
 *
 * `persona` : une entrée qui bascule l'audience aligne toute la page avant de
 * scroller, pour qu'un acheteur ne tombe jamais sur un discours de marchand.
 */
export type NavChild = { label: string; hint: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  persona?: Persona;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Pour les marchands",
    href: ANCHORS.marchands,
    persona: "marchand",
    children: [
      {
        label: "Vendre sur UPMARCHAND",
        hint: "Boutique, paiement, livraison",
        href: ANCHORS.marchands,
      },
      {
        label: "Comment démarrer",
        hint: "Trois étapes, quinze minutes",
        href: ANCHORS.fonctionnement,
      },
      { label: "Commissions et plans", hint: "À partir de 5 %", href: ANCHORS.tarifs },
    ],
  },
  {
    label: "Pour les acheteurs",
    href: ANCHORS.acheteurs,
    persona: "acheteur",
    children: [
      {
        label: "Acheter protégé",
        hint: "Paiement bloqué jusqu'à réception",
        href: ANCHORS.acheteurs,
      },
      { label: "Vos questions", hint: "Remboursement, délais, sécurité", href: ANCHORS.faq },
    ],
  },
  { label: "Comment ça marche", href: ANCHORS.fonctionnement },
  { label: "Tarifs", href: ANCHORS.tarifs },
];
