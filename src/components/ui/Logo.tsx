import { cn } from "@/lib/cn";

/**
 * Logotype UPMARCHAND — marque + mot.
 *
 * Style repris de MindMarket, dont j'ai relevé la construction dans leur SVG :
 * boîte de 36 × 30, tracé sans remplissage, épaisseur 3,336 — soit 9 % de la
 * largeur, c'est très épais —, extrémités et jonctions arrondies, et un aplat
 * en pastille pour l'accent. Le tout dans une seule couleur de marque, à côté
 * d'un mot en encre.
 *
 * Le dessin, lui, est le nôtre : un cabas dont les anses sont deux pastilles.
 * Leur marque est un monogramme « m » en ruban continu — c'est leur marque
 * déposée, pas une forme à reprendre. Ce qui se reprend, c'est le style.
 *
 * À BRANCHER : le SVG officiel dès sa livraison. Il suffit de remplacer le
 * contenu de LogoMark, les proportions de la navbar ne bougent pas.
 */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    // Écartement de 16 px entre la marque et le mot, comme la référence.
    <span className={cn("flex items-center gap-4", className)}>
      <LogoMark className="shrink-0" />
      <span className={cn("nav-wordmark font-sans", tone === "dark" ? "text-ink" : "text-white")}>
        UPMARCHAND
      </span>
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 30"
      // 34 px de large, hauteur déduite du rapport 36/30 : leur cadrage.
      className={cn("h-auto w-[2.125rem]", className)}
      role="img"
      aria-label="UPMARCHAND"
      fill="none"
    >
      {/* Anses — les deux aplats qui donnent le rythme de la marque. */}
      <circle cx="13" cy="4.2" r="2.68" fill="var(--color-brand)" />
      <circle cx="23" cy="4.2" r="2.68" fill="var(--color-brand)" />

      {/* Cabas — tracé seul, jamais rempli. */}
      <path
        d="M5.5 14a3.5 3.5 0 0 1 3.5-3.5h18a3.5 3.5 0 0 1 3.5 3.5v7.5a5.5 5.5 0 0 1-5.5 5.5H11a5.5 5.5 0 0 1-5.5-5.5z"
        stroke="var(--color-brand)"
        strokeWidth="3.336"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
