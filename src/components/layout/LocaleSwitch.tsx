"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UI } from "@/content/ui";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/i18n";

/**
 * Sélecteur de langue.
 *
 * Ce sont des liens, pas des boutons : chaque langue a sa propre adresse, donc
 * le clic droit, l'ouverture dans un nouvel onglet et le partage fonctionnent.
 * Un bouton qui change l'état d'une page n'offre rien de tout ça.
 *
 * Le chemin courant est conservé : depuis `/fr/philosophie`, « EN » mène à
 * `/en/philosophie` et non à l'accueil. Changer de langue ne doit pas faire
 * perdre sa place.
 *
 * `lang` est posé sur chaque lien pour que la synthèse vocale prononce « EN »
 * à l'anglaise et « FR » à la française.
 */
export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const swap = (next: Locale) => {
    const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
    return `/${next}${rest}`;
  };

  return (
    <div className="nav-locale" role="group" aria-label={UI[locale].language}>
      {LOCALES.map((option) => (
        <Link
          key={option}
          href={swap(option)}
          lang={option}
          hrefLang={option}
          title={LOCALE_LABELS[option].full}
          aria-current={locale === option ? "true" : undefined}
          data-active={locale === option}
        >
          {LOCALE_LABELS[option].short}
        </Link>
      ))}
    </div>
  );
}
