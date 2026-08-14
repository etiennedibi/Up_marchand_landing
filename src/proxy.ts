import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";

/**
 * Redirection vers une adresse localisée.
 *
 * Une adresse sans langue — `/`, `/tarifs` — est redirigée vers la langue
 * préférée du navigateur si nous la servons, sinon vers le français. Personne
 * ne tape `/fr/` à la main.
 *
 * En Next 16, ce fichier s'appelle `proxy` et non plus `middleware`, et il
 * s'exécute sur le runtime Node.
 */
function preferredLocale(request: NextRequest) {
  const header = request.headers.get("accept-language");
  if (!header) return DEFAULT_LOCALE;

  // `fr-CI,fr;q=0.9,en;q=0.8` → on retient la première langue que nous servons.
  const wanted = header
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase());

  return LOCALES.find((locale) => wanted.includes(locale)) ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Tout sauf les ressources internes, les images optimisées et les fichiers
  // servis tels quels — un favicon n'a pas de langue.
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
