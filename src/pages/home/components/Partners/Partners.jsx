import styles from "./Partners.module.css";

export default function Partners({ content }) {
  const partners = content;
  const title = partners?.title ?? "Partners";
  const subtitle = partners?.subtitle ?? "";
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
