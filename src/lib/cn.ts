/** Concaténation de classes, sans dépendance externe (budget JS, DA §7). */
export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
