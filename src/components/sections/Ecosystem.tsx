import { CardIcon, GlobeIcon, TruckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { ECOSYSTEM } from "@/content/ecosystem";
import type { Locale } from "@/lib/i18n";

/**
 * Section — L'écosystème UPJUNOO!
 *
 * Bandeau encre pleine largeur : le changement de fond signale qu'on quitte
 * l'argumentaire produit pour parler d'infrastructure.
 *
 * Ces trois noms figuraient jusqu'ici dans une bande de logos, au même rang que
 * des moyens de paiement génériques. Une brique qu'on possède ne se présente
 * pas comme un partenaire — c'est tout l'objet de cette section.
 */
const ICONS = [CardIcon, TruckIcon, GlobeIcon];

export function Ecosystem({ locale }: { locale: Locale }) {
  const copy = ECOSYSTEM[locale];

  return (
    <section id="ecosysteme" className="eco scroll-mt-[var(--nav-safe)]">
      <div className="page-container">
        <div className="section-head">
          <p className="section-eyebrow">{copy.eyebrow}</p>
          <WaveHeading className="section-title -wave-sm">
            {copy.title.before}
            <u>{copy.title.accent}</u>
          </WaveHeading>
          <p className="section-sub">{copy.sub}</p>
        </div>

        <div className="eco-grid">
          {copy.products.map((product, index) => {
            const Icon = ICONS[index];
            return (
              <article key={product.id} className="eco-card">
                <span className="eco-mark">
                  <Icon />
                </span>
                <h3 className="eco-name">{product.name}</h3>
                <p className="eco-role">{product.role}</p>
                <p className="eco-claim">{product.claim}</p>
                <p className="eco-text">{product.text}</p>
              </article>
            );
          })}
        </div>

        <p className="eco-note">{copy.note}</p>
      </div>
    </section>
  );
}
