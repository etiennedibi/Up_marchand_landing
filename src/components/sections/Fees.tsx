import { CheckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { FEE_PLANS, FEES, SALE_AMOUNT } from "@/content/fees";
import type { Locale } from "@/lib/i18n";

/**
 * Section — Le détail des frais.
 *
 * « Les commissions des autres plateformes mangent toute ma marge » est un
 * verbatim du CDC §S3. Un tableau de tarifs répond par des pourcentages ; il ne
 * dit pas ce qu'il reste. Cette section fait le calcul à la place du commerçant.
 *
 * Tout ce qui est affiché est de l'arithmétique sur des taux publiés — rien
 * n'est estimé. Les postes encore inconnus sont annoncés comme tels plutôt que
 * comblés par des ordres de grandeur : une transparence approximative ne vaut
 * pas mieux qu'une opacité.
 */
export function Fees({ locale }: { locale: Locale }) {
  const copy = FEES[locale];
  const money = (amount: number) =>
    `${amount.toLocaleString(locale === "en" ? "en-US" : "fr-FR").replace(/[\s,]/g, " ")} F`;

  return (
    <section id="frais" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {copy.title.before}
          <u>{copy.title.accent}</u>
        </WaveHeading>
        <p className="section-sub">{copy.sub}</p>
      </div>

      <div className="fees-grid">
        {FEE_PLANS.map((plan, index) => {
          const commission = Math.round((SALE_AMOUNT * plan.rate) / 100);
          const net = SALE_AMOUNT - commission;
          const best = plan.rate === 5;

          return (
            <article key={plan.name} className={`fee-card${best ? " -best" : ""}`}>
              <div className="fee-plan">
                <strong>{plan.name}</strong>
                <span>{copy.planNotes[index]}</span>
              </div>

              <div className="fee-lines">
                <p className="fee-line">
                  {copy.sale} <b>{money(SALE_AMOUNT)}</b>
                </p>
                <p className="fee-line -minus">
                  {copy.commission} {plan.rate} % <b>− {money(commission)}</b>
                </p>
              </div>

              <p className="fee-net">
                <span>{copy.youReceive}</span>
                <strong>{money(net)}</strong>
              </p>
            </article>
          );
        })}
      </div>

      {/* Ce qui n'est pas facturé est aussi vérifiable qu'un montant, et souvent
          plus convaincant : c'est là que se cachent les frais des autres. */}
      <div className="fees-not-charged">
        {copy.notCharged.map((item) => (
          <div key={item.label} className="fee-free">
            <CheckIcon />
            <span>
              <b>{item.label} : 0 F</b>
              <span>{item.why}</span>
            </span>
          </div>
        ))}
      </div>

      <p className="fees-pending">{copy.pending}</p>
    </section>
  );
}
