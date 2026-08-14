import {
  VisualCommissions,
  VisualEscrow,
  VisualLivraison,
  VisualPilotage,
  VisualWhatsapp,
} from "@/components/sections/solution-visuals";
import { ChartIcon, ChatIcon, CoinsIcon, LockIcon, TruckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { SOLUTION, SOLUTION_VISUALS, type SolutionId } from "@/content/solution";
import type { Locale } from "@/lib/i18n";

/**
 * S4 — La solution.
 *
 * Elle répond à la question « qu'est-ce que ça change pour moi ? ». Bandeau
 * centré, puis une grille en 3 + 2 : trois cartes égales, deux cartes larges.
 * Chaque carte porte une maquette qui montre le mécanisme — un fragment
 * d'interface dessiné en CSS, puisque le produit n'existe pas encore.
 *
 * L'ancre #marchands est celle du menu et du pied de page.
 */
const PARTS: Record<SolutionId, { icon: typeof LockIcon; visual: typeof VisualEscrow }> = {
  whatsapp: { icon: ChatIcon, visual: VisualWhatsapp },
  escrow: { icon: LockIcon, visual: VisualEscrow },
  livraison: { icon: TruckIcon, visual: VisualLivraison },
  pilotage: { icon: ChartIcon, visual: VisualPilotage },
  commissions: { icon: CoinsIcon, visual: VisualCommissions },
};

export function Solution({ locale }: { locale: Locale }) {
  const copy = SOLUTION[locale];
  const t = SOLUTION_VISUALS[locale];

  return (
    <section id="marchands" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {copy.title.before}
          <u>{copy.title.accent}</u>
        </WaveHeading>
        <p className="section-sub">{copy.sub}</p>
      </div>

      <div className="bento">
        {copy.cards.map((card) => {
          const { icon: Icon, visual: Visual } = PARTS[card.id];
          return (
            <article key={card.id} className="bento-card">
              <span className="bento-icon-slot">
                <Icon />
              </span>
              <h3 className="bento-title">{card.title}</h3>
              <p className="bento-text">{card.text}</p>
              <Visual t={t} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
