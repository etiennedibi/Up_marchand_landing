import type { Translated } from "@/lib/i18n";

/**
 * Section — Portée géographique.
 *
 * « Dans quelles villes livrez-vous ? » est la question qui bloque une
 * inscription, et elle était enterrée en dernière position de la FAQ.
 *
 * ⚠ À CONFIRMER avant mise en ligne : la liste des villes ouvertes au
 * lancement engage l'exploitation. Une ville affichée ici est une ville où un
 * colis doit pouvoir partir le premier jour (DA §8).
 */
export type CityStatus = "ouvert" | "bientot";

type CoverageCopy = {
  eyebrow: string;
  title: { before: string; accent: string };
  sub: string;
  countries: { name: string; cities: { name: string; status: CityStatus }[] }[];
  legend: Record<CityStatus, string>;
  note: string;
};

const CITIES: { name: string; cities: { name: string; status: CityStatus }[] }[] = [
  {
    name: "Côte d'Ivoire",
    cities: [
      { name: "Abidjan", status: "ouvert" },
      { name: "Bouaké", status: "ouvert" },
      { name: "Yamoussoukro", status: "bientot" },
      { name: "San-Pédro", status: "bientot" },
    ],
  },
  {
    name: "Sénégal",
    cities: [
      { name: "Dakar", status: "ouvert" },
      { name: "Thiès", status: "ouvert" },
      { name: "Saint-Louis", status: "bientot" },
    ],
  },
  {
    name: "Cameroun",
    cities: [
      { name: "Douala", status: "ouvert" },
      { name: "Yaoundé", status: "ouvert" },
      { name: "Bafoussam", status: "bientot" },
    ],
  },
];

export const COVERAGE: Translated<CoverageCopy> = {
  fr: {
    eyebrow: "Couverture",
    title: { before: "Où vos colis ", accent: "partent déjà." },
    sub: "La question qui bloque une inscription mérite mieux qu'une ligne en bas de FAQ.",
    countries: CITIES,
    legend: { ouvert: "Ouvert au lancement", bientot: "Dans les mois qui suivent" },
    note: "Les zones péri-urbaines sont desservies sous 72 heures. Inscrivez-vous : vous serez prévenu le jour où votre ville s'ouvre.",
  },
  en: {
    eyebrow: "Coverage",
    title: { before: "Where your parcels ", accent: "already go." },
    sub: "The question that stops a sign-up deserves better than a line at the bottom of an FAQ.",
    // Les noms de villes ne se traduisent pas ; seuls deux pays changent de graphie.
    countries: CITIES.map((country) => ({
      ...country,
      name: { Sénégal: "Senegal", Cameroun: "Cameroon" }[country.name] ?? country.name,
    })),
    legend: { ouvert: "Open at launch", bientot: "In the months after" },
    note: "Peri-urban areas are served within 72 hours. Sign up and we'll tell you the day your city opens.",
  },
};
