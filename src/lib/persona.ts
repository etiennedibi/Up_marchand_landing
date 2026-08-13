"use client";

import { useSyncExternalStore } from "react";
import { track } from "@/lib/analytics";

/**
 * Bascule d'audience marchand / acheteur (DA §4).
 *
 * Elle est *persistante* : elle pilote le hero, la section problème, la section
 * solution, les étapes et le formulaire. Son état est reflété dans l'URL
 * (`?p=acheteur`) pour permettre des campagnes ciblées — un lien Meta Ads pour
 * acheteurs arrive directement sur la bonne version de la page.
 *
 * L'état vit dans un petit store externe plutôt que dans un contexte React :
 * l'URL est une source de vérité extérieure à React, et `useSyncExternalStore`
 * est fait pour ça. Le rendu serveur part toujours du marchand (audience
 * prioritaire du CDC), la page reste donc statique et servie par le CDN ;
 * React réaligne l'affichage sur l'URL juste après l'hydratation, sans
 * divergence de rendu.
 */
export type Persona = "marchand" | "acheteur";

const DEFAULT_PERSONA: Persona = "marchand";

let current: Persona = DEFAULT_PERSONA;
let readUrl = false;
const listeners = new Set<() => void>();

function isPersona(value: string | null): value is Persona {
  return value === "marchand" || value === "acheteur";
}

/** Lecture unique de l'URL, au premier accès côté navigateur. */
function ensureInitialised() {
  if (readUrl || typeof window === "undefined") return;
  readUrl = true;

  const fromUrl = new URLSearchParams(window.location.search).get("p");
  if (isPersona(fromUrl)) current = fromUrl;
}

function subscribe(listener: () => void) {
  ensureInitialised();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Persona {
  ensureInitialised();
  return current;
}

function getServerSnapshot(): Persona {
  return DEFAULT_PERSONA;
}

export function setPersona(next: Persona) {
  if (next === current) return;
  current = next;

  const url = new URL(window.location.href);
  url.searchParams.set("p", next);
  window.history.replaceState(null, "", url);
  document.documentElement.dataset.persona = next;

  track("toggle_persona", { persona: next });
  listeners.forEach((listener) => listener());
}

export function usePersona() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
