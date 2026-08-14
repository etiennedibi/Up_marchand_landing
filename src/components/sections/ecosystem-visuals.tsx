import { CheckIcon } from "@/components/ui/icons";
import { ECOSYSTEM_PAGE } from "@/content/ecosystem-page";
import type { Locale } from "@/lib/i18n";

/**
 * Démonstrations de la page écosystème.
 *
 * Une par brique, dessinée en CSS et en SVG. Elles montrent le mécanisme
 * plutôt que de l'illustrer : un séquestre qui se libère, une tournée qui
 * progresse, une adresse qui se construit sans nom de rue.
 *
 * Décoratives — le texte de chaque rangée dit déjà tout.
 */
type Copy = (typeof ECOSYSTEM_PAGE)[Locale]["visuals"];

/** UPPAY — les trois états du séquestre, du paiement au versement. */
export function VisualUppay({ t }: { t: Copy }) {
  const steps = [
    { label: t.captured, value: "25 000 F", done: true },
    { label: t.inEscrow, value: t.pending, done: true },
    { label: t.released, value: "22 500 F", done: false },
  ];

  return (
    <div className="w-full max-w-[22rem] p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-[0.72rem] text-muted">{t.orderRef}</span>
        <span className="rounded-full bg-gold-soft px-2.5 py-1 text-[0.68rem] font-medium text-gold-ink">
          {t.held}
        </span>
      </div>

      <div className="mt-5 grid gap-3">
        {steps.map((step) => (
          <div key={step.label} className="flex items-center gap-3">
            <span
              className={`grid size-6 shrink-0 place-items-center rounded-full ${
                step.done ? "bg-teal text-white" : "border border-line text-line"
              }`}
            >
              {step.done && <CheckIcon className="size-3" />}
            </span>
            <span className="min-w-0 flex-1 text-[0.85rem] text-ink">{step.label}</span>
            <span
              className={`shrink-0 text-[0.82rem] tabular-nums ${
                step.done ? "text-muted" : "font-medium text-teal"
              }`}
            >
              {step.value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-5 border-t border-line-soft pt-4 text-[0.75rem] text-muted">
        {t.payoutNote}
      </p>
    </div>
  );
}

/** UPJUNOO PRO — la tournée et ses preuves. */
export function VisualUpjunooPro({ t }: { t: Copy }) {
  const events = [
    { time: "09:15", label: t.pickedUp, done: true },
    { time: "10:30", label: t.enRoute, done: true },
    { time: "—", label: t.handed, done: false },
  ];

  return (
    <div className="w-full max-w-[22rem] p-6" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="text-[0.72rem] text-muted">{t.parcelRef}</span>
        <span className="rounded-full bg-teal-soft px-2.5 py-1 text-[0.68rem] font-medium text-teal">
          {t.onTheWay}
        </span>
      </div>

      <ol className="relative mt-5 grid gap-4 pl-6">
        <span className="absolute top-2 bottom-2 left-[0.32rem] w-px bg-line" aria-hidden="true" />
        {events.map((event) => (
          <li key={event.label} className="relative">
            <span
              className={`absolute top-1 -left-6 size-[0.65rem] rounded-full ${
                event.done ? "bg-teal" : "border border-line bg-white"
              }`}
            />
            <span className="block text-[0.85rem] text-ink">{event.label}</span>
            <span className="block text-[0.72rem] text-muted tabular-nums">{event.time}</span>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex items-center gap-3 border-t border-line-soft pt-4">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-alt font-mono text-[0.7rem] text-teal">
          4821
        </span>
        <span className="text-[0.75rem] text-muted">{t.codeNote}</span>
      </div>
    </div>
  );
}

/** UPMAP — un point vivant sur une trame urbaine sans nom de rue. */
export function VisualUpmap({ t }: { t: Copy }) {
  return (
    <div className="relative size-full" aria-hidden="true">
      <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className="size-full">
        <rect width="400" height="320" fill="#ECEFEC" />
        <g fill="#F6F8F6">
          <rect x="16" y="18" width="72" height="58" rx="4" />
          <rect x="16" y="92" width="72" height="76" rx="4" />
          <rect x="104" y="18" width="90" height="58" rx="4" />
          <rect x="104" y="92" width="90" height="76" rx="4" />
          <rect x="210" y="18" width="80" height="58" rx="4" />
          <rect x="306" y="18" width="78" height="58" rx="4" />
          <rect x="306" y="92" width="78" height="76" rx="4" />
          <rect x="16" y="200" width="176" height="104" rx="4" />
          <rect x="306" y="200" width="78" height="104" rx="4" />
        </g>
        <g fill="#DCEBDC">
          <rect x="210" y="92" width="80" height="76" rx="5" />
          <rect x="210" y="200" width="80" height="104" rx="5" />
        </g>
        <g stroke="#FFFFFF" strokeLinecap="round">
          <path strokeWidth="8" d="M0 184h400M298 0v320" />
          <path strokeWidth="5" d="M0 84h400M96 0v320M202 0v320" />
        </g>

        {/* Le point vivant, et son onde. */}
        <g transform="translate(150 236)">
          <circle className="pin-ring" r="10" fill="var(--color-teal)" />
          <circle r="7" fill="var(--color-teal)" stroke="#fff" strokeWidth="2.5" />
        </g>
        <g transform="translate(268 132)">
          <circle r="5" fill="var(--color-gold)" stroke="#fff" strokeWidth="2" />
        </g>
      </svg>

      {/* L'adresse telle qu'un livreur la reçoit : des repères, pas une voie. */}
      <div className="absolute right-4 bottom-4 left-4 rounded-xl bg-white/95 p-3 shadow-[var(--shadow-mock)] backdrop-blur-sm">
        <p className="font-mono text-[0.62rem] tracking-[0.12em] text-brand uppercase">
          {t.addressLabel}
        </p>
        <p className="mt-1 text-[0.85rem] leading-snug text-ink">{t.address}</p>
        <p className="mt-1 text-[0.72rem] text-muted">{t.zone}</p>
      </div>
    </div>
  );
}
