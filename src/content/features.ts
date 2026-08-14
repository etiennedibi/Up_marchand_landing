import type { Translated } from "@/lib/i18n";

/**
 * S6 — Les différenciateurs (CDC).
 *
 * Présentés en pile de grandes cartes chiffrées : le titre reste collé à
 * l'écran pendant que les cartes défilent par-dessus lui.
 *
 * Chaque chiffre est un **fait de conception**, pas une mesure de performance :
 * le nombre de moyens de paiement acceptés, la part des paiements placés sous
 * séquestre, le nombre de faux avis possible. Ces valeurs sont vraies le jour
 * de l'ouverture, sans attendre de statistiques.
 *
 * Seul « 3 pays » est un engagement à confirmer avant mise en ligne (DA §8).
 */
export type FeatureTone = "plain" | "teal" | "ink" | "gold";

type FeaturesCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  text: string;
  cards: { stat: string; unit: string; title: string; text: string; tone: FeatureTone }[];
};

export const FEATURES: Translated<FeaturesCopy> = {
  fr: {
    eyebrow: "Les différenciateurs",
    title: { before: "Tout ce dont vous avez besoin. ", accent: "Rien de plus." },
    text: "Chaque mécanisme existe parce qu'un commerçant nous a dit ce qui lui manquait. Aucun n'est là pour allonger la liste.",
    cards: [
      {
        stat: "100",
        unit: "%",
        title: "Système d'escrow",
        text: "Chaque paiement passe par le séquestre. Sans exception, sans option à activer.",
        tone: "plain",
      },
      {
        stat: "5",
        unit: "",
        title: "Moyens de paiement",
        text: "Orange Money, MTN, Wave, carte bancaire, paiement à la livraison. Tout le monde peut payer.",
        tone: "teal",
      },
      {
        stat: "0",
        unit: "",
        title: "Faux avis possible",
        text: "Seul un acheteur ayant reçu sa commande peut noter. La réputation ne s'achète pas.",
        tone: "ink",
      },
      {
        stat: "1",
        unit: "lien",
        title: "Commerce WhatsApp",
        text: "Un lien à partager dans une conversation, et la commande arrive déjà payée dans votre tableau de bord.",
        tone: "gold",
      },
      {
        stat: "3",
        unit: "pays",
        title: "Livraison suivie",
        text: "Urbain et péri-urbain au lancement, position du livreur et preuve photo à chaque étape.",
        tone: "plain",
      },
    ],
  },
  en: {
    eyebrow: "What sets us apart",
    title: { before: "Everything you need. ", accent: "Nothing more." },
    text: "Every mechanism exists because a merchant told us what was missing. None of them is here to make the list longer.",
    cards: [
      {
        stat: "100",
        unit: "%",
        title: "Escrow on every order",
        text: "Every payment goes through escrow. No exception, no setting to switch on.",
        tone: "plain",
      },
      {
        stat: "5",
        unit: "",
        title: "Ways to pay",
        text: "Orange Money, MTN, Wave, bank card, cash on delivery. Everyone can pay.",
        tone: "teal",
      },
      {
        stat: "0",
        unit: "",
        title: "Fake reviews possible",
        text: "Only a buyer who received their order can rate. Reputation cannot be bought.",
        tone: "ink",
      },
      {
        stat: "1",
        unit: "link",
        title: "WhatsApp commerce",
        text: "One link to share in a conversation, and the order lands in your dashboard already paid.",
        tone: "gold",
      },
      {
        stat: "3",
        unit: "countries",
        title: "Tracked delivery",
        text: "Urban and peri-urban at launch, courier position and photo proof at every step.",
        tone: "plain",
      },
    ],
  },
};
