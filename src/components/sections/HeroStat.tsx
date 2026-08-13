"use client";

import { useEffect, useRef } from "react";

/**
 * Carte de comptage des places de fondateur.
 *
 * Le nombre monte de 0 jusqu'à sa valeur pendant que la jauge se remplit, d'un
 * même mouvement et sur la même durée : c'est la même information dite deux
 * fois, elle doit arriver d'un seul geste (DA §4).
 *
 * Le rendu serveur contient déjà les valeurs finales. L'animation ne fait que
 * les rejouer depuis zéro à l'arrivée — sans JavaScript, ou sous mouvement
 * réduit, la carte reste juste et complète.
 *
 * L'animation écrit directement dans le DOM : aucun rendu React à 60 images par
 * seconde, ce qui compte sur les Android d'entrée de gamme visés par le CDC.
 */
export function HeroStat({ taken, total }: { taken: number; total: number }) {
  const ratio = Math.round((taken / total) * 100);
  const number = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const DURATION = 1400;
    const DELAY = 450; // le temps que la carte finisse d'arriver
    let frame = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start - DELAY;

      if (elapsed < 0) {
        frame = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(1, elapsed / DURATION);
      // Décélération franche : le compteur part vite et se pose sur sa valeur.
      const eased = 1 - Math.pow(1 - progress, 3);

      if (number.current) number.current.textContent = String(Math.round(taken * eased));
      if (bar.current) bar.current.style.width = `${ratio * eased}%`;

      if (progress < 1) frame = requestAnimationFrame(step);
    };

    if (number.current) number.current.textContent = "0";
    if (bar.current) bar.current.style.width = "0%";
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [taken, ratio]);

  return (
    <div className="hero-card">
      <p className="hero-stat">
        <span ref={number}>{taken}</span>
        <small>/ {total} places</small>
      </p>
      <div className="hero-gauge">
        <span ref={bar} style={{ width: `${ratio}%` }} />
      </div>
      <p className="hero-gauge-legend">
        <span>{total - taken} places restantes</span>
        <span>{ratio} %</span>
      </p>
    </div>
  );
}
