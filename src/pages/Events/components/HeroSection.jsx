// src/pages/Events/components/HeroSection.jsx
import { Link } from "react-router-dom";
import styles from "../EventPage.module.css";
import { ArrowLeft, Calendar, Pin, Download } from "../../../ui/icons";

const BANNERS = import.meta.glob("../../../assets/banners/*", {
  eager: true,
  import: "default",
});

const getBannerUrl = (filename) => {
  if (!filename) return null;
  const hit = Object.entries(BANNERS).find(([path]) =>
    path.endsWith(`/${filename}`),
  );
  return hit ? hit[1] : null;
};

export default function HeroSection({ hero, fallbackTitle, flags }) {
  if (!hero) return null;

  const { title, dateLabel, locationLabel, image, actions } = hero;

  const hideActions = flags?.hideHeroActions === true;

  const primary = actions?.primary;
  const secondary = actions?.secondary;

  const primaryLabel = primary?.label || "Inscrever";
  const primaryHref = primary?.href || "#";

  const secondaryLabel = secondary?.label || "Download Programa";
  const secondaryHref = secondary?.href || "#";

  const hasAnyAction = !!(primary?.href || secondary?.href);

  const bgUrl = getBannerUrl(image);

  const onAnchorClick = (href) => (e) => {
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: bgUrl ? `url(${bgUrl})` : undefined }}
      aria-label="Event Hero"
    >
      <div className={styles.heroShade}>
        <div className={styles.heroInner}>
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

          {!hideActions && hasAnyAction && (
            <div className={styles.heroActions}>
              {primary?.href && (
                <a
                  className={styles.primaryBtn}
                  href={primaryHref}
                  onClick={onAnchorClick(primaryHref)} // ✅ scroll suave
                >
                  {primaryLabel}
                </a>
              )}

              {secondary?.href && (
                <a className={styles.secondaryBtn} href={secondaryHref}>
                  <Download size={18} className={styles.btnIcon} />
                  {secondaryLabel}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
