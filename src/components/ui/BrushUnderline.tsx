import { cn } from "@/lib/cn";

/**
 * Souligné au pinceau doré (DA §5, S1).
 * Le tracé se dessine une fois au chargement ; sous `prefers-reduced-motion`,
 * l'animation est neutralisée globalement et le trait s'affiche d'emblée.
 */
export function BrushUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 22"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("absolute -bottom-[0.26em] -left-[2%] h-[0.3em] w-[104%] overflow-visible text-gold", className)}
    >
      <path
        d="M8 15C70 4 165 3 232 8c36 3 64 7 81 4"
        fill="none"
        stroke="currentColor"
        strokeWidth={7}
        strokeLinecap="round"
        pathLength={1}
        className="animate-brush [stroke-dasharray:1] [stroke-dashoffset:1]"
      />
    </svg>
  );
}
