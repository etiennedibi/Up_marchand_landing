import Image, { type StaticImageData } from "next/image";
import carteEscrow from "@/assets/photos/carte-escrow.jpg";
import carteLivraison from "@/assets/photos/carte-livraison.jpg";
import cartePaiement from "@/assets/photos/carte-paiement.jpg";
import carteReputation from "@/assets/photos/carte-reputation.jpg";
import carteWhatsapp from "@/assets/photos/carte-whatsapp.jpg";
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
import type { Locale } from "@/lib/i18n";

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
 * Une illustration par carte, dans l'ordre de la pile.
 *
 * Chacune est traitée selon l'habillage de sa carte : couleurs conservées sur
 * les cartes blanches, bichrome en mode « luminosité » sur les aplats — la
 * photographie emprunte alors la teinte de la carte au lieu de lui en imposer
 * une seconde. Le dégradé l'efface avant le chiffre, qui reste le sujet.
 */
const PHOTOS: (StaticImageData | null)[] = [
  carteEscrow,
  cartePaiement,
  carteReputation,
  carteWhatsapp,
  carteLivraison,
];

export function Features({ locale }: { locale: Locale }) {
  const copy = FEATURES[locale];

  return (
    <section id="fonctionnalites" className="stack scroll-mt-[var(--nav-safe)]">
      {/* Décorative : le contenu de la section ne dépend en rien d'elle. */}
      <Image src={fondMarche} alt="" fill sizes="100vw" className="stack-texture" />

      <div className="page-container">
        <div className="stack-grid">
          <div className="stack-intro">
            <div className="stack-intro-inner">
              <p className="section-eyebrow">{copy.eyebrow}</p>
              <WaveHeading className="stack-title -wave-sm">
                {copy.title.before}
                <u>{copy.title.accent}</u>
              </WaveHeading>
              <p className="stack-text">{copy.text}</p>
            </div>
          </div>

          <div className="stack-list">
            {copy.cards.map((card, index) => {
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
