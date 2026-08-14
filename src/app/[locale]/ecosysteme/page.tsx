import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { Footer } from "@/components/layout/Footer";
import {
  VisualUpjunooPro,
  VisualUpmap,
  VisualUppay,
} from "@/components/sections/ecosystem-visuals";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { ECOSYSTEM_PAGE } from "@/content/ecosystem-page";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { ROUTES } from "@/lib/site";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "L'écosystème",
    description:
      "UPPAY pour l'encaissement, UPJUNOO PRO pour la livraison, UPMAP pour l'adressage. Les trois systèmes du groupe qui rendent les promesses d'UPMARCHAND tenables.",
  },
  en: {
    title: "The ecosystem",
    description:
      "UPPAY for payments, UPJUNOO PRO for delivery, UPMAP for addressing. The three systems inside the group that make UPMARCHAND's promises keepable.",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ecosysteme">): Promise<Metadata> {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "fr";
  return { ...META[lang], alternates: { canonical: localePath(lang, "/ecosysteme") } };
}

/**
 * Page /ecosysteme.
 *
 * Mise en page reprise de la page « réseau » de MindMarket : un listing dont
 * chaque entrée occupe une grande rangée, texte d'un côté, démonstration de
 * l'autre, séparées par un filet. Une rangée sur deux inverse l'ordre — sans
 * ça, la page se lit comme une colonne de texte doublée d'une colonne d'images.
 */
const VISUALS = [VisualUppay, VisualUpjunooPro, VisualUpmap];

export default async function EcosystemePage({ params }: PageProps<"/[locale]/ecosysteme">) {
  const { locale } = await params;
  const lang = locale as Locale;
  const copy = ECOSYSTEM_PAGE[lang];

  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <main className="flex-1">
        <section className="page-hero page-container">
          <WaveHeading className="page-hero-title -wave-sm">
            {copy.title.before}
            <u>{copy.title.accent}</u>
          </WaveHeading>
          <p className="page-hero-lede">{copy.lede}</p>
        </section>

        <div className="page-container pb-24">
          <div className="listing">
            {copy.items.map((item, index) => {
              const Visual = VISUALS[index];
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="listing-item scroll-mt-[var(--nav-safe)]"
                >
                  <div className="listing-inner">
                    <div>
                      <p className="listing-index">
                        {item.index} · {item.role}
                      </p>
                      <h2 className="listing-name">{item.name}</h2>
                      <p className="listing-claim">{item.claim}</p>
                      <p className="listing-text">{item.text}</p>
                      <ul className="listing-points">
                        {item.points.map((point) => (
                          <li key={point}>
                            <CheckIcon />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="listing-visual">
                      <Visual t={copy.visuals} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mx-auto mt-16 max-w-[46rem] text-center">
            <h2 className="manifesto mx-auto">{copy.closing.title}</h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[var(--nav-text)] leading-relaxed tracking-[-0.02em] text-muted">
              {copy.closing.text}
            </p>
            <Link href={localePath(lang, ROUTES.waitlist)} className="hero-cta mt-10">
              <span>{copy.closing.cta}</span>
              <span className="hero-cta-icon">
                <ArrowRightIcon className="size-5" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer locale={lang} />
    </ViewTransition>
  );
}
