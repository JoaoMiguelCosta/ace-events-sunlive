// src/pages/Events/components/HeroSection.jsx
import { Link } from "react-router-dom";
import styles from "../EventPage.module.css";
import { ArrowLeft, Calendar, Pin, Download } from "../../../ui/icons";

export default function HeroSection({ hero, fallbackTitle }) {
  if (!hero) return null;

  const { title, dateLabel, locationLabel, image, actions } = hero;

  const primary = actions?.primary;
  const secondary = actions?.secondary;

  const primaryLabel = primary?.label || "Inscrever";
  const primaryHref = primary?.href || "#";

  const secondaryLabel = secondary?.label || "Download Programa";
  const secondaryHref = secondary?.href || "#";

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: image
          ? `url(/src/assets/banners/${image})`
          : undefined,
      }}
      aria-label="Event Hero"
    >
      <div className={styles.heroShade}>
        <div className={styles.heroInner}>
          {/* Voltar */}
          <Link to="/" className={styles.heroBack}>
            <ArrowLeft size={16} className={styles.backIcon} />
            Voltar
          </Link>

          <h1 className={styles.heroTitle}>{title || fallbackTitle}</h1>

          <div className={styles.heroBadges}>
            {dateLabel && (
              <div className={styles.badge}>
                <Calendar size={18} className={styles.badgeIcon} />
                <span>{dateLabel}</span>
              </div>
            )}

            {locationLabel && (
              <div className={`${styles.badge} ${styles.badgeGhost}`}>
                <Pin size={18} className={styles.badgeIcon} />
                <span>{locationLabel}</span>
              </div>
            )}
          </div>

          <div className={styles.heroActions}>
            {/* Primary CTA */}
            <a className={styles.primaryBtn} href={primaryHref}>
              {primaryLabel}
            </a>

            {/* Secondary CTA */}
            <a className={styles.secondaryBtn} href={secondaryHref}>
              <Download size={18} className={styles.btnIcon} />
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
