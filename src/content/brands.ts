import type { Translated } from "@/lib/i18n";

/**
 * S2 — Les marques qui nous font confiance.
 *
 * ⚠ Point d'honnêteté, à trancher avant mise en ligne.
 *
 * Les quatre marques de la première rangée sont des **produits du groupe
 * UPJUNOO!**. Elles prouvent une infrastructure, pas une confiance extérieure.
 * Les autres rangées sont remplies d'éléments vérifiables — moyens de paiement
 * pris en charge, villes desservies — plutôt que de marques inventées.
 *
 * Ne jamais y faire figurer Orange Money, MTN, Wave ou un transporteur sans
 * accord écrit : afficher une marque tierce sous-entend un partenariat (DA §8).
 */
export type BrandKind = "paiement" | "livraison" | "couverture" | "groupe" | "moyen" | "ville";

type Brand = { name: string; role: string; kind: BrandKind };

type BrandsCopy = {
  title: string;
  sub: string;
  rails: { items: Brand[]; duration: string; reverse: boolean }[];
};

export const BRANDS: Translated<BrandsCopy> = {
  fr: {
    title: "Les marques qui nous font déjà confiance",
    sub: "UPMARCHAND ne part pas de zéro : une infrastructure déjà en service, des moyens de paiement que tout le monde utilise, et des villes desservies dès l'ouverture.",
    rails: [
      {
        duration: "44s",
        reverse: false,
        items: [
          { name: "UPPAY", role: "Paiement et séquestre", kind: "paiement" },
          { name: "UPJUNOO PRO", role: "Livraison et logistique", kind: "livraison" },
          { name: "UPMAP", role: "Couverture et adressage", kind: "couverture" },
          { name: "UPJUNOO!", role: "Groupe", kind: "groupe" },
        ],
      },
      {
        duration: "56s",
        reverse: true,
        items: [
          { name: "Mobile money", role: "Tous opérateurs", kind: "moyen" },
          { name: "Carte bancaire", role: "Visa et Mastercard", kind: "paiement" },
          { name: "À la livraison", role: "Espèces à la porte", kind: "moyen" },
          { name: "Séquestre", role: "Sur chaque commande", kind: "groupe" },
        ],
      },
      {
        duration: "50s",
        reverse: false,
        items: [
          { name: "Abidjan", role: "Côte d'Ivoire", kind: "ville" },
          { name: "Bouaké", role: "Côte d'Ivoire", kind: "ville" },
          { name: "Dakar", role: "Sénégal", kind: "ville" },
          { name: "Thiès", role: "Sénégal", kind: "ville" },
        ],
      },
      {
        duration: "62s",
        reverse: true,
        items: [
          { name: "Douala", role: "Cameroun", kind: "ville" },
          { name: "Yaoundé", role: "Cameroun", kind: "ville" },
          { name: "Zones péri-urbaines", role: "Sous 72 h", kind: "livraison" },
          { name: "Diaspora", role: "Europe et Canada", kind: "couverture" },
        ],
      },
    ],
  },
  en: {
    title: "The names already behind us",
    sub: "UPMARCHAND doesn't start from scratch: infrastructure already in service, payment methods everyone uses, and cities served from day one.",
    rails: [
      {
        duration: "44s",
        reverse: false,
        items: [
          { name: "UPPAY", role: "Payment and escrow", kind: "paiement" },
          { name: "UPJUNOO PRO", role: "Delivery and logistics", kind: "livraison" },
          { name: "UPMAP", role: "Coverage and addressing", kind: "couverture" },
          { name: "UPJUNOO!", role: "Group", kind: "groupe" },
        ],
      },
      {
        duration: "56s",
        reverse: true,
        items: [
          { name: "Mobile money", role: "Every operator", kind: "moyen" },
          { name: "Bank card", role: "Visa and Mastercard", kind: "paiement" },
          { name: "Cash on delivery", role: "Paid at the door", kind: "moyen" },
          { name: "Escrow", role: "On every order", kind: "groupe" },
        ],
      },
      {
        duration: "50s",
        reverse: false,
        items: [
          { name: "Abidjan", role: "Côte d'Ivoire", kind: "ville" },
          { name: "Bouaké", role: "Côte d'Ivoire", kind: "ville" },
          { name: "Dakar", role: "Senegal", kind: "ville" },
          { name: "Thiès", role: "Senegal", kind: "ville" },
        ],
      },
      {
        duration: "62s",
        reverse: true,
        items: [
          { name: "Douala", role: "Cameroon", kind: "ville" },
          { name: "Yaoundé", role: "Cameroon", kind: "ville" },
          { name: "Peri-urban areas", role: "Within 72 h", kind: "livraison" },
          { name: "Diaspora", role: "Europe and Canada", kind: "couverture" },
        ],
      },
    ],
  },
};
