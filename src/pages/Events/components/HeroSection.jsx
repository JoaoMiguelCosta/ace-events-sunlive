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

  const {
    title,
    dateLabel,
    locationLabel,
    locationHref, // ✅ novo
    image,
    actions,
  } = hero;

  const hideActions = flags?.hideHeroActions === true;

  const primary = actions?.primary;
  const secondary = actions?.secondary;

  const primaryLabel = primary?.label || "Inscrever";
  const primaryHref = primary?.href || "#";

  const secondaryLabel = secondary?.label || "Download Programa";
  const secondaryHref = secondary?.href || "#";

  const hasAnyAction = !!(primary?.href || secondary?.href);
  const noActions = hideActions || !hasAnyAction;

  const bgUrl = getBannerUrl(image);

  const onAnchorClick = (href) => (e) => {
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();

    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ overrides por evento (sem afetar os outros)
  const bgPos = hero?.bgPos || "center";
  const bleedX = Number.isFinite(hero?.bleedX) ? hero.bleedX : 3;
  const bleedY = Number.isFinite(hero?.bleedY) ? hero.bleedY : 6;
  const bgScale = Number.isFinite(hero?.bgScale) ? hero.bgScale : 1.01;

  // ✅ por agora: desativar o secondary (Download Programa)
  const secondaryDisabled = true;

  return (
    <section
      className={`${styles.hero} ${noActions ? styles.heroNoActions : ""}`}
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        "--heroBgPos": bgPos,
        "--heroBleedX": `${bleedX}px`,
        "--heroBleedY": `${bleedY}px`,
        "--heroBgScale": bgScale,
      }}
      aria-label="Event Hero"
    >
      <div className={styles.heroShade}>
        <div className={styles.heroInner}>
          {/* ✅ volta para Home já na secção Events */}
          <Link to="/#events" className={styles.heroBack}>
            <ArrowLeft size={16} className={styles.backIcon} />
            Back
          </Link>

          <h1 className={styles.heroTitle}>{title || fallbackTitle}</h1>

          <div className={styles.heroBadges}>
            {dateLabel && (
              <div className={styles.badge}>
                <Calendar size={18} className={styles.badgeIcon} />
                <span>{dateLabel}</span>
              </div>
            )}

            {locationLabel &&
              (locationHref ? (
                // ✅ badge clicável (nova aba)
                <a
                  className={`${styles.badge} ${styles.badgeGhost}`}
                  href={locationHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Abrir localização no Google Maps"
                  title="Abrir no Google Maps"
                >
                  <Pin size={18} className={styles.badgeIcon} />
                  <span>{locationLabel}</span>
                </a>
              ) : (
                // fallback: só texto
                <div className={`${styles.badge} ${styles.badgeGhost}`}>
                  <Pin size={18} className={styles.badgeIcon} />
                  <span>{locationLabel}</span>
                </div>
              ))}
          </div>

          {!hideActions && hasAnyAction && (
            <div className={styles.heroActions}>
              {primary?.href && (
                <a
                  className={styles.primaryBtn}
                  href={primaryHref}
                  onClick={onAnchorClick(primaryHref)}
                >
                  {primaryLabel}
                </a>
              )}

              {secondary?.href && (
                <a
                  className={`${styles.secondaryBtn} ${
                    secondaryDisabled ? styles.secondaryBtnDisabled : ""
                  }`}
                  href={secondaryDisabled ? undefined : secondaryHref}
                  aria-disabled={secondaryDisabled}
                  tabIndex={secondaryDisabled ? -1 : 0}
                  onClick={(e) => {
                    if (secondaryDisabled) e.preventDefault();
                  }}
                >
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
