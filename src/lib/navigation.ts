import type { Locale } from "@/lib/i18n";
import { UI } from "@/content/ui";
import { ROUTES } from "@/lib/site";

/**
 * Entrées de la barre de navigation.
 *
 * Deux liens simples, sans sous-menu, plus le CTA. Pas d'entrée « Accueil » :
 * le logotype est à gauche de la barre, visible sur toutes les pages, et il y
 * ramène. Deux liens pour la même destination sont un doublon.
 *
 * Les chemins sont relatifs à la racine ; c'est `localePath` qui leur ajoute la
 * langue au moment du rendu.
 */
export type NavItem = {
  label: string;
  href: string;
};

export function navItems(locale: Locale): NavItem[] {
  const t = UI[locale].nav;
  return [
    { label: t.ecosystem, href: ROUTES.ecosystem },
    { label: t.philosophy, href: ROUTES.philosophy },
  ];
}
