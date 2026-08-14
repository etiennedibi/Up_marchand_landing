"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FullMenu } from "@/components/layout/FullMenu";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";
import { ArrowRightIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { UI } from "@/content/ui";
import { track } from "@/lib/analytics";
import { localePath, type Locale } from "@/lib/i18n";
import { navItems } from "@/lib/navigation";
import { ROUTES } from "@/lib/site";

/**
 * S0 — Barre de navigation, calquée sur mindmarket.com.
 *
 * Proportions et mécanique relevées dans leur CSS de production : barre de
 * 64 px (60 sous 1000 px), rayon 10 px, gouttière de 20 px entre les deux
 * cartes, liens de 44 px de haut en pastille, bouton rond de 40 px.
 *
 * Trois colonnes : logotype à gauche, actions à droite, liens au centre. Les
 * liens ne sont pas centrés sur la carte mais sur l'écran — la carte s'arrête
 * avant le bouton d'appel, son milieu n'est pas celui de la page (voir
 * `.nav-list` dans globals.css).
 *
 * La barre est fixe et le reste — elle ne s'escamote pas au scroll. Elle
 * descend une fois au chargement, 400 ms après un délai de 200 ms.
 */
export function Navbar({ locale }: { locale: Locale }) {
  const root = useRef<HTMLDivElement>(null);
  const [fullMenu, setFullMenu] = useState(false);
  const t = UI[locale];

  // Déclenche l'entrée de la barre après le premier rendu, comme leur classe
  // `is-first-loaded`. Écriture directe dans le DOM : aucun rendu React.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (root.current) root.current.dataset.loaded = "true";
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFullMenu(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = fullMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullMenu]);

  const close = () => setFullMenu(false);

  return (
    <>
      <div
        ref={root}
        className="nav-root"
        // Point d'ancrage de la transition de page : la barre est extraite de
        // l'animation et ne bouge pas pendant que les pages défilent sous elle.
        style={{ viewTransitionName: "site-header" }}
      >
        <div className="nav-shell">
          <nav aria-label={t.menu.navigate} className="nav-bar">
            {/* Le logotype entier — marque et mot — ramène à l'accueil. */}
            <Link
              href={localePath(locale, ROUTES.home)}
              className="flex items-center"
              aria-label={`UPMARCHAND, ${t.nav.home}`}
            >
              <Logo />
            </Link>

            <div className="nav-list max-lg:hidden">
              {navItems(locale).map((item) => (
                <div key={item.href} className="nav-item">
                  <Link href={localePath(locale, item.href)} onClick={close} className="nav-link">
                    <span>{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="nav-actions">
              {/* Sous 640 px, la barre porte déjà le logotype, le menu et
                  l'appel à l'action : le sélecteur y devient à l'étroit. Il
                  passe alors dans le menu plein écran, où il a la place. */}
              <LocaleSwitch locale={locale} className="max-sm:hidden" />

              <button
                type="button"
                aria-expanded={fullMenu}
                aria-controls="menu-complet"
                aria-label={fullMenu ? t.menu.close : t.menu.open}
                onClick={() => setFullMenu((open) => !open)}
                className="nav-round"
              >
                <MenuIcon className="nav-round-icon -open" />
                <CloseIcon className="nav-round-icon -close" />
              </button>
            </div>
          </nav>

          <Link
            href={localePath(locale, ROUTES.waitlist)}
            onClick={() => track("nav_cta_clicked", { locale })}
            className="nav-quote"
          >
            <span className="nav-quote-label max-sm:hidden">{t.nav.waitlist}</span>
            <span className="nav-round">
              <ArrowRightIcon className="nav-round-icon" />
            </span>
          </Link>
        </div>
      </div>

      <FullMenu locale={locale} open={fullMenu} onNavigate={close} onClose={close} />
    </>
  );
}
