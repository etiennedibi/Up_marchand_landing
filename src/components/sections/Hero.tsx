import Link from "next/link";
import { HeroMedia } from "@/components/sections/HeroMedia";
import { HeroStat } from "@/components/sections/HeroStat";
import { ArrowRightIcon } from "@/components/ui/icons";
import { FOUNDER_PLACES, HERO, HERO_CARD } from "@/content/hero";
import { localePath, type Locale } from "@/lib/i18n";
import { ANCHORS, ROUTES } from "@/lib/site";

/**
 * S1 — Hero.
 *
 * Il doit déclencher en moins de cinq secondes une réaction claire : « enfin
 * une solution qui comprend mes problèmes ». Une promesse, une preuve, un
 * bouton qui invite. Pas d'énumération de fonctionnalités.
 *
 * Photo pleine largeur sur toute la hauteur de l'écran, depuis le premier
 * pixel : la barre flotte par-dessus. Titre calé en bas à gauche sur un voile
 * sombre, deux cartes blanches flottantes à droite.
 */
export function Hero({ locale }: { locale: Locale }) {
  const copy = HERO[locale];
  const card = HERO_CARD[locale];

  return (
    <section className="hero">
      <HeroMedia />
      <div className="hero-veil" aria-hidden="true" />

      <div className="hero-inner">
        <div>
          <h1 className="hero-title underline-wave" data-inview="true">
            {copy.title.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">
              <u>{copy.title.accent}</u>
            </span>
          </h1>

          <p className="hero-lede">{copy.lede}</p>

          <div className="hero-actions">
            <Link href={localePath(locale, ROUTES.waitlist)} className="hero-cta">
              <span>{copy.cta}</span>
              <span className="hero-cta-icon">
                <ArrowRightIcon className="size-5" />
              </span>
            </Link>
          </div>
        </div>

        <aside className="hero-cards">
          {/* À BRANCHER : compteur réel de l'API d'inscription. La DA §8 est
              explicite — un chiffre non vérifiable se retire, il ne s'arrondit
              pas. Tant que la donnée n'existe pas, cette carte ne monte pas en
              production. */}
          <HeroStat
            taken={FOUNDER_PLACES.taken}
            total={FOUNDER_PLACES.total}
            unit={card.places.unit}
            remaining={card.places.remaining}
          />

          <div className="hero-card">
            <span className="hero-chip">{card.chip}</span>
            <p className="hero-card-title">{card.title}</p>

            <ol className="flow">
              {card.flow.map((step, index) => (
                <li key={step} className="flow-step" data-step={index + 1}>
                  <span className="flow-dot" aria-hidden="true" />
                  <span className="flow-label">{step}</span>
                </li>
              ))}
            </ol>

            <Link href={localePath(locale, ANCHORS.ecosysteme)} className="hero-card-cta">
              {card.cta}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
