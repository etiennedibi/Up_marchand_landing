import type { Translated } from "@/lib/i18n";

/**
 * Section — Le détail des frais.
 *
 * « Les commissions des autres plateformes mangent toute ma marge » est un
 * verbatim du CDC §S3. Un tableau de tarifs répond par des pourcentages ; il ne
 * dit pas ce qu'il reste. Cette section fait le calcul à la place du commerçant.
 *
 * ⚠ N'y figure que ce qui est publié : la commission par plan, arithmétique sur
 * les taux du CDC, et ce qui n'est pas facturé. Les frais de traitement du
 * paiement et de livraison dépendent de contrats non arrêtés — ils sont
 * annoncés comme à venir plutôt qu'estimés.
 */
export const SALE_AMOUNT = 25000;

export const FEE_PLANS = [
  { name: "Starter", rate: 10 },
  { name: "Pro", rate: 7 },
  { name: "Business", rate: 5 },
] as const;

type FeesCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  sub: string;
  planNotes: string[];
  sale: string;
  commission: string;
  youReceive: string;
  notCharged: { label: string; why: string }[];
  pending: string;
};

export const FEES: Translated<FeesCopy> = {
  fr: {
    eyebrow: "Transparence",
    title: { before: "Sur 25 000 F de vente, ", accent: "voici ce qui reste." },
    sub: "Pas un pourcentage à interpréter : le calcul complet, plan par plan, sur une commande réelle.",
    planNotes: ["Gratuit, sans abonnement", "5 000 F par mois", "17 000 F par mois"],
    sale: "Vente",
    commission: "Commission",
    youReceive: "Vous recevez",
    notCharged: [
      {
        label: "Frais de mise en vente",
        why: "Publier un produit ne coûte rien, quel que soit le plan.",
      },
      {
        label: "Abonnement pour démarrer",
        why: "Le plan Starter est gratuit sans limite de durée.",
      },
      {
        label: "Carte bancaire à l'inscription",
        why: "Aucun moyen de paiement n'est demandé pour s'inscrire.",
      },
      {
        label: "Frais de retrait",
        why: "Le versement vers votre mobile money est inclus.",
      },
    ],
    pending:
      "Les frais de traitement du paiement et de livraison dépendent du contrat opérateur et du modèle logistique retenu. Ils seront détaillés ici, au même niveau de précision, avant l'ouverture.",
  },
  en: {
    eyebrow: "Transparency",
    title: { before: "On a 25,000 F sale, ", accent: "here's what's left." },
    sub: "Not a percentage to interpret: the full calculation, plan by plan, on a real order.",
    planNotes: ["Free, no subscription", "5,000 F per month", "17,000 F per month"],
    sale: "Sale",
    commission: "Commission",
    youReceive: "You receive",
    notCharged: [
      {
        label: "Listing fee",
        why: "Publishing a product costs nothing, on any plan.",
      },
      {
        label: "Subscription to start",
        why: "The Starter plan is free with no time limit.",
      },
      {
        label: "Bank card to sign up",
        why: "No payment method is asked for at registration.",
      },
      {
        label: "Withdrawal fee",
        why: "The payout to your mobile money account is included.",
      },
    ],
    pending:
      "Payment processing and delivery fees depend on the operator contract and the logistics model chosen. They will be detailed here, at the same level of precision, before opening.",
  },
};
