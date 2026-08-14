import type { Translated } from "@/lib/i18n";

/**
 * S4 — La solution (CDC).
 *
 * Des bénéfices formulés du point de vue du commerçant, jamais une liste de
 * fonctionnalités. Chaque carte répond à une phrase entendue sur le terrain, et
 * chacune porte une maquette qui montre le mécanisme plutôt que de le décrire.
 *
 * Cinq cartes et non six : la grille est en 3 + 2, et cette rupture de rythme
 * vaut mieux qu'un sixième argument aligné. « Bâtissez votre réputation » est
 * mis de côté — avant l'ouverture, il n'y a pas encore d'avis à montrer.
 *
 * Les identifiants pilotent le choix de l'icône et de la maquette : ils ne se
 * traduisent pas.
 */
export type SolutionId = "whatsapp" | "escrow" | "livraison" | "pilotage" | "commissions";

type SolutionCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  sub: string;
  cards: { id: SolutionId; title: string; text: string }[];
};

export const SOLUTION: Translated<SolutionCopy> = {
  fr: {
    eyebrow: "La réponse",
    title: { before: "Votre boutique professionnelle ", accent: "en ligne" },
    sub: "Chaque brique répond à un problème précis du terrain. Rien qui ne serve à vendre.",
    cards: [
      {
        id: "whatsapp",
        title: "Votre boutique sur la marketplace et WhatsApp",
        text: "Un seul catalogue, deux canaux. Les commandes arrivent payées.",
      },
      {
        id: "escrow",
        title: "Encaissez avant de livrer",
        text: "Le paiement est acquis avant que le colis parte.",
      },
      {
        id: "livraison",
        title: "Livrez là où vous ne pouviez pas",
        text: "Nos partenaires desservent villes et zones péri-urbaines.",
      },
      {
        id: "pilotage",
        title: "Tout se pilote depuis sa tablette",
        text: "Stock, commandes, versements : un seul tableau de bord.",
      },
      {
        id: "commissions",
        title: "Des commissions qui respectent votre marge",
        text: "À partir de 5 %, affichées et fixes. Aucun frais caché.",
      },
    ],
  },
  en: {
    eyebrow: "The answer",
    title: { before: "Your professional shop, ", accent: "online" },
    sub: "Every piece answers a problem merchants actually have. Nothing that doesn't help you sell.",
    cards: [
      {
        id: "whatsapp",
        title: "Your shop on the marketplace and on WhatsApp",
        text: "One catalogue, two channels. Orders arrive already paid.",
      },
      {
        id: "escrow",
        title: "Get paid before you ship",
        text: "The payment is secured before the parcel leaves.",
      },
      {
        id: "livraison",
        title: "Deliver where you couldn't before",
        text: "Our partners cover cities and peri-urban areas.",
      },
      {
        id: "pilotage",
        title: "Run everything from your tablet",
        text: "Stock, orders, payouts: a single dashboard.",
      },
      {
        id: "commissions",
        title: "Commissions that respect your margin",
        text: "From 5 %, published and fixed. No hidden fee.",
      },
    ],
  },
};

/** Libellés des maquettes de la section. */
type VisualsCopy = {
  chatTitle: string;
  chatSub: string;
  today: string;
  ask: string;
  answer: string;
  client: string;
  shop: string;
  product: string;
  order: string;
  reply: string;
  notes: string;
  orderRef: string;
  held: string;
  received: string;
  releasedOn: string;
  payout: string;
  parcel: string;
  onTheWay: string;
  remaining: string;
  eta: string;
  pointA: string;
  pointB: string;
  shopLabel: string;
  clientLabel: string;
  notified: string;
  proof: string;
  sellerSpace: string;
  menu: string[];
  dashboard: string;
  shopName: string;
  tabs: string[];
  monthSales: string;
  toPayOut: string;
  vsLastMonth: string;
  payoutOn: string;
  salesAnalysis: string;
  days: string;
  commissionPerPlan: string;
  chargedOn: string;
  onASaleOf: string;
  commission: string;
  youReceive: string;
  paidWithin: string;
  planScopes: string[];
};

export const SOLUTION_VISUALS: Translated<VisualsCopy> = {
  fr: {
    chatTitle: "Chat boutique",
    chatSub: "Conversation avec le client",
    today: "Aujourd'hui",
    ask: "Bonjour, le pagne wax est encore disponible ?",
    answer: "Oui, il est en stock. Voici la fiche :",
    client: "Cliente",
    shop: "Boutique",
    product: "Pagne wax · 6 yards",
    order: "Commander",
    reply: "Répondre",
    notes: "Notes",
    orderRef: "Commande #1042",
    held: "En séquestre",
    received: "Paiement reçu du client",
    releasedOn: "Versé à la livraison confirmée",
    payout: "Orange Money · J+2",
    parcel: "Colis #A-2210",
    onTheWay: "En route",
    remaining: "Distance restante",
    eta: "Temps estimé",
    pointA: "Point A",
    pointB: "Point B",
    shopLabel: "Boutique · Cocody",
    clientLabel: "Adresse du client",
    notified: "Votre colis est en route",
    proof: "Preuve photo à la livraison",
    sellerSpace: "Espace vendeur",
    menu: ["Tableau de bord", "Ventes", "Produits", "Livraisons", "Versements"],
    dashboard: "Tableau de bord",
    shopName: "Boutique Aïcha · Abidjan",
    tabs: ["Aperçu", "Commandes", "Versements"],
    monthSales: "Ventes du mois",
    toPayOut: "À reverser",
    vsLastMonth: "+12,9 % vs mois dernier",
    payoutOn: "Versement le 2 du mois",
    salesAnalysis: "Analyse des ventes",
    days: "30 jours",
    commissionPerPlan: "Commission par plan",
    chargedOn: "Prélevée sur la vente",
    onASaleOf: "Sur une vente de",
    commission: "Commission",
    youReceive: "Vous recevez",
    paidWithin: "Versé sous 48 h",
    planScopes: ["50 produits", "500 produits", "Catalogue illimité"],
  },
  en: {
    chatTitle: "Shop chat",
    chatSub: "Conversation with the buyer",
    today: "Today",
    ask: "Hello, is the wax fabric still available?",
    answer: "Yes, it's in stock. Here's the listing:",
    client: "Buyer",
    shop: "Shop",
    product: "Wax fabric · 6 yards",
    order: "Order",
    reply: "Reply",
    notes: "Notes",
    orderRef: "Order #1042",
    held: "In escrow",
    received: "Payment received from buyer",
    releasedOn: "Released on confirmed delivery",
    payout: "Orange Money · D+2",
    parcel: "Parcel #A-2210",
    onTheWay: "On the way",
    remaining: "Distance left",
    eta: "Estimated time",
    pointA: "Point A",
    pointB: "Point B",
    shopLabel: "Shop · Cocody",
    clientLabel: "Buyer's address",
    notified: "Your parcel is on the way",
    proof: "Photo proof on delivery",
    sellerSpace: "Seller space",
    menu: ["Dashboard", "Sales", "Products", "Deliveries", "Payouts"],
    dashboard: "Dashboard",
    shopName: "Aïcha's shop · Abidjan",
    tabs: ["Overview", "Orders", "Payouts"],
    monthSales: "Sales this month",
    toPayOut: "To be paid out",
    vsLastMonth: "+12.9 % vs last month",
    payoutOn: "Payout on the 2nd",
    salesAnalysis: "Sales analysis",
    days: "30 days",
    commissionPerPlan: "Commission per plan",
    chargedOn: "Taken from the sale",
    onASaleOf: "On a sale of",
    commission: "Commission",
    youReceive: "You receive",
    paidWithin: "Paid within 48 h",
    planScopes: ["50 products", "500 products", "Unlimited catalogue"],
  },
};
