/**
 * S6 — Les différenciateurs (CDC).
 *
 * Présentés en pile de grandes cartes chiffrées, sur le modèle de la section
 * « chiffres » de MindMarket : le titre reste collé à l'écran pendant que les
 * cartes défilent par-dessus lui.
 *
 * Chaque chiffre est un **fait de conception**, pas une mesure de performance :
 * le nombre de moyens de paiement acceptés, la part des paiements placés sous
 * séquestre, le nombre de faux avis possible. Ces valeurs sont vraies le jour
 * de l'ouverture, sans attendre de statistiques — c'est ce qui les distingue
 * des chiffres de la barre de confiance, qui eux devront être mesurés.
 *
 * Seul « 3 pays » est un engagement à confirmer avant mise en ligne (DA §8).
 */
export type FeatureTone = "plain" | "teal" | "ink" | "gold";

export const FEATURES = {
  eyebrow: "Les différenciateurs",
  title: { before: "Tout ce dont vous avez besoin. ", accent: "Rien de plus." },
  text: "Chaque mécanisme existe parce qu'un commerçant nous a dit ce qui lui manquait. Aucun n'est là pour allonger la liste.",
  cards: [
    {
      stat: "100",
      unit: "%",
      title: "Système d'escrow",
      text: "Chaque paiement passe par le séquestre. Sans exception, sans option à activer.",
      tone: "plain" as FeatureTone,
    },
    {
      stat: "5",
      unit: "",
      title: "Moyens de paiement",
      text: "Orange Money, MTN, Wave, carte bancaire, paiement à la livraison. Tout le monde peut payer.",
      tone: "teal" as FeatureTone,
    },
    {
      stat: "0",
      unit: "",
      title: "Faux avis possible",
      text: "Seul un acheteur ayant reçu sa commande peut noter. La réputation ne s'achète pas.",
      tone: "ink" as FeatureTone,
    },
    {
      stat: "1",
      unit: "lien",
      title: "Commerce WhatsApp",
      text: "Un lien à partager dans une conversation, et la commande arrive déjà payée dans votre tableau de bord.",
      tone: "gold" as FeatureTone,
    },
    {
      // À BRANCHER : à confirmer avant mise en ligne (DA §8).
      stat: "3",
      unit: "pays",
      title: "Livraison suivie",
      text: "Urbain et péri-urbain au lancement, position du livreur et preuve photo à chaque étape.",
      tone: "plain" as FeatureTone,
    },
  ],
} as const;
