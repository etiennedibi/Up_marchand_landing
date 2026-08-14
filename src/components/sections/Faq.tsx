"use client";

import { useState } from "react";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { FAQ } from "@/content/faq";
import { track } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

/**
 * S12 — FAQ.
 *
 * Accordéon, une seule réponse ouverte à la fois (DA §5). Cliquer sur la
 * question ouverte la referme : rien n'oblige à laisser une réponse à l'écran.
 *
 * L'ouverture est faite en `grid-template-rows: 0fr → 1fr`, ce qui anime la
 * hauteur réelle du contenu sans avoir à la mesurer en JavaScript.
 */
export function Faq({ locale }: { locale: Locale }) {
  const copy = FAQ[locale];
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number, question: string) => {
    const next = open === index ? null : index;
    setOpen(next);
    if (next !== null) track("faq_opened", { question });
  };

  return (
    <section id="faq" className="section page-container scroll-mt-[var(--nav-safe)]">
      <div className="section-head">
        <p className="section-eyebrow">{copy.eyebrow}</p>
        <WaveHeading className="section-title -wave-sm">
          {copy.title.before}
          <u>{copy.title.accent}</u>
        </WaveHeading>
      </div>

      <div className="faq">
        {copy.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={item.q} className="faq-item" data-open={isOpen}>
              <h3>
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggle(index, item.q)}
                >
                  <span>{item.q}</span>
                  <span className="faq-marker" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>

              <div className="faq-answer" id={`faq-answer-${index}`} role="region">
                <div>
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
