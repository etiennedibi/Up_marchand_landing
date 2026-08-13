import Image, { type StaticImageData } from "next/image";
import carteEscrow from "@/assets/photos/carte-escrow.jpg";
import cartePaiement from "@/assets/photos/carte-paiement.jpg";
import fondMarche from "@/assets/photos/fond-marche.jpg";
import {
  ChatIcon,
  CoinsIcon,
  LockIcon,
  StarIcon,
  TruckIcon,
} from "@/components/ui/icons";
import { WaveHeading } from "@/components/ui/WaveHeading";
import { FEATURES } from "@/content/features";

/**
 * S6 — Les différenciateurs.
 *
 * Pile de grandes cartes chiffrées, sur le modèle de la section « chiffres » de
 * MindMarket : la colonne de gauche reste collée à l'écran pendant que les
 * cartes défilent et se recouvrent l'une l'autre.
 *
 * L'ordre est le nôtre : on ouvre sur le séquestre — la réponse au problème
 * n° 1 des commerçants — et on ferme sur la livraison, qui est la promesse la
 * plus large et donc la plus exposée.
 */
const ICONS = [LockIcon, CoinsIcon, StarIcon, ChatIcon, TruckIcon];

/**
 * Illustrations, sur les deux premières cartes seulement.
 *
 * Les deux ouvrent la pile, ce sont elles qui doivent retenir. Les suivantes
 * restent en aplat : cinq photographies enchaînées feraient une galerie, et le
 * chiffre — qui est le sujet de la section — n'aurait plus la parole.
 */
const PHOTOS: (StaticImageData | null)[] = [carteEscrow, cartePaiement, null, null, null];

export function Features() {
  return (
    <section id="fonctionnalites" className="stack scroll-mt-[var(--nav-safe)]">
      {/* Décorative : le contenu de la section ne dépend en rien d'elle. */}
      <Image src={fondMarche} alt="" fill sizes="100vw" className="stack-texture" />

      <div className="page-container">
        <div className="stack-grid">
          <div className="stack-intro">
            <div className="stack-intro-inner">
              <p className="section-eyebrow">{FEATURES.eyebrow}</p>
              <WaveHeading className="stack-title -wave-sm">
                {FEATURES.title.before}
                <u>{FEATURES.title.accent}</u>
              </WaveHeading>
              <p className="stack-text">{FEATURES.text}</p>
            </div>
          </div>

          <div className="stack-list">
            {FEATURES.cards.map((card, index) => {
              const Icon = ICONS[index];
              const photo = PHOTOS[index];
              return (
                <article
                  key={card.title}
                  className={`stack-card -${card.tone}`}
                  style={{ "--index": index } as React.CSSProperties}
                >
                  {photo && (
                    <Image
                      src={photo}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30rem, 90vw"
                      className="stack-photo"
                    />
                  )}

                  <span className="stack-icon">
                    <Icon />
                  </span>

                  <div>
                    <p className="stack-stat">
                      {card.stat}
                      {card.unit && <span> {card.unit}</span>}
                    </p>
                    <h3 className="stack-card-title">{card.title}</h3>
                    <p className="stack-card-text">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
