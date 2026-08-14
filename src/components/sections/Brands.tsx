import {
  CardIcon,
  CoinsIcon,
  GlobeIcon,
  LockIcon,
  PinIcon,
  TruckIcon,
} from "@/components/ui/icons";
import { BRANDS, type BrandKind } from "@/content/brands";
import type { Locale } from "@/lib/i18n";

/**
 * S2 — Les marques qui nous font confiance.
 *
 * Quatre bandes défilantes, alternées en sens et en vitesse, d'après la section
 * « marques » de MindMarket : une pastille par entrée, rond blanc à gauche et
 * nom à côté. Aucun fichier logo n'est requis — utile tant que les chartes des
 * partenaires ne sont pas en notre possession.
 *
 * Les vitesses sont volontairement toutes différentes : deux bandes à la même
 * durée se synchronisent à l'œil et l'ensemble se lit comme un seul bloc.
 *
 * Le motif est rendu deux fois dans chaque bande : à mi-course, la seconde
 * copie occupe la place de la première et la boucle passe inaperçue.
 */
const ICONS: Record<BrandKind, typeof LockIcon> = {
  paiement: CardIcon,
  livraison: TruckIcon,
  couverture: GlobeIcon,
  groupe: LockIcon,
  moyen: CoinsIcon,
  ville: PinIcon,
};

function Pill({ name, role, kind }: { name: string; role: string; kind: BrandKind }) {
  const Icon = ICONS[kind];
  return (
    <span className="brand-pill">
      <span className="brand-mark">
        <Icon />
      </span>
      <span>
        <span className="brand-name">{name}</span>
        <span className="brand-role">{role}</span>
      </span>
    </span>
  );
}

export function Brands({ locale }: { locale: Locale }) {
  const copy = BRANDS[locale];

  return (
    <section className="section page-container">
      <h2 className="brands-title">{copy.title}</h2>
      <p className="section-sub mt-5 mb-12 text-center">{copy.sub}</p>

      <div className="brands-rails">
        {copy.rails.map((rail, index) => (
          <div
            key={index}
            className={`rail${rail.reverse ? " -reverse" : ""}`}
            // Seule la première bande est annoncée : les suivantes répètent une
            // information déjà donnée par le texte de la section.
            aria-hidden={index > 0}
          >
            <div
              className="rail-track"
              style={{ "--rail-duration": rail.duration } as React.CSSProperties}
            >
              {[0, 1].map((copyIndex) =>
                rail.items.map((item) => (
                  <Pill
                    key={`${copyIndex}-${item.name}`}
                    name={item.name}
                    role={item.role}
                    kind={item.kind}
                  />
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
