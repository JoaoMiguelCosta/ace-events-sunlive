// src/pages/Events/components/OptionalExtras.jsx
import styles from "../EventPage.module.css";

export default function OptionalExtras({ content }) {
  const data = content?.optionalExtras;
  if (!data?.items?.length) return null;

  const title = data.title || "Extras (Opcionais)";

  return (
    <section className={styles.extrasWrap} aria-label={title}>
      <div className={`${styles.extrasCard} ${styles.glassCard}`}>
        <div className={styles.extrasTitle}>{title}</div>

        <div className={styles.extrasList}>
          {data.items.map((it, idx) => (
            <div
              key={it.key || `${it.label}-${idx}`}
              className={styles.extrasRow}
            >
              <div className={styles.extrasLabel}>{it.label}</div>
              <div className={styles.extrasPrice}>{it.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
