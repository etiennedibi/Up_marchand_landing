import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { UI } from "@/content/ui";
import { localePath, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";

/**
 * S13 — Footer.
 *
 * Encre pleine, quatre colonnes de liens, pays couverts et contact WhatsApp
 * (CDC S13). Aucune animation : la DA en fait explicitement une zone de repos.
 *
 * À BRANCHER : les pages légales n'existent pas encore. Elles sont obligatoires
 * avant la mise en ligne — la collecte d'emails les rend exigibles dès le
 * premier inscrit.
 */
export function Footer({ locale }: { locale: Locale }) {
  const t = UI[locale].footer;

  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer-grid">
          <div>
            <Logo tone="light" />
            <p className="footer-baseline">{SITE.baseline}</p>
          </div>

          {t.columns.map((column) => (
            <div key={column.title} className="footer-col">
              <h3>{column.title}</h3>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href === "#" ? "#" : localePath(locale, link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="footer-col">
            <h3>{t.contact}</h3>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <a href={`https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`}>WhatsApp</a>
            <span>{SITE.countries.join(" · ")}</span>
          </div>
        </div>

        <div className="footer-bar">
          <span>
            © {new Date().getFullYear()} {SITE.name} — {t.rights} {SITE.parent}
          </span>
          <span>{t.status}</span>
        </div>
      </div>

      {/* Filigrane décoratif : le nom est déjà lisible dans le logotype et la
          ligne de copyright, un lecteur d'écran n'a pas à l'entendre une
          troisième fois. */}
      <span className="footer-watermark" aria-hidden="true">
        {SITE.name}
      </span>
    </footer>
  );
}
