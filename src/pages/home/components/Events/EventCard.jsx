import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
  const dateLabel = event.dateText ?? event.month ?? "";

  const CardInner = (
    <>
      <div className={styles.media}>
        <img
          src={event.image}
          alt={`${event.title} poster`}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.body}>
        {/* ✅ data passa para o body */}
        {dateLabel ? <div className={styles.datePill}>{dateLabel}</div> : null}

        <h4 className={styles.title}>{event.title}</h4>

        <p className={styles.meta}>
          {event.sport ?? "—"} · {event.year ?? 2026}
        </p>
      </div>
    </>
  );

  // ✅ se tiver href, vira link
  if (event.href) {
    return (
      <a
        className={styles.card}
        href={event.href}
        target="_blank"
        rel="noreferrer"
      >
        {CardInner}
      </a>
    );
  }

  return <article className={styles.card}>{CardInner}</article>;
}
