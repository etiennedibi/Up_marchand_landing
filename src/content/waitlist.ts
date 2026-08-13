/**
 * Textes et listes de choix du formulaire de liste d'attente (CDC S11).
 *
 * La page ne s'adresse qu'aux marchands : sans eux, pas de marketplace, et le
 * CDC les classe en priorité haute. Les acheteurs suivront les boutiques —
 * leur collecte se fera ailleurs, avec ses propres arguments.
 *
 * Textes séparés du composant : un copywriter doit pouvoir les reprendre sans
 * toucher au JSX, et les catégories serviront à segmenter les envois du CRM.
 */
export const WAITLIST_COPY = {
  /** `accent` porte le souligné en vague : le mot qui compte, pas la phrase. */
  title: { before: "Réservez ", accent: "votre place" },
  points: [
    "Deux minutes suffisent",
    "Nous vous écrivons sur WhatsApp pour préparer votre boutique avec vous",
    "Avant l'ouverture, sans engagement ni carte bancaire",
  ],
  submit: "Réserver ma place",
} as const;

export const CATEGORIES = [
  "Mode & vêtements",
  "Beauté & santé",
  "Téléphonie",
  "Alimentation",
  "Maison",
  "Vente en gros",
  "Autre",
];

/** Canal de vente actuel — sert à qualifier le lead marchand (CDC S11). */
export const CHANNELS = [
  "WhatsApp ou Instagram",
  "Marché physique",
  "Une autre plateforme",
  "Je ne vends pas encore",
];

export const CITIES = [
  "Abidjan",
  "Bouaké",
  "Dakar",
  "Thiès",
  "Douala",
  "Yaoundé",
  "Europe (diaspora)",
  "Autre",
];
