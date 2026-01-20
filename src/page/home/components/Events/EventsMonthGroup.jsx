import styles from "./EventsMonthGroup.module.css";
import EventCard from "./EventCard.jsx";

export default function EventsMonthGroup({ label, items, variant = "single" }) {
  const gridClass = variant === "paired" ? styles.gridPaired : styles.grid;

  return (
    <section className={styles.group} aria-label={label}>
      <div className={styles.header}>
        <h3 className={styles.title}>{label}</h3>
        {/* ✅ removido: contagem */}
      </div>

      <div className={gridClass}>
        {items.map((ev) => (
          <EventCard key={ev.key} event={ev} />
        ))}
      </div>
    </section>
  );
}
