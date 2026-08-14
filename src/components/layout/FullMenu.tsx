"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { UI } from "@/content/ui";
import { cn } from "@/lib/cn";
import { localePath, type Locale } from "@/lib/i18n";
import { navItems } from "@/lib/navigation";
import { ROUTES, SITE } from "@/lib/site";

/**
 * Menu plein écran, ouvert par le bouton rond de la barre.
 *
 * Sur mobile, c'est la seule navigation disponible : les liens de la barre y
 * sont masqués. Les deux colonnes entrent en cascade de 60 ms, translation de
 * 12 px vers le haut (DA §6).
 */
export function FullMenu({
  locale,
  open,
  onClose,
  onNavigate,
}: {
  locale: Locale;
  open: boolean;
  onClose: () => void;
  onNavigate: () => void;
}) {
  const t = UI[locale];

  return (
    <div
      id="menu-complet"
      role="dialog"
      aria-modal="true"
      aria-label={t.menu.label}
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
      <div className="mx-auto grid max-w-[100rem] gap-10 lg:grid-cols-2 lg:gap-16">
        <Column open={open} delay={0}>
          <p className="mb-5 font-mono text-[0.7rem] tracking-[0.14em] text-gold uppercase">
            {t.menu.navigate}
          </p>
          <ul className="flex flex-col">
            {navItems(locale).map((item) => (
              <li key={item.href}>
                <Link
                  href={localePath(locale, item.href)}
                  onClick={onNavigate}
                  className="group flex items-baseline gap-3 border-b border-[#17454A] py-4 font-display text-[1.65rem] font-bold text-[#EAF6F6] transition-colors duration-180 ease-brand hover:text-gold"
                >
                  {item.label}
                  <ArrowRightIcon className="size-4 -translate-x-1 opacity-0 transition-all duration-180 ease-brand group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(locale, ROUTES.waitlist)}
                onClick={onClose}
                className="block border-b border-[#17454A] py-4 font-display text-[1.65rem] font-bold text-gold transition-colors duration-180 ease-brand hover:text-white"
              >
                {t.nav.waitlist}
              </Link>
            </li>
          </ul>
        </Column>

        <Column open={open} delay={60}>
          <p className="mb-5 font-mono text-[0.7rem] tracking-[0.14em] text-gold uppercase">
            {t.menu.contact}
          </p>
          <div className="flex flex-col gap-2 text-[1.05rem] text-[#B9D3D4]">
            <a href={`mailto:${SITE.email}`} className="hover:text-gold">
              {SITE.email}
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}
              className="hover:text-gold"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-1 text-[0.92rem] text-[#95AFB0]">
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
