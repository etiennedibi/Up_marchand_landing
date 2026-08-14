import type { Translated } from "@/lib/i18n";

/**
 * Textes d'interface — navigation, pied de page, libellés partagés.
 *
 * Tout ce qui n'appartient à aucune section en propre. Les noms de marque, les
 * villes et les pays ne figurent pas ici : ils ne se traduisent pas.
 */
type UiCopy = {
  nav: { ecosystem: string; philosophy: string; waitlist: string; home: string };
  menu: { open: string; close: string; navigate: string; contact: string; label: string };
  language: string;
  footer: {
    columns: { title: string; links: { label: string; href: string }[] }[];
    contact: string;
    rights: string;
    status: string;
  };
};

export const UI: Translated<UiCopy> = {
  fr: {
    nav: {
      ecosystem: "Écosystème",
      philosophy: "Philosophie",
      waitlist: "Liste d'attente",
      home: "Accueil",
    },
    menu: {
      open: "Ouvrir le menu",
      close: "Fermer le menu",
      navigate: "Naviguer",
      contact: "Contact",
      label: "Menu",
    },
    language: "Choisir la langue",
    footer: {
      columns: [
        {
          title: "Vendre",
          links: [
            { label: "Pourquoi UPMARCHAND", href: "/#marchands" },
            { label: "Tarifs", href: "/#tarifs" },
            { label: "Questions fréquentes", href: "/#faq" },
          ],
        },
        {
          title: "En savoir plus",
          links: [
            { label: "L'écosystème", href: "/ecosysteme" },
            { label: "Notre philosophie", href: "/philosophie" },
            { label: "Couverture", href: "/#couverture" },
          ],
        },
        {
          title: "Légal",
          links: [
            { label: "Conditions générales", href: "#" },
            { label: "Politique de confidentialité", href: "#" },
            { label: "Mentions légales", href: "#" },
            { label: "Gestion des cookies", href: "#" },
          ],
        },
      ],
      contact: "Contact",
      rights: "un produit",
      status: "Plateforme en construction · ouverture prochaine",
    },
  },
  en: {
    nav: {
      ecosystem: "Ecosystem",
      philosophy: "Philosophy",
      waitlist: "Waiting list",
      home: "Home",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
      navigate: "Navigate",
      contact: "Contact",
      label: "Menu",
    },
    language: "Choose language",
    footer: {
      columns: [
        {
          title: "Sell",
          links: [
            { label: "Why UPMARCHAND", href: "/#marchands" },
            { label: "Pricing", href: "/#tarifs" },
            { label: "Frequently asked", href: "/#faq" },
          ],
        },
        {
          title: "Go deeper",
          links: [
            { label: "The ecosystem", href: "/ecosysteme" },
            { label: "Our philosophy", href: "/philosophie" },
            { label: "Coverage", href: "/#couverture" },
          ],
        },
        {
          title: "Legal",
          links: [
            { label: "Terms of service", href: "#" },
            { label: "Privacy policy", href: "#" },
            { label: "Legal notice", href: "#" },
            { label: "Cookie settings", href: "#" },
          ],
        },
      ],
      contact: "Contact",
      rights: "a product by",
      status: "Platform under construction · opening soon",
    },
  },
};
