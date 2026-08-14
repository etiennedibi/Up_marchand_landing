import type { Translated } from "@/lib/i18n";

/**
 * Section — L'écosystème UPJUNOO!, sur la page d'accueil.
 *
 * L'argument est l'intégration verticale : ces trois briques appartiennent au
 * groupe, elles ne sont pas des partenariats. C'est ce qui explique pourquoi
 * UPMARCHAND peut tenir sa promesse de bout en bout sans dépendre d'un tiers à
 * chaque étape.
 */
type EcosystemCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  sub: string;
  products: { id: string; name: string; role: string; claim: string; text: string }[];
  note: string;
};

export const ECOSYSTEM: Translated<EcosystemCopy> = {
  fr: {
    eyebrow: "Intégration verticale",
    title: { before: "Trois briques que nous ", accent: "possédons." },
    sub: "Là où les autres assemblent des prestataires, UPMARCHAND s'appuie sur des produits du groupe. Une seule équipe répond de la chaîne entière.",
    products: [
      {
        id: "uppay",
        name: "UPPAY",
        role: "Encaissement",
        claim: "Le séquestre, les reversements, les litiges",
        text: "L'argent du client est retenu jusqu'à la livraison confirmée, puis versé sous 48 heures. C'est notre système, pas celui d'un prestataire : nous répondons du délai.",
      },
      {
        id: "upjunoo-pro",
        name: "UPJUNOO PRO",
        role: "Livraison",
        claim: "Les tournées, les preuves, les délais",
        text: "Le réseau qui prend le colis et le porte. Position du livreur, code de réception, photo horodatée — les preuves qui vous protègent viennent de là.",
      },
      {
        id: "upmap",
        name: "UPMAP",
        role: "Couverture",
        claim: "L'adressage là où il n'y a pas d'adresse",
        text: "Localiser un client dans un quartier sans nom de rue est le vrai obstacle de la livraison en Afrique. UPMAP est notre réponse à ce problème précis.",
      },
    ],
    note: "Ni Jumia ni les places de marché régionales ne détiennent leur chaîne de paiement et de livraison. C'est la différence que cette page défend.",
  },
  en: {
    eyebrow: "Vertical integration",
    title: { before: "Three pieces we ", accent: "own." },
    sub: "Where others stitch suppliers together, UPMARCHAND runs on products built inside the group. One team answers for the whole chain.",
    products: [
      {
        id: "uppay",
        name: "UPPAY",
        role: "Payments",
        claim: "Escrow, payouts, disputes",
        text: "The buyer's money is held until delivery is confirmed, then paid out within 48 hours. This is our system, not a supplier's: the deadline is ours to answer for.",
      },
      {
        id: "upjunoo-pro",
        name: "UPJUNOO PRO",
        role: "Delivery",
        claim: "Routes, proof, deadlines",
        text: "The network that picks up the parcel and carries it. Courier position, receipt code, timestamped photo — the proof that protects you comes from here.",
      },
      {
        id: "upmap",
        name: "UPMAP",
        role: "Coverage",
        claim: "Addressing where there is no address",
        text: "Finding a buyer in a neighbourhood with no street names is the real obstacle to delivery in Africa. UPMAP is our answer to that exact problem.",
      },
    ],
    note: "Neither Jumia nor the regional marketplaces own their payment and delivery chain. That is the difference this page defends.",
  },
};
