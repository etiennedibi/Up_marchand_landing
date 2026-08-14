import type { Translated } from "@/lib/i18n";

/**
 * Page /ecosysteme — les systèmes qui rendent les promesses tenables.
 *
 * La page d'accueil affirme trois choses difficiles : l'argent est retenu puis
 * versé, le colis est suivi et prouvé, la livraison atteint des adresses qui
 * n'existent pas. Cette page montre par quoi.
 *
 * Les identifiants pilotent l'ancre et la démonstration : ils ne se traduisent
 * pas.
 */
type EcosystemPageCopy = {
  title: { before: string; accent: string };
  lede: string;
  items: {
    id: "uppay" | "upjunoo-pro" | "upmap";
    index: string;
    name: string;
    role: string;
    claim: string;
    text: string;
    points: string[];
  }[];
  closing: { title: string; text: string; cta: string };
  visuals: {
    orderRef: string;
    held: string;
    captured: string;
    inEscrow: string;
    released: string;
    pending: string;
    payoutNote: string;
    parcelRef: string;
    onTheWay: string;
    pickedUp: string;
    enRoute: string;
    handed: string;
    codeNote: string;
    addressLabel: string;
    address: string;
    zone: string;
  };
};

export const ECOSYSTEM_PAGE: Translated<EcosystemPageCopy> = {
  fr: {
    title: { before: "Les systèmes derrière ", accent: "les promesses." },
    lede: "Une place de marché qui promet le paiement sécurisé et la livraison suivie doit posséder les deux. Voici les trois briques du groupe, et ce que chacune règle.",
    items: [
      {
        id: "uppay",
        index: "01",
        name: "UPPAY",
        role: "Encaissement et séquestre",
        claim: "L'argent du client ne va nulle part avant que le colis soit entre ses mains.",
        text: "Le paiement est capté à la commande et retenu. Il n'est libéré qu'à la confirmation de réception, puis versé au commerçant sous 48 heures. En cas de litige, c'est la même équipe qui arbitre et qui rembourse — pas un prestataire à qui renvoyer la responsabilité.",
        points: [
          "Mobile money, carte bancaire, paiement à la livraison",
          "Reversement automatique, sans demande à formuler",
          "Arbitrage des litiges sur preuves",
        ],
      },
      {
        id: "upjunoo-pro",
        index: "02",
        name: "UPJUNOO PRO",
        role: "Livraison et preuves",
        claim: "Un colis qui part doit pouvoir être suivi, et sa remise doit être prouvée.",
        text: "Le réseau qui prend le colis et le porte. À chaque étape, un événement : pris en charge, en route, remis. La remise est validée par un code à usage unique et une photo horodatée — les deux preuves qui protègent le commerçant quand un client conteste.",
        points: [
          "Position du livreur pendant la tournée",
          "Code de réception saisi par le client",
          "Photo horodatée à la remise",
        ],
      },
      {
        id: "upmap",
        index: "03",
        name: "UPMAP",
        role: "Adressage et couverture",
        claim: "Le vrai obstacle de la livraison en Afrique n'est pas la distance : c'est l'adresse.",
        text: "Dans la plupart des quartiers, il n'y a ni nom de rue ni numéro. UPMAP construit un adressage exploitable par un livreur : points de repère, zones, itinéraires réels. C'est ce qui permet d'ouvrir une ville plutôt que de se limiter aux avenues qu'un GPS connaît déjà.",
        points: [
          "Adressage par repères plutôt que par voie",
          "Zones urbaines et péri-urbaines",
          "Itinéraires calculés sur la voirie réelle",
        ],
      },
    ],
    closing: {
      title: "Trois briques, une seule équipe.",
      text: "C'est la différence que cette page défend : là où les places de marché régionales assemblent des prestataires, UPMARCHAND répond de la chaîne entière. Un délai n'est pas une estimation transmise, c'est un engagement.",
      cta: "Réserver ma place",
    },
    visuals: {
      orderRef: "Commande #1042",
      held: "En séquestre",
      captured: "Paiement capté",
      inEscrow: "Retenu en séquestre",
      released: "Versé au commerçant",
      pending: "en attente",
      payoutNote: "Le versement part sous 48 h, sans demande à formuler.",
      parcelRef: "Colis #A-2210",
      onTheWay: "En route",
      pickedUp: "Colis pris en charge",
      enRoute: "En route vers le client",
      handed: "Remis · code + photo",
      codeNote: "Code de réception, à saisir par le client à la remise.",
      addressLabel: "Adresse transmise",
      address: "Derrière la pharmacie du carrefour, deuxième portail bleu",
      zone: "Zone C-14 · Cocody · repère vérifié",
    },
  },
  en: {
    title: { before: "The systems behind ", accent: "the promises." },
    lede: "A marketplace that promises secure payment and tracked delivery has to own both. Here are the group's three pieces, and what each one solves.",
    items: [
      {
        id: "uppay",
        index: "01",
        name: "UPPAY",
        role: "Payments and escrow",
        claim: "The buyer's money goes nowhere until the parcel is in their hands.",
        text: "The payment is captured at checkout and held. It is only released once receipt is confirmed, then paid to the merchant within 48 hours. In a dispute, the same team arbitrates and refunds — not a supplier to pass the blame to.",
        points: [
          "Mobile money, bank card, cash on delivery",
          "Automatic payout, nothing to request",
          "Disputes settled on evidence",
        ],
      },
      {
        id: "upjunoo-pro",
        index: "02",
        name: "UPJUNOO PRO",
        role: "Delivery and proof",
        claim: "A parcel that leaves must be trackable, and its handover must be proven.",
        text: "The network that picks the parcel up and carries it. Every step is an event: collected, on the way, handed over. The handover is validated by a one-time code and a timestamped photo — the two pieces of evidence that protect the merchant when a buyer disputes.",
        points: [
          "Courier position during the round",
          "Receipt code entered by the buyer",
          "Timestamped photo at handover",
        ],
      },
      {
        id: "upmap",
        index: "03",
        name: "UPMAP",
        role: "Addressing and coverage",
        claim: "The real obstacle to delivery in Africa is not distance: it is the address.",
        text: "In most neighbourhoods there is neither a street name nor a number. UPMAP builds an addressing system a courier can actually use: landmarks, zones, real routes. That is what lets us open a city rather than stick to the avenues a GPS already knows.",
        points: [
          "Addressing by landmark rather than by street",
          "Urban and peri-urban zones",
          "Routes computed on the real road network",
        ],
      },
    ],
    closing: {
      title: "Three pieces, one team.",
      text: "That is the difference this page defends: where regional marketplaces stitch suppliers together, UPMARCHAND answers for the whole chain. A deadline is not an estimate passed along, it is a commitment.",
      cta: "Claim my place",
    },
    visuals: {
      orderRef: "Order #1042",
      held: "In escrow",
      captured: "Payment captured",
      inEscrow: "Held in escrow",
      released: "Paid to the merchant",
      pending: "pending",
      payoutNote: "The payout leaves within 48 h, with nothing to request.",
      parcelRef: "Parcel #A-2210",
      onTheWay: "On the way",
      pickedUp: "Parcel collected",
      enRoute: "On the way to the buyer",
      handed: "Handed over · code + photo",
      codeNote: "Receipt code, entered by the buyer at handover.",
      addressLabel: "Address given to the courier",
      address: "Behind the pharmacy at the junction, second blue gate",
      zone: "Zone C-14 · Cocody · landmark verified",
    },
  },
};
