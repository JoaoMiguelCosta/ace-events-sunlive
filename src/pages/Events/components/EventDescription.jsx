// src/pages/Events/components/EventDescription.jsx
import styles from "../EventPage.module.css";
import { CheckIcon } from "../../../ui/icons/index.js";

export default function EventDescription({ content }) {
  const data = content?.description;
  if (!data) return null;

  const title = data.title || "Sobre o Evento";
  const paragraphs = data.paragraphs ?? [];
  const highlights = data.highlights;

  const Icon = highlights?.icon === "check" ? CheckIcon : CheckIcon;

  return (
    <section className={styles.descWrap} aria-label={title}>
      <h2 className={styles.descTitle}>{title}</h2>

      <div className={styles.descText}>
        {paragraphs.map((p, i) => (
          <p key={i} className={styles.descParagraph}>
            {p}
          </p>
        ))}
      </div>

      {highlights?.items?.length ? (
        <div className={`${styles.glassCard} ${styles.highlightsCard}`}>
          <div className={styles.highlightsTitle}>
            {highlights.title || "Destaques"}
          </div>

          <div className={styles.highlightsGrid}>
            {highlights.items.map((item, idx) => (
              <div key={idx} className={styles.highlightItem}>
                <Icon size={22} className={styles.highlightIcon} />
                <div className={styles.highlightText}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
