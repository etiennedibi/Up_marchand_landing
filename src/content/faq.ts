import type { Translated } from "@/lib/i18n";

/**
 * S12 — FAQ (CDC).
 *
 * Les questions doivent être celles que les marchands posent vraiment, pas
 * celles qu'on imagine qu'ils posent. Celles-ci viennent du CDC ; elles seront
 * à réviser après les premiers entretiens d'onboarding, où l'on découvrira
 * toujours deux ou trois objections qu'on n'avait pas vues.
 */
type FaqCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  items: { q: string; a: string }[];
};

export const FAQ: Translated<FaqCopy> = {
  fr: {
    eyebrow: "Questions fréquentes",
    title: { before: "Ce qu'on nous demande ", accent: "le plus souvent" },
    items: [
      {
        q: "Est-ce vraiment gratuit pour commencer ?",
        a: "Oui, complètement. Le plan Starter est gratuit sans limite de durée. Vous ne payez qu'une commission de 10 % sur les ventes que vous réalisez. Aucun frais d'abonnement, aucune carte bancaire demandée à l'inscription.",
      },
      {
        q: "Comment je reçois mon argent ?",
        a: "Après chaque livraison confirmée, votre argent part automatiquement vers votre compte mobile money ou bancaire sous 48 heures. Vous n'avez aucune demande à formuler, aucun seuil à atteindre.",
      },
      {
        q: "Et si le client reçoit le colis mais dit le contraire ?",
        a: "Chaque livraison est prouvée par une photo horodatée et un code à usage unique saisi par le client. Si celui-ci confirme la réception puis conteste, ces preuves vous protègent, et notre équipe arbitre sur pièces.",
      },
      {
        q: "Mes produits sont déjà sur WhatsApp. Pourquoi changer ?",
        a: "Vous n'avez pas à choisir. UPMARCHAND complète vos ventes sociales : vous partagez votre boutique dans une conversation, et la commande arrive dans votre tableau de bord déjà payée. Vos habitudes ne changent pas, votre sécurité oui.",
      },
      {
        q: "Mes clients peuvent-ils encore payer à la livraison ?",
        a: "Oui, le paiement à la livraison reste disponible. Nous recommandons simplement d'activer aussi le paiement en ligne, qui réduit fortement les refus à la porte. Vous gardez le choix, commande par commande.",
      },
      {
        q: "Dans quelles villes livrez-vous ?",
        a: "Les principales villes de Côte d'Ivoire, du Sénégal et du Cameroun au lancement, puis les zones péri-urbaines. Inscrivez-vous : vous serez prévenu dès que votre ville est desservie.",
      },
    ],
  },
  en: {
    eyebrow: "Frequently asked",
    title: { before: "What merchants ask us ", accent: "most often" },
    items: [
      {
        q: "Is it really free to start?",
        a: "Yes, entirely. The Starter plan is free with no time limit. You only pay a 10 % commission on the sales you actually make. No subscription fee, no bank card asked for at registration.",
      },
      {
        q: "How do I get my money?",
        a: "After each confirmed delivery, your money goes automatically to your mobile money or bank account within 48 hours. Nothing to request, no threshold to reach.",
      },
      {
        q: "What if the buyer receives the parcel but says otherwise?",
        a: "Every delivery is proven by a timestamped photo and a one-time code entered by the buyer. If they confirm receipt and then dispute it, that evidence protects you, and our team arbitrates on the record.",
      },
      {
        q: "My products are already on WhatsApp. Why change?",
        a: "You don't have to choose. UPMARCHAND completes your social selling: you share your shop in a conversation, and the order lands in your dashboard already paid. Your habits don't change, your security does.",
      },
      {
        q: "Can my buyers still pay on delivery?",
        a: "Yes, cash on delivery stays available. We simply recommend switching on online payment too, which sharply reduces refusals at the door. You keep the choice, order by order.",
      },
      {
        q: "Which cities do you deliver to?",
        a: "The main cities of Côte d'Ivoire, Senegal and Cameroon at launch, then peri-urban areas. Sign up and we'll tell you as soon as your city is served.",
      },
    ],
  },
};
