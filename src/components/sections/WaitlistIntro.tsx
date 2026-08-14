"use client";

import { useEffect, useRef } from "react";
import { CheckIcon } from "@/components/ui/icons";
import { WAITLIST } from "@/content/waitlist";
import type { Locale } from "@/lib/i18n";

/**
 * Chapeau de la page de liste d'attente marchands.
 *
 * Titre en .heading-lg — 44 à 76 px, Inter 500, serré à −0,06 em, interligne
 * 0,95 — avec un souligné en vague animée sous le mot qui porte l'action.
 * L'animation ne démarre qu'à l'entrée du titre dans l'écran, et une seule
 * fois : elle ne tourne jamais dans le vide en bas de page.
 *
 * Le chapô est remplacé par une liste à coches. Trois engagements, un par
 * ligne — ça se scanne avant de remplir quoi que ce soit.
 */
export function WaitlistIntro({ locale }: { locale: Locale }) {
  const copy = WAITLIST[locale];
  const heading = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = heading.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.inview = "true";
        observer.disconnect();
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="mb-12">
      <h1 ref={heading} className="heading-lg underline-wave">
        {copy.title.before}
        <u>{copy.title.accent}</u>
      </h1>

      <ul className="form-checklist mt-12">
        {copy.points.map((point) => (
          <li key={point}>
            <CheckIcon />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </header>
  );
}
