import Image from "next/image";
import avatarCliente from "@/assets/photos/avatar-cliente.jpg";
import avatarMarchand from "@/assets/photos/avatar-marchand.jpg";
import avatarMarchande from "@/assets/photos/avatar-marchande.jpg";
import produitMarche from "@/assets/photos/produit-marche.jpg";
import { CheckIcon } from "@/components/ui/icons";
import { SOLUTION_VISUALS } from "@/content/solution";
import type { Locale } from "@/lib/i18n";

/**
 * Maquettes de la section solution.
 *
 * Toutes sont dessinées en CSS et en SVG — aucune image d'interface à
 * télécharger. Le budget du CDC §6.2 plafonne les images à 240 Ko au premier
 * écran ; seules les photographies de visages en consomment, et elles pèsent
 * moins de 10 Ko chacune.
 *
 * Elles occupent toute la hauteur restante de leur carte et affleurent son
 * bord : leur contenu est recadré, on voit le haut d'un écran et pas un écran
 * entier rétréci.
 *
 * Elles sont décoratives — le texte de la carte dit déjà tout — d'où
 * `aria-hidden` sur chacune.
 */
type Copy = (typeof SOLUTION_VISUALS)[Locale];

/** Avatar photographique : des visages réels plutôt que des initiales. */
function Avatar({ src, className = "size-6" }: { src: typeof avatarCliente; className?: string }) {
  return (
    <span className={`relative shrink-0 overflow-hidden rounded-full bg-alt ${className}`}>
      <Image src={src} alt="" fill sizes="32px" className="object-cover" />
    </span>
  );
}

/** Pastille d'initiales, quand la photo n'apporterait rien — un opérateur. */
function Badge({ initials }: { initials: string }) {
  return (
    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-[0.55rem] font-semibold text-[#3A2B00]">
      {initials}
    </span>
  );
}

function DayDivider({ label }: { label: string }) {
  return (
    <div className="my-2 flex items-center gap-2">
      <span className="h-px flex-1 bg-line-soft" />
      <span className="text-[0.55rem] tracking-[0.12em] text-muted uppercase">{label}</span>
      <span className="h-px flex-1 bg-line-soft" />
    </div>
  );
}

/* ── 1. Boutique : la conversation avec le client ─────────────────────── */

export function VisualWhatsapp({ t }: { t: Copy }) {
  return (
    <div className="bento-mock" aria-hidden="true">
      <div className="flex items-center gap-2">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-teal text-white">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 12a7.5 7.5 0 0 1-10.9 6.7L4 20l1.4-4.3A7.5 7.5 0 1 1 20 12Z" />
          </svg>
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[0.8rem] font-semibold text-ink">{t.chatTitle}</span>
          <span className="block truncate text-[0.6rem] text-muted">{t.chatSub}</span>
        </span>
        <span className="ml-auto flex items-center">
          <span className="mr-1 size-1.5 rounded-full bg-gold" />
          <Avatar src={avatarMarchande} className="size-5" />
          <Avatar src={avatarMarchand} className="-ml-1.5 size-5 ring-2 ring-white" />
        </span>
      </div>

      <DayDivider label={t.today} />

      <div className="flex items-start gap-1.5">
        <Avatar src={avatarCliente} className="size-5" />
        <div className="min-w-0">
          <p className="rounded-lg rounded-tl-sm border border-line-soft px-2.5 py-1.5">{t.ask}</p>
          <p className="mt-1 text-[0.6rem] font-semibold text-ink">{t.client}</p>
        </div>
        <span className="mt-1.5 shrink-0 text-[0.58rem] text-muted">14:32</span>
      </div>

      {/* Fiche produit envoyée dans la conversation : le pont entre les deux
          canaux que la carte annonce. */}
      <div className="mt-2 ml-auto flex w-[85%] items-center gap-2 rounded-lg rounded-tr-sm bg-teal-soft p-1.5">
        <span className="relative size-9 shrink-0 overflow-hidden rounded-md">
          <Image src={produitMarche} alt="" fill sizes="48px" className="object-cover" />
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[0.66rem] font-semibold text-ink">{t.product}</span>
          <span className="block font-sans text-[0.72rem] font-semibold text-teal tabular-nums">
            25 000 F
          </span>
        </span>
        <span className="ml-auto rounded-full bg-teal px-2 py-0.5 text-[0.58rem] font-medium text-white">
          {t.order}
        </span>
      </div>

      <div className="mt-2.5 flex items-center gap-2 border-t border-line-soft pt-2">
        <span className="rounded-full bg-teal px-2.5 py-1 text-[0.62rem] font-medium text-white">
          {t.reply}
        </span>
        <span className="text-[0.62rem] text-muted">{t.notes}</span>
        <Avatar src={avatarMarchande} className="ml-auto size-5" />
      </div>
    </div>
  );
}

/* ── 2. Escrow : la somme retenue, l'état, le versement ───────────────── */

export function VisualEscrow({ t }: { t: Copy }) {
  return (
    <div className="bento-mock" aria-hidden="true">
      <div className="bento-row">
        <span className="text-muted">{t.orderRef}</span>
        <span className="bento-pill bg-gold-soft text-gold-ink">{t.held}</span>
      </div>
      <p className="mt-2 font-sans text-[1.55rem] font-semibold tracking-[-0.045em] text-ink tabular-nums">
        25 000 F
      </p>
      <div className="mt-3 grid gap-1.5 border-t border-line-soft pt-3">
        <span className="flex items-center gap-2">
          <CheckIcon className="size-3.5 text-ok" />
          {t.received}
        </span>
        <span className="flex items-center gap-2 text-muted">
          <span className="size-3.5 rounded-full border border-line" />
          {t.releasedOn}
        </span>
      </div>

      <div className="bento-float right-3 bottom-3 flex items-center gap-2">
        <Badge initials="OM" />
        <span className="text-[0.68rem] text-muted">{t.payout}</span>
      </div>
    </div>
  );
}

/* ── 3. Livraison : le colis suivi sur la carte ───────────────────────── */

export function VisualLivraison({ t }: { t: Copy }) {
  return (
    <div className="bento-mock -flush" aria-hidden="true">
      {/* Ce qui donne à une carte son air de carte : les îlots bâtis entre les
          voies, la hiérarchie des rues, et le liseré blanc sous l'itinéraire. */}
      <svg
        viewBox="0 0 340 220"
        preserveAspectRatio="xMidYMin slice"
        className="absolute inset-0 size-full"
      >
        <rect width="340" height="220" fill="#ECEFEC" />
        <g fill="#F6F8F6">
          <rect x="8" y="10" width="46" height="40" rx="3" />
          <rect x="8" y="62" width="46" height="52" rx="3" />
          <rect x="8" y="126" width="46" height="38" rx="3" />
          <rect x="66" y="10" width="58" height="40" rx="3" />
          <rect x="66" y="62" width="58" height="52" rx="3" />
          <rect x="66" y="126" width="34" height="38" rx="3" />
          <rect x="160" y="10" width="52" height="26" rx="3" />
          <rect x="160" y="48" width="52" height="66" rx="3" />
          <rect x="160" y="126" width="52" height="38" rx="3" />
          <rect x="224" y="10" width="46" height="40" rx="3" />
          <rect x="224" y="126" width="46" height="38" rx="3" />
          <rect x="282" y="10" width="50" height="40" rx="3" />
          <rect x="282" y="62" width="50" height="52" rx="3" />
          <rect x="8" y="176" width="116" height="36" rx="3" />
          <rect x="224" y="176" width="108" height="36" rx="3" />
        </g>
        <g fill="#DCEBDC">
          <rect x="224" y="62" width="46" height="52" rx="4" />
          <rect x="136" y="176" width="76" height="36" rx="4" />
        </g>
        <path
          d="M140 -12 C 150 34, 126 62, 138 104 C 148 140, 128 176, 140 232"
          fill="none"
          stroke="#D3E7F2"
          strokeWidth="16"
          strokeLinecap="round"
        />
        <g stroke="#FFFFFF" strokeLinecap="round">
          <path strokeWidth="7" d="M0 120h340M216 0v220" />
          <path strokeWidth="4.5" d="M0 56h340M0 170h340M60 0v220M276 0v220" />
          <path strokeWidth="2.5" d="M0 92h340M100 126v90M300 56v114" />
        </g>
        <path
          d="M42 168 C 76 168, 82 148, 104 148 C 132 148, 138 120, 168 120 C 200 120, 206 92, 238 92 C 264 92, 272 74, 296 74"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42 168 C 76 168, 82 148, 104 148 C 132 148, 138 120, 168 120 C 200 120, 206 92, 238 92 C 264 92, 272 74, 296 74"
          fill="none"
          stroke="var(--color-teal)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Pin x={42} y={168} color="var(--color-teal)" />
        <Pin x={296} y={74} color="var(--color-gold)" />
        <g transform="translate(168 120)">
          <ellipse cx="0" cy="10" rx="12" ry="3.5" fill="#062A2E" opacity="0.12" />
          <rect x="-13" y="-9" width="26" height="18" rx="6" fill="#fff" />
          <g transform="translate(-6.5 -5)" fill="none" stroke="var(--color-teal)" strokeWidth="1.6">
            <path d="M0 2.4h7.6v6.2H0zM7.6 4.4h2.8l2 2.1v2.1H7.6z" />
            <circle cx="2.6" cy="9.4" r="1.1" fill="var(--color-teal)" stroke="none" />
            <circle cx="10.4" cy="9.4" r="1.1" fill="var(--color-teal)" stroke="none" />
          </g>
        </g>
      </svg>

      <div className="bento-float top-2.5 left-2.5 flex items-center gap-3">
        <span>
          <span className="block text-[0.55rem] text-muted">{t.remaining}</span>
          <span className="block font-semibold text-teal tabular-nums">3,2 km</span>
        </span>
        <span className="h-6 w-px bg-line-soft" />
        <span>
          <span className="block text-[0.55rem] text-muted">{t.eta}</span>
          <span className="block font-semibold text-teal tabular-nums">18 min</span>
        </span>
      </div>

      <div className="bento-float top-[5.6rem] left-2.5 py-1.5">
        <span className="block text-[0.6rem] font-semibold text-teal">{t.pointA}</span>
        <span className="block text-[0.55rem] text-muted">{t.shopLabel}</span>
      </div>

      <div className="bento-float top-9 right-2.5 py-1.5">
        <span className="block text-[0.6rem] font-semibold text-gold-ink">{t.pointB}</span>
        <span className="block text-[0.55rem] text-muted">{t.clientLabel}</span>
      </div>

      <div className="absolute right-2.5 bottom-14 grid overflow-hidden rounded-lg bg-white shadow-[var(--shadow-mock)]">
        <span className="grid size-6 place-items-center border-b border-line-soft text-[0.8rem] leading-none text-muted">
          +
        </span>
        <span className="grid size-6 place-items-center text-[0.8rem] leading-none text-muted">
          −
        </span>
      </div>

      <div className="bento-float bottom-2.5 left-2.5 flex items-center gap-2">
        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold-soft text-gold-ink">
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6M10.5 20a2 2 0 0 0 3 0" />
          </svg>
        </span>
        <span>
          <span className="block text-[0.62rem] font-semibold text-ink">{t.notified}</span>
          <span className="block text-[0.55rem] text-muted">{t.proof}</span>
        </span>
      </div>
    </div>
  );
}

/** Épingle de carte : goutte pleine, halo au sol, œilleton blanc. */
function Pin({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="2" rx="9" ry="3.2" fill="#062A2E" opacity="0.12" />
      <path d="M0 1c-5.5-6.5-7.5-8.5-7.5-11.5a7.5 7.5 0 0 1 15 0c0 3-2 5-7.5 11.5Z" fill={color} />
      <circle cx="0" cy="-10.5" r="2.6" fill="#fff" />
    </g>
  );
}

/* ── 4. Pilotage : le tableau de bord marchand ────────────────────────── */

const MENU_ICONS = [
  "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  "M4 8h16l-1.5 11H5.5zM8.5 8a3.5 3.5 0 0 1 7 0",
  "M12 3l8 4v10l-8 4-8-4V7zM4 7l8 4 8-4M12 11v10",
  "M2 7h11v9H2zM13 10h4l3 3v3h-7zM6 18.5h.01M17 18.5h.01",
  "M3 7h18v11H3zM3 11h18M7 15h4",
];

function Spark({ points, tone }: { points: string; tone: "teal" | "gold" }) {
  return (
    <svg viewBox="0 0 48 16" className="h-4 w-12 shrink-0">
      <path
        d={points}
        fill="none"
        stroke={tone === "teal" ? "var(--color-teal-hi)" : "var(--color-gold)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function VisualPilotage({ t }: { t: Copy }) {
  return (
    <div className="bento-mock -flush flex" aria-hidden="true">
      <div className="hidden w-[8.75rem] shrink-0 flex-col gap-0.5 border-r border-line-soft bg-alt/40 p-2.5 sm:flex">
        <span className="mb-2 flex items-center gap-1.5 px-1">
          <span className="grid size-5 shrink-0 place-items-center rounded-md bg-teal text-[0.55rem] font-bold text-white">
            U
          </span>
          <span className="truncate text-[0.66rem] font-semibold whitespace-nowrap text-ink">
            {t.sellerSpace}
          </span>
        </span>
        {t.menu.map((item, index) => (
          <span
            key={item}
            className={`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[0.62rem] ${
              index === 0 ? "bg-teal-soft font-medium text-teal" : "text-muted"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-3 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={MENU_ICONS[index]} />
            </svg>
            <span className="truncate">{item}</span>
          </span>
        ))}
      </div>

      <div className="min-w-0 flex-1 p-2.5">
        <div className="flex items-center gap-2">
          <span>
            <span className="block text-[0.82rem] leading-tight font-semibold text-ink">
              {t.dashboard}
            </span>
            <span className="block text-[0.55rem] text-muted">{t.shopName}</span>
          </span>
          <span className="ml-auto flex items-center gap-1.5">
            <span className="relative grid size-5 place-items-center rounded-full border border-line-soft text-muted">
              <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6" />
              </svg>
              <span className="absolute -top-0.5 -right-0.5 size-1.5 rounded-full bg-gold" />
            </span>
            <Avatar src={avatarMarchande} className="size-5" />
          </span>
        </div>

        <div className="mt-2 flex gap-1">
          {t.tabs.map((tab, index) => (
            <span
              key={tab}
              className={
                index === 0
                  ? "rounded-full bg-teal px-2 py-0.5 text-[0.58rem] font-medium text-white"
                  : "px-2 py-0.5 text-[0.58rem] text-muted"
              }
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-line-soft px-2 py-1.5">
            <span className="block text-[0.55rem] text-muted">{t.monthSales}</span>
            <span className="mt-0.5 flex items-end justify-between gap-1">
              <span className="font-sans text-[0.92rem] leading-none font-semibold tracking-[-0.04em] text-ink tabular-nums">
                1 248 000 F
              </span>
              <Spark tone="teal" points="M1 12 L9 10 L17 13 L25 6 L33 8 L41 3 L47 5" />
            </span>
            <span className="mt-1 block text-[0.53rem] text-ok">{t.vsLastMonth}</span>
          </div>
          <div className="rounded-lg border border-line-soft px-2 py-1.5">
            <span className="block text-[0.55rem] text-muted">{t.toPayOut}</span>
            <span className="mt-0.5 flex items-end justify-between gap-1">
              <span className="font-sans text-[0.92rem] leading-none font-semibold tracking-[-0.04em] text-ink tabular-nums">
                142 500 F
              </span>
              <Spark tone="gold" points="M1 9 L9 11 L17 7 L25 9 L33 5 L41 7 L47 4" />
            </span>
            <span className="mt-1 block text-[0.53rem] text-gold-ink">{t.payoutOn}</span>
          </div>
        </div>

        <div className="mt-1.5 rounded-lg border border-line-soft p-2">
          <div className="bento-row">
            <span className="text-[0.6rem] font-medium text-ink">{t.salesAnalysis}</span>
            <span className="bento-pill bg-teal-soft text-teal">{t.days}</span>
          </div>
          <div className="mt-1 flex gap-1.5">
            <span className="flex shrink-0 flex-col justify-between py-0.5 text-[0.48rem] text-muted tabular-nums">
              <span>60 k</span>
              <span>30 k</span>
              <span>0</span>
            </span>
            <svg viewBox="0 0 260 62" className="h-auto w-full">
              <defs>
                <linearGradient id="upm-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="var(--color-teal-hi)" stopOpacity="0.3" />
                  <stop offset="1" stopColor="var(--color-teal-hi)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g stroke="var(--color-line-soft)" strokeWidth="1">
                <path d="M0 6h260M0 31h260M0 56h260" />
              </g>
              <path
                d="M0 46 C 14 44, 18 40, 32 41 C 46 42, 50 47, 64 45 C 78 43, 82 30, 96 31 C 110 32, 114 36, 128 34 C 142 32, 146 14, 160 14 C 174 14, 178 26, 192 24 C 206 22, 210 18, 224 20 C 238 22, 246 16, 260 18 L260 62 L0 62 Z"
                fill="url(#upm-area)"
              />
              <path
                d="M0 46 C 14 44, 18 40, 32 41 C 46 42, 50 47, 64 45 C 78 43, 82 30, 96 31 C 110 32, 114 36, 128 34 C 142 32, 146 14, 160 14 C 174 14, 178 26, 192 24 C 206 22, 210 18, 224 20 C 238 22, 246 16, 260 18"
                fill="none"
                stroke="var(--color-teal-hi)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line x1="160" y1="14" x2="160" y2="62" stroke="var(--color-line)" strokeDasharray="3 3" />
              <circle cx="160" cy="14" r="4.5" fill="var(--color-gold)" stroke="#fff" strokeWidth="2.2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 5. Commissions : les trois taux, et ce qu'il reste ───────────────── */

export function VisualCommissions({ t }: { t: Copy }) {
  const plans = [
    { name: "Starter", rate: "10 %", selected: false },
    { name: "Pro", rate: "7 %", selected: false },
    { name: "Business", rate: "5 %", selected: true },
  ];

  return (
    <div className="bento-mock" aria-hidden="true">
      <div className="bento-row">
        <span className="font-medium text-ink">{t.commissionPerPlan}</span>
        <span className="bento-pill bg-alt text-muted">{t.chargedOn}</span>
      </div>

      <div className="mt-2 flex gap-2">
        <div className="grid min-w-0 flex-1 gap-1">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 ${
                plan.selected ? "border-teal bg-teal-soft" : "border-line-soft bg-white"
              }`}
            >
              <span
                className={`grid size-3.5 shrink-0 place-items-center rounded-full border ${
                  plan.selected ? "border-teal bg-teal" : "border-line"
                }`}
              >
                {plan.selected && <span className="size-1.5 rounded-full bg-white" />}
              </span>
              <span className="min-w-0">
                <span
                  className={`block truncate text-[0.68rem] font-medium ${
                    plan.selected ? "text-teal" : "text-ink"
                  }`}
                >
                  {plan.name}
                </span>
                <span className="block truncate text-[0.55rem] text-muted">
                  {t.planScopes[index]}
                </span>
              </span>
              <span
                className={`ml-auto font-sans text-[0.85rem] font-semibold tracking-[-0.03em] tabular-nums ${
                  plan.selected ? "text-teal" : "text-ink"
                }`}
              >
                {plan.rate}
              </span>
            </div>
          ))}
        </div>

        <div className="w-[9.5rem] shrink-0 rounded-lg bg-alt p-2.5">
          <span className="block text-[0.55rem] text-muted">{t.onASaleOf}</span>
          <span className="block font-sans text-[0.85rem] font-semibold tracking-[-0.03em] text-ink tabular-nums">
            25 000 F
          </span>

          <div className="mt-2 flex items-baseline justify-between border-t border-line-soft pt-2 text-[0.6rem]">
            <span className="text-muted">{t.commission} 5 %</span>
            <span className="font-medium text-crit tabular-nums">− 1 250 F</span>
          </div>

          <div className="mt-2 border-t border-line-soft pt-2">
            <span className="block text-[0.55rem] text-muted">{t.youReceive}</span>
            <span className="block font-sans text-[1.05rem] leading-tight font-semibold tracking-[-0.04em] text-ink tabular-nums">
              23 750 F
            </span>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-gold-soft px-1.5 py-0.5 text-[0.52rem] font-medium text-gold-ink">
              {t.paidWithin}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
