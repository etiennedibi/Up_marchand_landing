import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { Footer } from "@/components/layout/Footer";
import { ArrowRightIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { PHILOSOPHY } from "@/content/philosophy";
import { isLocale, localePath, type Locale } from "@/lib/i18n";
import { ROUTES } from "@/lib/site";

const META: Record<Locale, { title: string; description: string }> = {
  fr: {
    title: "Philosophie",
    description:
      "Ce que nous croyons du commerce africain, ce que nous refusons de faire même si c'est rentable, et où nous allons. La vision qui gouverne UPMARCHAND.",
  },
  en: {
    title: "Philosophy",
    description:
      "What we believe about African commerce, what we refuse to do even when it pays, and where we are going. The vision that governs UPMARCHAND.",
  },
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/philosophie">): Promise<Metadata> {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "fr";
  return { ...META[lang], alternates: { canonical: localePath(lang, "/philosophie") } };
}

/**
 * Page /philosophie.
 *
 * Construite sur le patron du manifeste de MindMarket : un énoncé en très
 * grand corps à gauche, le développement en colonne de texte à droite. La page
 * n'a pas d'illustration — une page de vision qui a besoin d'images n'a rien à
 * dire.
 *
 * Trois blocs : ce que nous croyons, ce que nous refusons, où nous allons. Le
 * bloc des refus est le seul qui engage vraiment ; c'est aussi le seul qu'on ne
 * trouve pas ailleurs.
 */
export default async function PhilosophiePage({ params }: PageProps<"/[locale]/philosophie">) {
  const { locale } = await params;
  const lang = locale as Locale;
  const copy = PHILOSOPHY[lang];

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

        <section id="credo" className="section page-container scroll-mt-[var(--nav-safe)]">
          <div className="manifesto-grid">
            <div>
              <p className="section-eyebrow">{copy.credo.eyebrow}</p>
              <p className="manifesto mt-6">{copy.credo.statement}</p>
            </div>
            <div className="manifesto-body">
              {copy.credo.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Ce que nous refusons — bandeau alterné, c'est le cœur de la page */}
        <section id="refus" className="stack scroll-mt-[var(--nav-safe)]">
          <div className="page-container">
            <div className="section-head">
              <p className="section-eyebrow">{copy.refusals.eyebrow}</p>
              <p className="section-sub mt-6">{copy.refusals.intro}</p>
            </div>
            <div className="refusals">
              {copy.refusals.items.map((item) => (
                <div key={item.label} className="refusal">
                  <b>{item.label}</b>
                  <span>{item.why}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="horizon" className="section page-container scroll-mt-[var(--nav-safe)]">
          <div className="manifesto-grid">
            <div>
              <p className="section-eyebrow">{copy.horizon.eyebrow}</p>
              <p className="manifesto mt-6">{copy.horizon.statement}</p>
            </div>
            <div className="manifesto-body">
              {copy.horizon.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul className="mt-8 grid gap-0">
                {copy.horizon.milestones.map((milestone) => (
                  <li
                    key={milestone.when}
                    className="grid grid-cols-[8rem_1fr] gap-4 border-t border-line py-4 text-[0.95rem] tracking-[-0.02em]"
                  >
                    <span className="font-medium text-brand">{milestone.when}</span>
                    <span className="text-body">{milestone.what}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href={localePath(lang, ROUTES.waitlist)} className="hero-cta">
              <span>{copy.cta}</span>
              <span className="hero-cta-icon">
                <ArrowRightIcon className="size-5" />
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={lang} />
    </ViewTransition>
  );
}
