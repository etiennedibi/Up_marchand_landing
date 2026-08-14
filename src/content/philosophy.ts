import type { Translated } from "@/lib/i18n";

/**
 * Page /philosophie — la vision UPMARCHAND.
 *
 * Une page de vision n'a de valeur que si elle engage. Celle-ci prend position
 * sur trois choses : ce que nous croyons du commerce africain, ce que nous
 * refusons de faire même si c'est rentable, et où nous allons.
 *
 * ⚠ Le contenu vient des constats du CDC — verbatims de terrain, frustrations
 * des personas — et non d'un exercice de communication. Il reste à valider par
 * la direction : une page de vision est un engagement public, plus difficile à
 * retirer qu'une fonctionnalité.
 */
type PhilosophyCopy = {
  title: { before: string; accent: string };
  lede: string;
  credo: { eyebrow: string; statement: string; paragraphs: string[] };
  refusals: { eyebrow: string; intro: string; items: { label: string; why: string }[] };
  horizon: {
    eyebrow: string;
    statement: string;
    paragraphs: string[];
    milestones: { when: string; what: string }[];
  };
  cta: string;
};

export const PHILOSOPHY: Translated<PhilosophyCopy> = {
  fr: {
    title: {
      before: "Le commerce africain ne manque pas de vendeurs. ",
      accent: "Il manque de confiance.",
    },
    lede: "Des dizaines de milliers de commerçants vendent déjà, tous les jours, sur WhatsApp et dans les marchés. Ce qui leur manque n'est pas un canal de plus. C'est la certitude d'être payés, et celle d'être livrés.",
    credo: {
      eyebrow: "Ce que nous croyons",
      statement: "La technologie ne crée pas le commerce. Elle enlève ce qui l'empêche.",
      paragraphs: [
        "Une vendeuse de prêt-à-porter à Abidjan ne perd pas de ventes parce qu'elle manque d'outils : elle en perd parce qu'un client sur trois refuse à la livraison, parce qu'elle ne peut rien prouver quand un colis est contesté, et parce qu'au-delà de sa ville, elle n'a personne à qui confier un paquet.",
        "Aucun de ces trois problèmes ne se règle avec une meilleure interface. Ils se règlent avec un séquestre, une preuve de remise et un réseau de livraison. C'est ce qu'UPMARCHAND construit, et c'est pour ça que le paiement et la logistique appartiennent au groupe plutôt qu'à des prestataires.",
        "Nous partons du terrain, pas du produit. Chaque brique de la plateforme répond à une phrase que quelqu'un nous a dite.",
      ],
    },
    refusals: {
      eyebrow: "Ce que nous refusons",
      intro:
        "Certaines pratiques sont rentables et répandues. Nous nous en passons — c'est plus facile de le dire maintenant que de le regretter plus tard.",
      items: [
        {
          label: "Les frais qui apparaissent après",
          why: "Une commission s'affiche avant l'inscription, pas dans un tableau qu'on découvre au premier versement. Ce qui n'est pas annoncé ici ne sera pas facturé.",
        },
        {
          label: "Les avis qu'on peut acheter",
          why: "Seul un acheteur ayant reçu sa commande peut noter. Une réputation qui s'achète ne vaut rien pour celui qui l'a méritée.",
        },
        {
          label: "Le chiffre arrondi vers le haut",
          why: "Un nombre affiché sur cette plateforme est un nombre mesuré. Quand nous ne l'avons pas, nous l'écrivons — nous ne l'estimons pas.",
        },
        {
          label: "L'exclusivité imposée",
          why: "Vendre sur UPMARCHAND n'oblige à quitter ni WhatsApp, ni Instagram, ni son marché. Une plateforme qui a besoin d'enfermer ses marchands a un problème ailleurs.",
        },
      ],
    },
    horizon: {
      eyebrow: "Où nous allons",
      statement: "Trois pays d'abord. Le continent ensuite, et pas l'inverse.",
      paragraphs: [
        "Ouvrir dix pays mal desservis est plus facile que d'en tenir trois correctement. Nous prenons le chemin inverse : Côte d'Ivoire, Sénégal, Cameroun, avec une couverture qui descend jusqu'aux zones péri-urbaines avant de s'étendre.",
        "L'objectif n'est pas d'être la place de marché la plus grande d'Afrique. C'est d'être celle où un commerçant sait qu'il sera payé, et où un acheteur sait qu'il sera livré ou remboursé. Le reste suit.",
      ],
      milestones: [
        { when: "Aujourd'hui", what: "Constitution du réseau de marchands fondateurs" },
        { when: "À l'ouverture", what: "Trois pays, principales villes et zones péri-urbaines" },
        { when: "Ensuite", what: "Extension par ville, une à une, jamais par annonce" },
      ],
    },
    cta: "Rejoindre la liste d'attente",
  },
  en: {
    title: {
      before: "African commerce is not short of sellers. ",
      accent: "It is short of trust.",
    },
    lede: "Tens of thousands of merchants already sell, every day, on WhatsApp and in markets. What they lack is not one more channel. It is the certainty of being paid, and the certainty of being delivered.",
    credo: {
      eyebrow: "What we believe",
      statement: "Technology does not create commerce. It removes what stands in its way.",
      paragraphs: [
        "A clothing seller in Abidjan does not lose sales for lack of tools: she loses them because one buyer in three refuses on delivery, because she can prove nothing when a parcel is disputed, and because beyond her own city she has no one to hand a package to.",
        "None of those three problems is solved by a better interface. They are solved by escrow, proof of handover and a delivery network. That is what UPMARCHAND builds, and that is why payment and logistics belong to the group rather than to suppliers.",
        "We start from the ground, not from the product. Every piece of the platform answers a sentence somebody said to us.",
      ],
    },
    refusals: {
      eyebrow: "What we refuse",
      intro:
        "Some practices are profitable and widespread. We do without them — easier to say now than to regret later.",
      items: [
        {
          label: "Fees that appear afterwards",
          why: "A commission is shown before you sign up, not in a statement you discover at your first payout. What is not announced here will not be charged.",
        },
        {
          label: "Reviews you can buy",
          why: "Only a buyer who received their order can rate. A reputation that can be bought is worth nothing to the person who earned theirs.",
        },
        {
          label: "The number rounded up",
          why: "A figure shown on this platform is a measured figure. When we don't have it, we say so — we do not estimate it.",
        },
        {
          label: "Forced exclusivity",
          why: "Selling on UPMARCHAND means leaving neither WhatsApp, nor Instagram, nor your market stall. A platform that needs to lock its merchants in has a problem elsewhere.",
        },
      ],
    },
    horizon: {
      eyebrow: "Where we are going",
      statement: "Three countries first. The continent after, not the other way round.",
      paragraphs: [
        "Opening ten poorly served countries is easier than holding three properly. We take the opposite road: Côte d'Ivoire, Senegal, Cameroon, with coverage that reaches down to peri-urban areas before it spreads out.",
        "The goal is not to be the largest marketplace in Africa. It is to be the one where a merchant knows they will be paid, and a buyer knows they will be delivered or refunded. The rest follows.",
      ],
      milestones: [
        { when: "Today", what: "Building the founding merchant network" },
        { when: "At opening", what: "Three countries, main cities and peri-urban areas" },
        { when: "Then", what: "City by city, never by press release" },
      ],
    },
    cta: "Join the waiting list",
  },
};
