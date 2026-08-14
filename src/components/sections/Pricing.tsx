"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { PLAN_PRICES, PRICING } from "@/content/pricing";
import { track } from "@/lib/analytics";
import { localePath, type Locale } from "@/lib/i18n";
import { ROUTES } from "@/lib/site";

/**
 * S8 — Tarifs.
 *
 * Trois plans, celui du milieu surélevé avec un liseré doré. La bascule
 * mensuel / annuel recalcule les montants en fondu de 240 ms (DA §5).
 *
 * Le plan retenu se distingue par un liseré et une élévation, pas par un fond
 * coloré : il doit ressortir sans crier, et rester lisible.
 */
const NBSP = " ";

export function Pricing({ locale }: { locale: Locale }) {
  const copy = PRICING[locale];
  const [yearly, setYearly] = useState(false);
  // Le fondu se joue pendant que la valeur change : sans lui, les montants
  // sautent d'un chiffre à l'autre et la bascule paraît cassée.
  const [swapping, setSwapping] = useState(false);

  const formatPrice = (amount: number) =>
    amount.toLocaleString(locale === "en" ? "en-US" : "fr-FR").replace(/[\s,]/g, NBSP);

  const changeBilling = (next: boolean) => {
    if (next === yearly) return;
    setSwapping(true);
    setYearly(next);
    window.setTimeout(() => setSwapping(false), 240);
    track("pricing_period_changed", { period: next ? "annuel" : "mensuel" });
  };

  return (
    <section id="tarifs" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {copy.title.before}
          <u>{copy.title.accent}</u>
        </WaveHeading>
        <p className="section-sub">{copy.sub}</p>

        <div className="billing-switch mt-8" role="group" aria-label={copy.eyebrow}>
          <button type="button" aria-pressed={!yearly} onClick={() => changeBilling(false)}>
            {copy.billing.monthly}
          </button>
          <button type="button" aria-pressed={yearly} onClick={() => changeBilling(true)}>
            {copy.billing.yearly}
            <span className="billing-save">{copy.billing.save}</span>
          </button>
        </div>
      </div>

      <div className="plans">
        {copy.plans.map((plan) => {
          const prices = PLAN_PRICES[plan.id];
          const amount = yearly ? prices.yearly : prices.monthly;
          const featured = plan.id === "pro";

          return (
            <article key={plan.id} className={`plan${featured ? " -featured" : ""}`}>
              {featured && <span className="plan-ribbon">{copy.ribbon}</span>}

              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-pitch">{plan.pitch}</p>

              <p className={`plan-price${swapping ? " -swapping" : ""}`}>
                {amount === 0 ? (
                  copy.free
                ) : (
                  <>
                    {formatPrice(amount)}
                    {NBSP}F
                    <small>
                      {" "}
                      / {yearly ? copy.billing.perYear : copy.billing.perMonth}
                    </small>
                  </>
                )}
              </p>

              <span className="plan-commission">{copy.commissionLabel(prices.commission)}</span>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={localePath(locale, ROUTES.waitlist)}
                onClick={() => track("pricing_cta_clicked", { plan: plan.id })}
                className={`plan-cta ${featured ? "-solid" : "-outline"}`}
              >
                {plan.cta}
              </Link>
            </article>
          );
        })}
      </div>

      <p className="section-sub mt-10 text-center">{copy.note}</p>
    </section>
  );
}
