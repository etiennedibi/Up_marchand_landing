import { WaveHeading } from "@/components/ui/WaveHeading";
import { COVERAGE } from "@/content/coverage";
import type { Locale } from "@/lib/i18n";

/**
 * Section — Portée géographique.
 *
 * « Dans quelles villes livrez-vous ? » est la question qui bloque une
 * inscription. Elle était en dernière position de la FAQ ; elle a maintenant sa
 * section.
 *
 * Le statut se lit à la forme de la pastille — sarcelle pleine pour ouvert,
 * contour pointillé pour à venir — et pas seulement à la légende : une
 * information portée par la seule couleur exclut une partie des lecteurs.
 */
export function Coverage({ locale }: { locale: Locale }) {
  const copy = COVERAGE[locale];

  return (
    <section id="couverture" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {copy.title.before}
          <u>{copy.title.accent}</u>
        </WaveHeading>
        <p className="section-sub">{copy.sub}</p>
      </div>

      <div className="coverage-grid">
        {copy.countries.map((country) => (
          <div key={country.name} className="coverage-country">
            <h3>{country.name}</h3>
            <div className="coverage-cities">
              {country.cities.map((city) => (
                <span key={city.name} className={`city-pill -${city.status}`}>
                  <span className="city-dot" aria-hidden="true" />
                  {city.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="coverage-legend">
        <span>
          <span className="city-pill -ouvert size-3 rounded-full p-0" aria-hidden="true" />
          {copy.legend.ouvert}
        </span>
        <span>
          <span className="city-pill -bientot size-3 rounded-full p-0" aria-hidden="true" />
          {copy.legend.bientot}
        </span>
      </div>

      <p className="section-sub mt-8">{copy.note}</p>
    </section>
  );
}
