import {
  VisualCommissions,
  VisualEscrow,
  VisualLivraison,
  VisualPilotage,
  VisualWhatsapp,
} from "@/components/sections/solution-visuals";
import { ChartIcon, ChatIcon, CoinsIcon, LockIcon, TruckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { SOLUTION } from "@/content/solution";

/**
 * S4 — La solution.
 *
 * Elle répond à la question « qu'est-ce que ça change pour moi ? ». Bandeau
 * centré, puis une grille en 3 + 2 : trois cartes égales, deux cartes larges.
 * Chaque carte porte une vignette qui montre le mécanisme — un fragment
 * d'interface, pas une capture d'écran, puisque le produit n'existe pas encore.
 *
 * L'ancre #marchands est celle du menu : « Pour les marchands » atterrit ici.
 */
const VISUALS = {
  escrow: { icon: LockIcon, visual: VisualEscrow },
  livraison: { icon: TruckIcon, visual: VisualLivraison },
  whatsapp: { icon: ChatIcon, visual: VisualWhatsapp },
  pilotage: { icon: ChartIcon, visual: VisualPilotage },
  commissions: { icon: CoinsIcon, visual: VisualCommissions },
} as const;

export function Solution() {
  return (
    <section id="marchands" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{SOLUTION.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {SOLUTION.title.before}
          <u>{SOLUTION.title.accent}</u>
        </WaveHeading>
        <p className="section-sub">{SOLUTION.sub}</p>
      </div>

      <div className="bento">
        {SOLUTION.cards.map((card) => {
          const { icon: Icon, visual: Visual } = VISUALS[card.id];
          return (
            <article key={card.id} className="bento-card">
              <span className="bento-icon-slot">
                <Icon />
              </span>
              <h3 className="bento-title">{card.title}</h3>
              <p className="bento-text">{card.text}</p>
              <Visual />
            </article>
          );
        })}
      </div>
    </section>
  );
}
