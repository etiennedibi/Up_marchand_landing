"use client";

import { useEffect, useRef } from "react";

/**
 * Séquence cartographique du hero (DA §6, référence UPMAP).
 *
 * Principe : la couverture se prouve, elle ne s'écrit pas. Le scroll enchaîne
 * trois vues — globe, Afrique de l'Ouest, maille urbaine d'Abidjan — avec un
 * compteur de coordonnées et de zoom en surimpression.
 *
 * L'animation écrit directement dans le DOM depuis un rAF : aucun rendu React
 * n'est déclenché pendant le défilement, ce qui garde la séquence fluide sur un
 * Android d'entrée de gamme — le terrain réel du persona Aïcha.
 *
 * ⚠ SUBSTITUT DE DÉVELOPPEMENT. La version finale peint 40 images WebP de
 * 1280 px pré-rendues en studio (~160 Ko) dans un <canvas>, la première étant
 * préchargée en fetchpriority="high" et servant de LCP. Ce composant en
 * reproduit la grammaire sans dépendance ni image, pour valider le cadrage et
 * le rythme avant le rendu. Aucune bibliothèque de cartographie n'est chargée :
 * Mapbox GL pèse à lui seul plus de 200 Ko compressé (DA §7).
 */
export function HeroMap() {
  const root = useRef<HTMLDivElement>(null);
  const globe = useRef<SVGGElement>(null);
  const region = useRef<SVGGElement>(null);
  const city = useRef<SVGGElement>(null);
  const lat = useRef<HTMLSpanElement>(null);
  const lon = useRef<HTMLSpanElement>(null);
  const zoom = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const paint = (progress: number) => {
      // Fondu enchaîné des trois vues, avec recouvrement : à aucun moment
      // l'écran n'est vide entre deux échelles.
      if (globe.current) {
        globe.current.style.opacity = String(clamp(1 - progress / 0.42));
        globe.current.style.transform = `scale(${1 + progress * 0.5})`;
      }
      if (region.current) {
        const value = progress < 0.42 ? progress / 0.42 : 1 - (progress - 0.62) / 0.3;
        region.current.style.opacity = String(clamp(value));
        region.current.style.transform = `scale(${0.86 + progress * 0.5})`;
      }
      if (city.current) {
        city.current.style.opacity = String(clamp((progress - 0.6) / 0.34));
      }

      if (lat.current) lat.current.textContent = (5.3599 * progress).toFixed(4);
      if (lon.current) lon.current.textContent = (-4.0083 * progress).toFixed(4);
      if (zoom.current) zoom.current.textContent = (3 + progress * 11.1).toFixed(1);
      if (label.current) {
        label.current.textContent =
          progress < 0.4 ? "Vue globale" : progress < 0.68 ? "Afrique de l'Ouest" : "Abidjan — Cocody";
      }
    };

    // Repli : sous mouvement réduit, seule la vue finale s'affiche, en statique.
    // La page reste complète et compréhensible (DA §6).
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(1);
      return;
    }

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const height = root.current?.closest("section")?.offsetHeight ?? window.innerHeight;
        paint(clamp(window.scrollY / (height * 0.85)));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className="relative mx-auto aspect-square w-full max-w-[30rem]">
      <svg viewBox="0 0 400 400" className="size-full" role="presentation">
        <defs>
          <radialGradient id="upm-globe" cx="38%" cy="32%">
            <stop offset="0" stopColor="#0E9AA4" />
            <stop offset="1" stopColor="#02383D" />
          </radialGradient>
          <clipPath id="upm-clip">
            <circle cx="200" cy="200" r="150" />
          </clipPath>
        </defs>

        {/* Vue 1 — globe */}
        <g ref={globe} style={{ transformOrigin: "center" }}>
          <circle cx="200" cy="200" r="150" fill="url(#upm-globe)" opacity="0.55" />
          <g clipPath="url(#upm-clip)" fill="none" stroke="#5AD6DE" strokeWidth="1" opacity="0.45">
            <ellipse cx="200" cy="200" rx="150" ry="52" />
            <ellipse cx="200" cy="200" rx="150" ry="105" />
            <ellipse cx="200" cy="200" rx="52" ry="150" />
            <ellipse cx="200" cy="200" rx="105" ry="150" />
            <path d="M50 200h300M200 50v300" />
          </g>
          <circle cx="200" cy="200" r="150" fill="none" stroke="#0E9AA4" strokeWidth="1.5" opacity="0.8" />
        </g>

        {/* Vue 2 — zone de couverture */}
        <g ref={region} opacity="0" style={{ transformOrigin: "center" }}>
          <path
            d="M120 120 L235 108 L288 150 L272 214 L226 250 L186 300 L140 286 L112 226 Z"
            fill="rgb(0 109 117 / 0.35)"
            stroke="#0E9AA4"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M120 120 L235 108 L288 150"
            fill="none"
            stroke="#F2B705"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          <g fill="#5AD6DE">
            <circle cx="150" cy="170" r="3.5" />
            <circle cx="205" cy="150" r="3.5" />
            <circle cx="245" cy="200" r="3.5" />
            <circle cx="180" cy="240" r="3.5" />
          </g>
          <g fontSize="10" fill="#7FA6A8" style={{ fontFamily: "var(--font-mono)" }}>
            <text x="158" y="168">Dakar</text>
            <text x="213" y="148">Bamako</text>
            <text x="188" y="238">Abidjan</text>
            <text x="253" y="198">Douala</text>
          </g>
        </g>

        {/* Vue 3 — maille urbaine et trajet de livraison */}
        <g ref={city} opacity="0">
          <g stroke="#17454A" strokeWidth="1.5">
            <path d="M40 90h320M40 160h320M40 230h320M40 300h320M100 40v320M180 40v320M260 40v320M330 40v320" />
          </g>
          <rect x="100" y="160" width="80" height="70" fill="rgb(0 109 117 / 0.25)" />
          <rect x="260" y="230" width="70" height="70" fill="rgb(242 183 5 / 0.14)" />
          <path
            d="M110 300 L180 300 L180 230 L260 230 L260 165"
            fill="none"
            stroke="#F2B705"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 7"
          />
          <circle cx="110" cy="300" r="7" fill="#0E9AA4" />
          <circle cx="260" cy="165" r="9" fill="#F2B705" />
          <g fontSize="10" fill="#7FA6A8" style={{ fontFamily: "var(--font-mono)" }}>
            <text x="86" y="322">Boutique</text>
            <text x="236" y="152">Client</text>
          </g>
        </g>
      </svg>

      {/* Compteur en surimpression — repris d'UPMAP */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 flex flex-wrap gap-1.5 font-mono text-[0.66rem] tracking-[0.08em] text-[#7FA6A8]"
      >
        <span className="rounded-full border border-[#17454A] bg-ink/70 px-2.5 py-1 tabular-nums">
          lat <span ref={lat} className="text-gold">0.0000</span>
        </span>
        <span className="rounded-full border border-[#17454A] bg-ink/70 px-2.5 py-1 tabular-nums">
          lon <span ref={lon} className="text-gold">0.0000</span>
        </span>
        <span className="rounded-full border border-[#17454A] bg-ink/70 px-2.5 py-1 tabular-nums">
          zoom <span ref={zoom} className="text-gold">3.0</span>
        </span>
        <span ref={label} className="rounded-full border border-[#17454A] bg-ink/70 px-2.5 py-1">
          Vue globale
        </span>
      </div>
    </div>
  );
}

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}
