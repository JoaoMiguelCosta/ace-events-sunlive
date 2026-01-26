// src/pages/Events/components/ImportantNotes.jsx
import styles from "../EventPage.module.css";

export default function ImportantNotes({ content }) {
  const data = content?.importantNotes;
  if (!data) return null;

  const label = data.label || "Notas:";
  const text = data.text || "";
  if (!text.trim()) return null;

  return (
    <section className={styles.notesWrap} aria-label="Notas importantes">
      <div className={styles.notesText}>
        <span className={styles.notesLabel}>{label}</span> <span>{text}</span>
      </div>
    </section>
  );
}
