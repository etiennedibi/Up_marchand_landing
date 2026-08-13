import Image from "next/image";
import heroImage from "@/assets/hero.jpg";

/**
 * Photo de fond du hero.
 *
 * Import statique plutôt que chemin dans /public : Next en déduit les
 * dimensions — donc aucun décalage de mise en page au chargement (CLS < 0,1,
 * CDC §6.2) — génère le flou de transition et sert le fichier sous un nom
 * empreinté, cacheable indéfiniment.
 *
 * `priority` est indispensable : cette image est le LCP de la page, et la cible
 * du CDC est un LCP sous 2,5 s en 3G. Next la convertit en WebP/AVIF et la
 * décline en plusieurs largeurs ; `sizes="100vw"` lui dit que l'image occupe
 * toute la largeur de l'écran, sans quoi elle servirait un fichier trop lourd
 * sur mobile.
 *
 * `object-cover` avec un point de fuite légèrement haut : sur un format
 * paysage recadré en plein écran, c'est le haut du sujet qu'il faut préserver,
 * le bas étant de toute façon couvert par le voile et le titre.
 */
export function HeroMedia() {
  return (
    <div className="hero-media bg-ink">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-[50%_35%]"
      />
    </div>
  );
}
