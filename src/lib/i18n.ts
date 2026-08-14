/**
 * Internationalisation.
 *
 * La langue est portée par l'URL — `/fr/...` et `/en/...` — et non par un état
 * client. Trois raisons :
 *
 *  1. Les sections sont des composants serveur. Un état client ne peut pas les
 *     re-rendre ; seul un changement de route le peut.
 *  2. Chaque version doit avoir sa propre adresse, sans quoi les moteurs de
 *     recherche n'en indexent qu'une. Le CDC §6.3 fixe un objectif de 40 % de
 *     trafic organique : deux langues invisibles pour Google en gaspillent la
 *     moitié.
 *  3. Une page traduite doit pouvoir être partagée telle quelle. Un lien qui
 *     s'ouvre dans la mauvaise langue selon le visiteur n'est pas un lien.
 */
export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Contenu décliné par langue. Chaque fichier de `src/content` exporte cette forme. */
export type Translated<T> = Record<Locale, T>;

/**
 * Préfixe un chemin interne de la langue courante.
 * `localePath("en", "/rejoindre")` → `/en/rejoindre`
 */
export function localePath(locale: Locale, path: string) {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Nom de chaque langue dans sa propre langue — jamais traduit. */
export const LOCALE_LABELS: Record<Locale, { short: string; full: string }> = {
  fr: { short: "FR", full: "Français" },
  en: { short: "EN", full: "English" },
};
