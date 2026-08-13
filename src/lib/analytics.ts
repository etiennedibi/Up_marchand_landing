/**
 * Événements analytics (CDC §6.4).
 * Aucune donnée personnelle ne transite ici : ville et catégorie sont admises,
 * prénom, email et téléphone ne le sont jamais.
 *
 * À BRANCHER : Plausible ou PostHog + Meta Pixel. En attendant, les événements
 * sont poussés dans window.dataLayer, ce qui permet de les vérifier en recette.
 */
type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    plausible?: (event: string, options?: { props: EventProps }) => void;
  }
}

export function track(event: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...props });
  window.plausible?.(event, { props });

  if (process.env.NODE_ENV === "development") {
    console.debug(`[analytics] ${event}`, props);
  }
}
