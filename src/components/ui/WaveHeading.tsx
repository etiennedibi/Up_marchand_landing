"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Titre portant le souligné en vague dorée.
 *
 * La vague n'avance qu'une fois le titre entré dans l'écran, et elle n'est
 * jamais rejouée : une animation en boucle qui tourne hors champ ne sert à
 * personne et coûte du temps de calcul sur les appareils modestes.
 *
 * Le segment à souligner se passe en `<u>` dans les enfants — c'est le crochet
 * que cible le CSS, et il reste une balise sémantique acceptable pour un mot
 * mis en avant.
 */
export function WaveHeading({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
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
    <h2 ref={heading} className={cn("underline-wave", className)}>
      {children}
    </h2>
  );
}
