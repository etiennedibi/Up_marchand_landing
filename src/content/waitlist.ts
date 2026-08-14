import type { Translated } from "@/lib/i18n";

/**
 * Page /rejoindre — formulaire de liste d'attente.
 *
 * La page ne s'adresse qu'aux marchands : sans eux, pas de marketplace, et le
 * CDC les classe en priorité haute. Les acheteurs suivront les boutiques.
 *
 * Les valeurs envoyées au CRM restent en français quelle que soit la langue
 * d'affichage : une base segmentée sur des libellés traduits est ingérable.
 */
export const CATEGORY_VALUES = [
  "mode",
  "beaute",
  "telephonie",
  "alimentation",
  "maison",
  "gros",
  "autre",
] as const;

export const CHANNEL_VALUES = ["social", "marche", "plateforme", "aucun"] as const;

export const CITY_VALUES = [
  "Abidjan",
  "Bouaké",
  "Dakar",
  "Thiès",
  "Douala",
  "Yaoundé",
  "Europe (diaspora)",
  "Autre",
] as const;

type WaitlistCopy = {
  title: { before: string; accent: string };
  points: string[];
  categoriesLegend: string;
  categoriesHint: string;
  categories: string[];
  channelLegend: string;
  channels: string[];
  contactLegend: string;
  firstName: string;
  whatsapp: string;
  email: string;
  city: string;
  cityPlaceholder: string;
  consent: string;
  submit: string;
  privacy: string;
  errors: {
    firstName: string;
    phone: string;
    email: string;
    city: string;
    category: string;
    consent: string;
  };
  success: { title: string; text: string };
};

export const WAITLIST: Translated<WaitlistCopy> = {
  fr: {
    title: { before: "Réservez ", accent: "votre place" },
    points: [
      "Deux minutes suffisent",
      "Nous vous écrivons sur WhatsApp pour préparer votre boutique avec vous",
      "Avant l'ouverture, sans engagement ni carte bancaire",
    ],
    categoriesLegend: "Que vendez-vous ?",
    categoriesHint: "Pour vous orienter vers les bons outils dès l'ouverture.",
    categories: [
      "Mode & vêtements",
      "Beauté & santé",
      "Téléphonie",
      "Alimentation",
      "Maison",
      "Vente en gros",
      "Autre",
    ],
    channelLegend: "Où vendez-vous aujourd'hui ?",
    channels: [
      "WhatsApp ou Instagram",
      "Marché physique",
      "Une autre plateforme",
      "Je ne vends pas encore",
    ],
    contactLegend: "Pour vous recontacter",
    firstName: "Prénom",
    whatsapp: "Numéro WhatsApp",
    email: "Email",
    city: "Ville",
    cityPlaceholder: "Sélectionner",
    consent:
      "J'accepte de recevoir des informations sur le lancement d'UPMARCHAND. Je peux me désabonner en un clic, à tout moment.",
    submit: "Réserver ma place",
    privacy: "Vos données ne sont jamais revendues.",
    errors: {
      firstName: "Indiquez votre prénom.",
      phone: "Numéro invalide, indicatif pays compris.",
      email: "Adresse email invalide.",
      city: "Choisissez votre ville.",
      category: "Choisissez une catégorie.",
      consent: "Votre accord est nécessaire pour vous écrire.",
    },
    success: {
      title: "Votre place est réservée.",
      text: "Un email de confirmation vient de partir. Nous vous écrivons sur WhatsApp dans les prochains jours pour préparer votre boutique ensemble.",
    },
  },
  en: {
    title: { before: "Claim ", accent: "your place" },
    points: [
      "Two minutes is enough",
      "We message you on WhatsApp to set your shop up together",
      "Before opening, no commitment and no bank card",
    ],
    categoriesLegend: "What do you sell?",
    categoriesHint: "So we point you to the right tools from day one.",
    categories: [
      "Fashion & clothing",
      "Beauty & health",
      "Phones & electronics",
      "Food",
      "Home",
      "Wholesale",
      "Something else",
    ],
    channelLegend: "Where do you sell today?",
    channels: [
      "WhatsApp or Instagram",
      "A physical market",
      "Another platform",
      "I don't sell yet",
    ],
    contactLegend: "So we can reach you",
    firstName: "First name",
    whatsapp: "WhatsApp number",
    email: "Email",
    city: "City",
    cityPlaceholder: "Select",
    consent:
      "I agree to receive news about the UPMARCHAND launch. I can unsubscribe in one click, at any time.",
    submit: "Claim my place",
    privacy: "Your details are never sold.",
    errors: {
      firstName: "Please enter your first name.",
      phone: "Invalid number — include the country code.",
      email: "Invalid email address.",
      city: "Please choose your city.",
      category: "Please choose a category.",
      consent: "We need your agreement before writing to you.",
    },
    success: {
      title: "Your place is reserved.",
      text: "A confirmation email is on its way. We'll message you on WhatsApp in the coming days to set your shop up together.",
    },
  },
};
