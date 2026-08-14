import type { Translated } from "@/lib/i18n";

/**
 * Textes du hero (CDC S1).
 *
 * Contenu isolé du composant : les variantes de titre de l'annexe B du CDC sont
 * destinées à être testées en A/B, et un copywriter doit pouvoir les modifier
 * sans toucher au JSX.
 *
 * Le titre est composé de lignes explicites : la coupe fait partie du dessin,
 * elle ne dépend pas de la largeur de la colonne. La dernière ligne porte le
 * souligné en vague dorée — c'est elle qui porte la promesse.
 */
type HeroCopy = {
  title: { lines: string[]; accent: string };
  lede: string;
  cta: string;
};

export const HERO: Translated<HeroCopy> = {
  fr: {
    title: { lines: ["Vendez", "Encaissez et Livrez"], accent: "Partout dans le monde" },
    lede: "UPMARCHAND donne aux commerçants les outils pour vendre partout sans complications administratives",
    cta: "Réserver ma place",
  },
  en: {
    title: { lines: ["Sell.", "Get paid and deliver"], accent: "Anywhere in the world" },
    lede: "UPMARCHAND gives merchants the tools to sell anywhere, without the administrative burden",
    cta: "Claim my place",
  },
};

/**
 * Carte de bénéfice du hero.
 *
 * `flow` décrit les trois états de l'escrow, dans l'ordre où ils se produisent.
 * Ils s'allument l'un après l'autre en boucle : l'enchaînement se montre, il ne
 * se raconte pas.
 */
type HeroCardCopy = {
  chip: string;
  title: string;
  flow: string[];
  cta: string;
  places: { unit: string; remaining: string };
};

export const HERO_CARD: Translated<HeroCardCopy> = {
  fr: {
    chip: "Paiement sécurisé",
    title: "Encaissez avant de livrer",
    flow: ["L'argent du client est bloqué", "Le colis est livré et confirmé", "Vous êtes payé"],
    cta: "Découvrir",
    places: { unit: "places", remaining: "places restantes" },
  },
  en: {
    chip: "Secure payment",
    title: "Get paid before you ship",
    flow: ["The buyer's money is held", "The parcel is delivered and confirmed", "You get paid"],
    cta: "Learn more",
    places: { unit: "spots", remaining: "spots left" },
  },
};

/**
 * Programme Marchand Fondateur (CDC S10).
 *
 * À BRANCHER : ces deux nombres viennent de l'API d'inscription, jamais d'une
 * constante. La DA §8 est explicite — un chiffre non vérifiable se retire, il
 * ne s'arrondit pas. Les valeurs ci-dessous sont celles du CDC et ne servent
 * qu'à la mise au point.
 */
export const FOUNDER_PLACES = {
  taken: 347,
  total: 500,
} as const;
