"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { CATEGORIES, CHANNELS, CITIES, WAITLIST_COPY } from "@/content/waitlist";
import { track } from "@/lib/analytics";

/**
 * Formulaire de liste d'attente marchands.
 *
 * Mise en page reprise de la page de contact de MindMarket : fond plein sur
 * toute la hauteur, colonne unique centrée, et surtout des groupes de champs
 * séparés par des filets — les questions de qualification d'abord, les
 * coordonnées en dernier. On demande d'abord ce qui engage peu.
 *
 * Le formulaire ne s'adresse qu'aux marchands : pas de bascule d'audience, pas
 * de question sur le profil. Chaque question restante sert à qualifier le lead
 * ou à préparer l'accompagnement (CDC S11).
 */
type Errors = Partial<
  Record<"prenom" | "telephone" | "email" | "ville" | "categorie" | "consent", string>
>;

const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const RE_TEL = /^\+?[0-9\s().-]{8,20}$/;

export function WaitlistForm() {
  const [categorie, setCategorie] = useState<string | null>(null);
  const [canal, setCanal] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [started, setStarted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Pot de miel : rempli, c'est un robot. On fait semblant d'accepter.
    if (data.get("website")) return;

    const prenom = String(data.get("prenom") ?? "").trim();
    const telephone = String(data.get("telephone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const ville = String(data.get("ville") ?? "");
    const consent = data.get("consent") === "on";

    const found: Errors = {};
    if (prenom.length < 2) found.prenom = "Indiquez votre prénom.";
    if (!RE_TEL.test(telephone)) found.telephone = "Numéro invalide, indicatif pays compris.";
    if (!RE_EMAIL.test(email)) found.email = "Adresse email invalide.";
    if (!ville) found.ville = "Choisissez votre ville.";
    if (!categorie) found.categorie = "Choisissez une catégorie.";
    if (!consent) found.consent = "Votre accord est nécessaire pour vous écrire.";

    setErrors(found);

    if (Object.keys(found).length > 0) {
      track("form_error", { champ: Object.keys(found)[0] });
      return;
    }

    /* À BRANCHER : POST vers l'API du CRM (Brevo), double opt-in.
       Aucune donnée personnelle ne part vers l'analytics — ville et catégorie
       seulement, comme le prévoit le CDC §6.4. */
    console.info("[UPMARCHAND] à envoyer au CRM :", {
      persona: "marchand",
      prenom,
      telephone,
      email,
      ville,
      categorie,
      canal: canal ?? undefined,
      utm: Object.fromEntries(new URLSearchParams(window.location.search)),
    });

    track("form_completed", { persona: "marchand", ville, categorie: categorie ?? undefined });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-4">
        <span className="flex size-14 items-center justify-center rounded-full bg-teal-soft text-brand">
          <CheckIcon className="size-7" />
        </span>
        <p className="heading-lg mt-8 text-[clamp(1.75rem,1.4rem+1.6vw,2.5rem)]">
          Votre place est réservée.
        </p>
        <p className="mt-5 max-w-[46ch] text-body">
          Un email de confirmation vient de partir. Nous vous écrivons sur WhatsApp dans les
          prochains jours pour préparer votre boutique ensemble.
        </p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={() => {
        if (started) return;
        setStarted(true);
        track("form_started");
      }}
    >
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {/* 1 — Ce que vend le marchand */}
      <fieldset className="form-group">
        <legend className="form-legend">Que vendez-vous&nbsp;?</legend>
        <span className="form-hint">Pour vous orienter vers les bons outils dès l&apos;ouverture.</span>
        <div className="form-choices">
          {CATEGORIES.map((value) => (
            <label key={value} className="form-choice">
              <input
                type="radio"
                name="categorie"
                value={value}
                checked={categorie === value}
                onChange={() => setCategorie(value)}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
        {errors.categorie && <p className="form-error mt-3">{errors.categorie}</p>}
      </fieldset>

      {/* 2 — Canal actuel : la question de qualification du CDC */}
      <fieldset className="form-group">
        <legend className="form-legend">Où vendez-vous aujourd&apos;hui&nbsp;?</legend>
        <div className="form-choices">
          {CHANNELS.map((value) => (
            <label key={value} className="form-choice">
              <input
                type="radio"
                name="canal"
                value={value}
                checked={canal === value}
                onChange={() => setCanal(value)}
              />
              <span>{value}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* 3 — Coordonnées */}
      <div className="form-group">
        <span className="form-legend">Pour vous recontacter</span>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="form-field" data-invalid={Boolean(errors.prenom)}>
            <label htmlFor="prenom">Prénom</label>
            <input id="prenom" name="prenom" type="text" autoComplete="given-name" placeholder="Aïcha" />
            {errors.prenom && <p className="form-error">{errors.prenom}</p>}
          </div>

          <div className="form-field" data-invalid={Boolean(errors.telephone)}>
            <label htmlFor="telephone">Numéro WhatsApp</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+225 07 12 34 56 78"
            />
            {errors.telephone && <p className="form-error">{errors.telephone}</p>}
          </div>

          <div className="form-field" data-invalid={Boolean(errors.email)}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="aicha@exemple.com"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-field" data-invalid={Boolean(errors.ville)}>
            <label htmlFor="ville">Ville</label>
            <select id="ville" name="ville" defaultValue="">
              <option value="">Sélectionner</option>
              {CITIES.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
            {errors.ville && <p className="form-error">{errors.ville}</p>}
          </div>
        </div>
      </div>

      {/* 4 — Consentement et envoi */}
      <div className="form-group">
        <label className="form-consent">
          <input type="checkbox" name="consent" />
          <span>
            J&apos;accepte de recevoir des informations sur le lancement d&apos;UPMARCHAND. Je peux me
            désabonner en un clic, à tout moment.
          </span>
        </label>
        {errors.consent && <p className="form-error mt-2">{errors.consent}</p>}

        <button type="submit" className="form-submit mt-6">
          <span>{WAITLIST_COPY.submit}</span>
          <ArrowRightIcon className="size-5" />
        </button>

        <p className="mt-4 text-center text-[0.82rem] tracking-[-0.02em] text-muted">
          Vos données ne sont jamais revendues.
        </p>
      </div>
    </form>
  );
}
