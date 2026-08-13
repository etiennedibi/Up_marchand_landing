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
export const HERO = {
  title: { lines: ["Vendez", "Encaissez et Livrez"], accent: "Partout dans le monde" },
  lede: "UPMARCHAND donne aux commerçants les outils pour vendre partout sans complications administratives",
  cta: "Réserver ma place",
} as const;

/**
 * Carte de bénéfice du hero.
 *
 * `flow` décrit les trois états de l'escrow, dans l'ordre où ils se produisent.
 * Ils s'allument l'un après l'autre en boucle : l'enchaînement se montre, il ne
 * se raconte pas. C'est le mécanisme le moins évident de la plateforme et le
 * plus décisif pour un marchand — il mérite d'être démontré.
 */
export const HERO_CARD = {
  chip: "Paiement sécurisé",
  title: "Encaissez avant de livrer",
  flow: ["L'argent du client est bloqué", "Le colis est livré et confirmé", "Vous êtes payé"],
  cta: "Découvrir",
} as const;

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
