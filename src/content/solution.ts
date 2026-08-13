/**
 * S4 — La solution (CDC).
 *
 * Des bénéfices formulés du point de vue du commerçant, jamais une liste de
 * fonctionnalités. Chaque carte répond à une phrase entendue sur le terrain, et
 * chacune porte une vignette qui montre le mécanisme plutôt que de le décrire.
 *
 * Cinq cartes et non six : la grille du modèle est en 3 + 2, et cette rupture
 * de rythme vaut mieux qu'un sixième argument aligné. « Bâtissez votre
 * réputation » est mis de côté — avant l'ouverture, il n'y a pas encore d'avis
 * à montrer, l'argument est le moins démontrable des six.
 */
export const SOLUTION = {
  eyebrow: "La réponse",
  /** `accent` porte le souligné en vague dorée, comme dans le hero. */
  title: { before: "Votre boutique professionnelle ", accent: "en ligne" },
  sub: "Chaque brique répond à un problème précis du terrain. Rien qui ne serve à vendre.",
  cards: [
    {
      id: "whatsapp",
      title: "Votre boutique sur la marketplace et WhatsApp",
      text: "Un seul catalogue, deux canaux. Les commandes arrivent payées.",
    },
    {
      id: "escrow",
      title: "Encaissez avant de livrer",
      text: "Le paiement est acquis avant que le colis parte.",
    },
    {
      id: "livraison",
      title: "Livrez là où vous ne pouviez pas",
      text: "Nos partenaires desservent villes et zones péri-urbaines.",
    },
    {
      id: "pilotage",
      title: "Tout se pilote depuis sa tablette",
      text: "Stock, commandes, versements : un seul tableau de bord.",
    },
    {
      id: "commissions",
      title: "Des commissions qui respectent votre marge",
      text: "À partir de 5 %, affichées et fixes. Aucun frais caché.",
    },
  ],
} as const;
