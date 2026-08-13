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
} as const;

/**
 * Ancres de la page d'accueil. Une seule source de vérité pour la nav et les CTA.
 * Chemins absolus : depuis /rejoindre, une ancre nue ne mènerait nulle part.
 */
export const ANCHORS = {
  marchands: "/#marchands",
  acheteurs: "/#acheteurs",
  fonctionnement: "/#fonctionnement",
  tarifs: "/#tarifs",
  faq: "/#faq",
  inscription: ROUTES.waitlist,
} as const;
