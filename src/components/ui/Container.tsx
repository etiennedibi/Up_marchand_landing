import { cn } from "@/lib/cn";

/**
 * Colonne de contenu. Largeur maximale 1180 px, gouttières fluides.
 * Au-delà de 1440 px la page reste centrée (CDC §6.5).
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[73.75rem] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}
