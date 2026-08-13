"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";
import { ANCHORS, ROUTES, SITE } from "@/lib/site";

/**
 * Menu plein écran, ouvert par le bouton rond de la navbar.
 *
 * Il déplie d'un coup tout ce que les sous-menus cachent au survol — sur
 * mobile, c'est la seule navigation disponible. Les colonnes entrent en cascade
 * de 60 ms, translation de 12 px vers le haut (DA §6).
 */
export function FullMenu({
  open,
  onClose,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  onNavigate: (item: NavItem) => void;
}) {
  return (
    <div
      id="menu-complet"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      inert={!open ? true : undefined}
      className={cn(
        // Sous la barre, jamais au-dessus : c'est elle qui porte le bouton de
        // fermeture, elle doit rester atteignable.
        "fixed inset-0 z-[var(--z-overlay)] overflow-y-auto bg-ink px-4 pt-28 pb-16 sm:px-6 lg:px-10",
        "transition-[opacity,visibility] duration-240 ease-brand",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="mx-auto grid max-w-[100rem] gap-10 lg:grid-cols-3 lg:gap-16">
        {NAV_ITEMS.filter((item) => item.children).map((item, index) => (
          <Column key={item.label} open={open} delay={index * 60}>
            <p className="mb-5 font-mono text-[0.7rem] tracking-[0.14em] text-gold uppercase">
              {item.label}
            </p>
            <ul className="flex flex-col">
              {item.children?.map((child) => (
                <li key={child.label}>
                  <a
                    href={child.href}
                    onClick={() => onNavigate(item)}
                    className="group flex items-baseline gap-3 border-b border-[#17454A] py-4 font-display text-[1.35rem] font-bold text-[#EAF6F6] transition-colors duration-180 ease-brand hover:text-gold"
                  >
                    {child.label}
                    <ArrowRightIcon className="size-4 -translate-x-1 opacity-0 transition-all duration-180 ease-brand group-hover:translate-x-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Column>
        ))}

        <Column open={open} delay={120}>
          <p className="mb-5 font-mono text-[0.7rem] tracking-[0.14em] text-gold uppercase">
            Aller directement
          </p>
          <ul className="flex flex-col">
            {NAV_ITEMS.filter((item) => !item.children).map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => onNavigate(item)}
                  className="block border-b border-[#17454A] py-4 font-display text-[1.35rem] font-bold text-[#EAF6F6] transition-colors duration-180 ease-brand hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={ANCHORS.faq}
                onClick={onClose}
                className="block border-b border-[#17454A] py-4 font-display text-[1.35rem] font-bold text-[#EAF6F6] transition-colors duration-180 ease-brand hover:text-gold"
              >
                Questions fréquentes
              </a>
            </li>
            <li>
              <Link
                href={ROUTES.waitlist}
                onClick={onClose}
                className="block border-b border-[#17454A] py-4 font-display text-[1.35rem] font-bold text-gold transition-colors duration-180 ease-brand hover:text-white"
              >
                Rejoindre la liste d&apos;attente
              </Link>
            </li>
          </ul>

          <div className="mt-10 flex flex-col gap-1 text-[0.92rem] text-[#95AFB0]">
            <span>{SITE.baseline}</span>
            <a href={`mailto:${SITE.email}`} className="text-[#B9D3D4] hover:text-gold">
              {SITE.email}
            </a>
            <span>{SITE.countries.join(" · ")}</span>
          </div>
        </Column>
      </div>
    </div>
  );
}

function Column({
  open,
  delay,
  children,
}: {
  open: boolean;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{ transitionDelay: open ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-[opacity,transform] duration-600 ease-brand",
        open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
    >
      {children}
    </div>
  );
}
