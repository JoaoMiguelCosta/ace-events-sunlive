// src/pages/Events/components/CombinedContact.jsx
import styles from "../EventPage.module.css";

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function CombinedContact({ content }) {
  const data = content?.combinedContact;
  if (!data) return null;

  const title = data.title || "Responsáveis/Parceria";
  const name = data.name || "Sunlive";
  const description =
    data.description ||
    "Responsáveis e Parceiro oficial do evento e apoio à organização.";
  const logo = data.logo;

  return (
    <section className={styles.partnerWrap} aria-label={title}>
      <h2 className={styles.partnerTitle}>{title}</h2>

      <div className={`${styles.glassCard} ${styles.partnerCard}`}>
        <div className={styles.partnerLogoBox}>
          {logo ? (
            <img
              src={logo}
              alt={name}
              className={styles.partnerLogoImg}
              loading="lazy"
            />
          ) : (
            <div className={styles.partnerLogoPlaceholder} aria-hidden="true">
              {initials(name)}
            </div>
          )}
        </div>

        <div className={styles.partnerText}>
          <div className={styles.partnerName}>{name}</div>
          <div className={styles.partnerDescription}>{description}</div>
        </div>
      </div>
    </section>
  );
}
