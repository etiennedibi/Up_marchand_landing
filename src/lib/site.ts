/**
 * Configuration générale du site.
 * Les valeurs marquées « À BRANCHER » doivent être renseignées avant la mise en
 * ligne : aucune donnée fictive ne doit rester en production (DA §8).
 */
export const SITE = {
  name: "UPMARCHAND",
  url: "https://www.upmarchand.com",
  baseline: "La marketplace de confiance pour l'Afrique.",
  parent: "UPJUNOO!",
  /** À BRANCHER : numéro WhatsApp officiel du support. */
  whatsapp: "+2250000000000",
  email: "hello@upmarchand.com",
  countries: ["Côte d'Ivoire", "Sénégal", "Cameroun"],
} as const;

/** Pages du site. */
export const ROUTES = {
  home: "/",
  /** Liste d'attente — destination de tous les CTA « Rejoindre la liste ». */
  waitlist: "/rejoindre",
  /** Les systèmes qui rendent les promesses tenables. */
  ecosystem: "/ecosysteme",
  /** La vision : ce que nous croyons, ce que nous refusons. */
  philosophy: "/philosophie",
} as const;

/**
 * Ancres de la page d'accueil. Une seule source de vérité pour la nav et les CTA.
 * Elles sont relatives à la racine : `localePath` leur ajoute la langue.
 */
export const ANCHORS = {
  marchands: "/#marchands",
  ecosysteme: "/#ecosysteme",
  fonctionnalites: "/#fonctionnalites",
  couverture: "/#couverture",
  tarifs: "/#tarifs",
  frais: "/#frais",
  faq: "/#faq",
} as const;
