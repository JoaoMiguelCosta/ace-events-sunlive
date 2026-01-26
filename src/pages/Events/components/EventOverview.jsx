// src/pages/Events/components/EventOverview.jsx
import styles from "../EventPage.module.css";
import { Trophy, Users, Award, Calendar } from "../../../ui/icons/index.js";

const ICONS = {
  trophy: Trophy,
  users: Users,
  award: Award,
  calendar: Calendar,
};

export default function EventOverview({ content }) {
  const items = content?.overview?.items ?? [];
  if (!items.length) return null;

  return (
    <section className={styles.overviewWrap} aria-label="Resumo do evento">
      <div className={styles.overviewGrid}>
        {items.map((it, idx) => {
          const Icon = ICONS[it.icon] || Trophy;

          return (
            <div
              key={`${it.label}-${idx}`}
              className={`${styles.glassCard} ${styles.overviewCard}`}
            >
              <div className={styles.overviewTopRow}>
                <span className={styles.overviewIconBox} aria-hidden="true">
                  <Icon size={18} className={styles.overviewIcon} />
                </span>
                <span className={styles.overviewLabel}>{it.label}</span>
              </div>

              <div className={styles.overviewValue}>{it.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
