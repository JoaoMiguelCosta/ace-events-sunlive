import styles from "./EventCard.module.css";
import { EXTERNAL_EVENT_KEYS } from "../../../../config/content/home.content.js";

export default function EventCard({ event }) {
  const dateLabel = event.dateText ?? event.month ?? "";

  const isExternal = EXTERNAL_EVENT_KEYS?.has(event.key);

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
        {dateLabel ? <div className={styles.datePill}>{dateLabel}</div> : null}

        <h4 className={styles.title}>{event.title}</h4>

        <p className={styles.meta}>
          {event.sport ?? "—"} · {event.year ?? 2026}
        </p>
      </div>
    </>
  );

  if (event.href) {
    return (
      <a
        className={styles.card}
        href={event.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
      >
        {CardInner}
      </a>
    );
  }

  return <article className={styles.card}>{CardInner}</article>;
}
