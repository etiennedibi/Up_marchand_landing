import type { Translated } from "@/lib/i18n";

/**
 * S8 — Tarifs (CDC).
 *
 * La transparence tarifaire est un acte de confiance : afficher les prix
 * distingue UPMARCHAND des plateformes opaques.
 *
 * À CONFIRMER avant mise en ligne : les trois montants, les trois taux de
 * commission et les plafonds de catalogue. Ils viennent du CDC v1.0 et engagent
 * commercialement dès qu'ils sont publiés.
 *
 * Les montants sont hors du bloc traduit : un tarif ne change pas de valeur
 * selon la langue du visiteur.
 */
export const PLAN_PRICES = {
  starter: { monthly: 0, yearly: 0, commission: "10 %" },
  pro: { monthly: 5000, yearly: 50000, commission: "7 %" },
  business: { monthly: 17000, yearly: 170000, commission: "5 %" },
} as const;

export type PlanId = keyof typeof PLAN_PRICES;

type PricingCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  sub: string;
  billing: { monthly: string; yearly: string; save: string; perMonth: string; perYear: string };
  free: string;
  commissionLabel: (rate: string) => string;
  ribbon: string;
  plans: { id: PlanId; name: string; pitch: string; cta: string; features: string[] }[];
  note: string;
};

export const PRICING: Translated<PricingCopy> = {
  fr: {
    eyebrow: "Tarifs",
    title: { before: "Des tarifs transparents. ", accent: "Aucune surprise." },
    sub: "Commencez gratuitement. Changez de plan quand vous êtes prêt, jamais avant.",
    billing: {
      monthly: "Mensuel",
      yearly: "Annuel",
      save: "2 mois offerts",
      perMonth: "mois",
      perYear: "an",
    },
    free: "Gratuit",
    commissionLabel: (rate) => `Commission ${rate} par vente`,
    ribbon: "Le plus choisi par nos testeurs",
    plans: [
      {
        id: "starter",
        name: "Starter",
        pitch: "Pour tester sans rien avancer",
        cta: "Démarrer gratuitement",
        features: [
          "50 produits en catalogue",
          "Paiement sécurisé UPPAY",
          "Livraison via nos partenaires",
          "Partage WhatsApp",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        pitch: "Pour vendre tous les jours",
        cta: "Choisir Pro",
        features: [
          "500 produits en catalogue",
          "Statistiques de vente",
          "Promotions et codes promo",
          "Badge Pro sur la boutique",
          "Import CSV et support prioritaire",
        ],
      },
      {
        id: "business",
        name: "Business",
        pitch: "Pour le gros et le B2B",
        cta: "Nous contacter",
        features: [
          "Catalogue illimité",
          "Tarifs de gros et ventes B2B",
          "Comptes multi-utilisateurs",
          "Accès API",
          "Chargé de compte dédié",
        ],
      },
    ],
    note: "Aucune carte bancaire pour commencer. Aucun engagement. La commission est prélevée sur la vente, jamais en plus.",
  },
  en: {
    eyebrow: "Pricing",
    title: { before: "Transparent pricing. ", accent: "No surprises." },
    sub: "Start free. Move up when you're ready, never before.",
    billing: {
      monthly: "Monthly",
      yearly: "Yearly",
      save: "2 months free",
      perMonth: "month",
      perYear: "year",
    },
    free: "Free",
    commissionLabel: (rate) => `${rate} commission per sale`,
    ribbon: "Most chosen by our testers",
    plans: [
      {
        id: "starter",
        name: "Starter",
        pitch: "To try without paying anything up front",
        cta: "Start for free",
        features: [
          "50 products in your catalogue",
          "Secure payment through UPPAY",
          "Delivery through our partners",
          "WhatsApp sharing",
        ],
      },
      {
        id: "pro",
        name: "Pro",
        pitch: "For selling every day",
        cta: "Choose Pro",
        features: [
          "500 products in your catalogue",
          "Sales analytics",
          "Promotions and discount codes",
          "Pro badge on your shop",
          "CSV import and priority support",
        ],
      },
      {
        id: "business",
        name: "Business",
        pitch: "For wholesale and B2B",
        cta: "Talk to us",
        features: [
          "Unlimited catalogue",
          "Wholesale pricing and B2B sales",
          "Multi-user accounts",
          "API access",
          "Dedicated account manager",
        ],
      },
    ],
    note: "No bank card to start. No commitment. The commission comes out of the sale, never on top of it.",
  },
};
