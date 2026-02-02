// src/pages/Events/components/Program.jsx
import { useMemo, useState } from "react";
import styles from "../EventPage.module.css";

export default function Program({ content }) {
  const data = content?.program;
  if (!data?.days?.length) return null;

  const title = data.title || "Programa";

  const firstKey = data.days[0]?.key;
  const [active, setActive] = useState(firstKey);

  const activeDay = useMemo(
    () => data.days.find((d) => d.key === active) || data.days[0],
    [active, data.days],
  );

  return (
    <section className={styles.programWrap} aria-label={title}>
      <h2 className={styles.programTitle}>{title}</h2>

      <div className={styles.programTabs} role="tablist" aria-label="Dias">
        {data.days.map((d) => {
          const isActive = d.key === active;
          return (
            <button
              key={d.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.programTab} ${styles.glassCard} ${
                isActive ? styles.programTabActive : ""
              }`}
              onClick={() => setActive(d.key)}
            >
              <div className={styles.programTabDay}>{d.weekday}</div>
              <div className={styles.programTabDate}>{d.date}</div>
            </button>
          );
        })}
      </div>

      <div
        className={`${styles.programCard} ${styles.glassCard}`}
        role="tabpanel"
      >
        {activeDay?.items?.length ? (
          activeDay.items.map((it, idx) => (
            <div key={`${it.time}-${idx}`} className={styles.programRow}>
              <div className={styles.programTime}>{it.time}</div>

              <div className={styles.programInfo}>
                <div className={styles.programItemTitle}>{it.title}</div>
                {it.description ? (
                  <div className={styles.programItemDesc}>{it.description}</div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.programEmpty}>
           definer to later
          </div>
        )}
      </div>
    </section>
  );
}
