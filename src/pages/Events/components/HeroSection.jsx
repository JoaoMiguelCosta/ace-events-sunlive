// src/pages/Events/components/HeroSection.jsx
import styles from "../EventPage.module.css";
import { Calendar, Pin, Download } from "../../../ui/icons";

const BANNERS = import.meta.glob("../../../assets/banners/*", {
  eager: true,
  import: "default",
});

function getBannerUrl(filename) {
  if (!filename) return null;
  const hit = Object.entries(BANNERS).find(([path]) =>
    path.endsWith(`/${filename}`),
  );
  return hit ? hit[1] : null;
}

function isAnchor(href) {
  return typeof href === "string" && href.startsWith("#");
}

function scrollToAnchor(href) {
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HeroSection({ hero, fallbackTitle, flags }) {
  if (!hero) return null;

  const {
    title,
    dateLabel,
    locationLabel,
    locationHref,
    image,
    actions,
    bgPos,
    bgPosCover,
    bgPosContain,
    bgScale,
  } = hero;

  const hideActions = flags?.hideHeroActions === true;

  const primary = actions?.primary ?? null;
  const secondary = actions?.secondary ?? null;

  const hasAnyAction = Boolean(primary?.href || secondary?.href);
  const noActions = hideActions || !hasAnyAction;

  const bgUrl = getBannerUrl(image);

  const posCover = bgPosCover ?? bgPos ?? "center";
  const posContain = bgPosContain ?? "center 110%";
  const scale = Number.isFinite(bgScale) ? bgScale : 1;

  const secondaryDisabled = true;

  const onActionClick = (href) => (e) => {
    if (!isAnchor(href)) return;
    e.preventDefault();
    scrollToAnchor(href);
  };

  const resolvedTitle = title || fallbackTitle;

  return (
    <section
      className={`${styles.hero} ${noActions ? styles.heroNoActions : ""}`}
      style={{
        backgroundImage: bgUrl ? `url(${bgUrl})` : undefined,
        "--heroBgPosCover": posCover,
        "--heroBgPosContain": posContain,
        "--heroBgScale": scale,
      }}
      aria-label="Event Hero"
    >
      <div className={styles.heroShade}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{resolvedTitle}</h1>

          {/* ✅ stack único com espaçamento igual entre tudo */}
          <div className={styles.heroStack}>
            <div className={styles.heroBadges}>
              {dateLabel ? (
                <div className={styles.badge}>
                  <Calendar size={18} className={styles.badgeIcon} />
                  <span>{dateLabel}</span>
                </div>
              ) : null}

              {locationLabel ? (
                locationHref ? (
                  <a
                    className={`${styles.badge} ${styles.badgeGhost} ${styles.badgeLink}`}
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
                  <div className={`${styles.badge} ${styles.badgeGhost}`}>
                    <Pin size={18} className={styles.badgeIcon} />
                    <span>{locationLabel}</span>
                  </div>
                )
              ) : null}
            </div>

            {!hideActions && hasAnyAction ? (
              <div className={styles.heroActions}>
                {primary?.href ? (
                  <a
                    className={styles.primaryBtn}
                    href={primary.href}
                    onClick={onActionClick(primary.href)}
                  >
                    {primary.label || "Register"}
                  </a>
                ) : null}

                {secondary?.href ? (
                  <a
                    className={`${styles.secondaryBtn} ${
                      secondaryDisabled ? styles.secondaryBtnDisabled : ""
                    }`}
                    href={secondaryDisabled ? undefined : secondary.href}
                    aria-disabled={secondaryDisabled}
                    tabIndex={secondaryDisabled ? -1 : 0}
                    onClick={(e) => {
                      if (secondaryDisabled) e.preventDefault();
                    }}
                  >
                    <Download size={18} className={styles.btnIcon} />
                    {secondary.label || "Download Program"}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
