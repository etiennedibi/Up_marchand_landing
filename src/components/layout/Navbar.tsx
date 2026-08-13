"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FullMenu } from "@/components/layout/FullMenu";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/Logo";
import { track } from "@/lib/analytics";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { setPersona } from "@/lib/persona";
import { ANCHORS, ROUTES } from "@/lib/site";

/**
 * S0 — Barre de navigation, calquée sur mindmarket.com.
 *
 * Proportions et mécanique relevées dans leur CSS de production : barre de
 * 64 px (60 sous 1000 px), rayon 10 px, gouttière de 20 px entre les deux
 * cartes, liens de 44 px de haut en pastille, bouton rond de 40 px.
 *
 * Comportement, dans leur ordre d'importance :
 * 1. La barre est fixe et le reste. Elle ne s'escamote pas au scroll — elle
 *    descend une fois au chargement, 400 ms après un délai de 200 ms.
 * 2. Les panneaux s'ouvrent au survol de l'entrée, sans latence, et couvrent
 *    toute la largeur de la barre. Fermeture au départ du curseur, à Échap,
 *    au clic à l'extérieur, ou quand le focus quitte la barre.
 * 3. Le clavier ouvre au focus et referme en sortant — jamais de piège.
 *
 * Toute la mise en forme est dans globals.css (`.nav-*`) : les valeurs y sont
 * regroupées pour être comparées d'un coup d'œil avec la référence.
 */
export function Navbar() {
  const root = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [fullMenu, setFullMenu] = useState(false);

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
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setFullMenu(false);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpenMenu(null);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = fullMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [fullMenu]);

  const handleNavigate = (item: NavItem) => {
    if (item.persona) setPersona(item.persona);
    setOpenMenu(null);
    setFullMenu(false);
  };

  return (
    <>
      <div
        ref={root}
        className="nav-root"
        // Point d'ancrage de la transition de page : la barre est extraite de
        // l'animation et ne bouge pas pendant que les pages défilent sous elle.
        style={{ viewTransitionName: "site-header" }}
        // Le focus qui quitte la barre referme le panneau ouvert.
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
        }}
      >
        <div className="nav-shell">
          <nav aria-label="Navigation principale" className="nav-bar">
            {/* Le logotype entier — marque et mot — ramène à l'accueil. */}
            <Link href={ROUTES.home} className="flex items-center" aria-label="UPMARCHAND, accueil">
              <Logo />
            </Link>

            <div className="nav-inner">
              <div className="nav-list max-lg:hidden">
                {NAV_ITEMS.map((item) => (
                  <NavEntry
                    key={item.label}
                    item={item}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.label)}
                    onClose={() => setOpenMenu(null)}
                    onNavigate={handleNavigate}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-expanded={fullMenu}
                aria-controls="menu-complet"
                aria-label={fullMenu ? "Fermer le menu" : "Ouvrir le menu"}
                onClick={() => setFullMenu((open) => !open)}
                className="nav-round nav-round-slot"
              >
                <MenuIcon className="nav-round-icon -open" />
                <CloseIcon className="nav-round-icon -close" />
              </button>
            </div>
          </nav>

          <Link
            href={ROUTES.waitlist}
            onClick={() => track("nav_cta_clicked")}
            className="nav-quote"
          >
            <span className="nav-quote-label max-sm:hidden">Liste d&apos;attente</span>
            <span className="nav-round">
              <ArrowRightIcon className="nav-round-icon" />
            </span>
          </Link>
        </div>
      </div>

      <FullMenu open={fullMenu} onNavigate={handleNavigate} onClose={() => setFullMenu(false)} />
    </>
  );
}

function NavEntry({
  item,
  open,
  onOpen,
  onClose,
  onNavigate,
}: {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onNavigate: (item: NavItem) => void;
}) {
  if (!item.children) {
    return (
      <div className="nav-item">
        <a href={item.href} onClick={() => onNavigate(item)} className="nav-link">
          <span>{item.label}</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className="nav-item"
      data-open={open || undefined}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <a
        href={item.href}
        onClick={() => onNavigate(item)}
        onFocus={onOpen}
        aria-expanded={open}
        className="nav-link"
      >
        <span>{item.label}</span>
        <ChevronDownIcon className="nav-chevron size-4" />
      </a>

      <div className="nav-dropdown">
        <div className="nav-dropdown-inner">
          {item.children.map((child) => (
            <a
              key={child.label}
              href={child.href}
              onClick={() => onNavigate(item)}
              tabIndex={open ? undefined : -1}
              className="nav-card"
            >
              <span className="nav-card-title text-ink">{child.label}</span>
              <span className="nav-card-hint text-muted">{child.hint}</span>
              <span className="nav-card-hint mt-2 flex items-center gap-2 font-medium text-brand">
                Voir <ArrowRightIcon className="nav-card-arrow size-3.5" />
              </span>
            </a>
          ))}

          {/* Troisième colonne : la référence termine ses panneaux par une carte
              d'appel. Elle comble aussi la grille quand l'entrée n'a que deux
              enfants. La liste d'attente ne s'adressant qu'aux marchands, la
              carte du panneau acheteurs renvoie vers la FAQ, pas vers un
              formulaire qui ne les concerne pas. */}
          {item.children.length < 3 && (
            <Link
              href={item.persona === "acheteur" ? ANCHORS.faq : ROUTES.waitlist}
              onClick={() => onNavigate(item)}
              tabIndex={open ? undefined : -1}
              className="nav-card !bg-ink"
            >
              <span className="nav-card-title text-white">
                {item.persona === "acheteur"
                  ? "Comment vous êtes protégé"
                  : "Réserver ma place de marchand"}
              </span>
              <span className="nav-card-hint text-[#95AFB0]">
                {item.persona === "acheteur"
                  ? "Remboursement, délais de livraison, sécurité des paiements"
                  : "Places de fondateur limitées avant le lancement"}
              </span>
              <span className="nav-card-hint mt-2 flex items-center gap-2 font-medium text-gold">
                {item.persona === "acheteur" ? "Lire la FAQ" : "S'inscrire"}
                <ArrowRightIcon className="nav-card-arrow size-3.5" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
