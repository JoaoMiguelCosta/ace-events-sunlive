import styles from "./Partners.module.css";
import { headerContent } from "../../../../config/content/home.content.js";

export default function Partners() {
  const partners = headerContent?.partners;
  const title = partners?.title ?? "Partners";
  const subtitle = partners?.subtitle ?? ""; // ✅ opcional
  const items = partners?.items ?? [];

  return (
    <section
      id={partners?.id ?? "partners"}
      className={styles.section}
      aria-label="Partners"
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>

        <div className={styles.grid} role="list" aria-label="Partners logos">
          {items.map((p) => (
            <div
              key={p.key}
              className={styles.card}
              role="listitem"
              data-key={p.key}
              aria-label={p.name ?? p.key}
            >
              <img
                src={p.image}
                alt={p.name ?? p.key}
                className={styles.logo}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
