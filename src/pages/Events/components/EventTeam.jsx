// src/pages/Events/components/EventTeam.jsx
import styles from "../EventPage.module.css";

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default function EventTeam({ content }) {
  const team = content?.team;
  const members = team?.members ?? [];
  if (!team || !members.length) return null;

  const visible = members.slice(0, 2);

  return (
    <section className={styles.teamWrap} aria-label="Responsáveis do evento">
      <h2 className={styles.sectionTitle}>{team.title || "Responsáveis"}</h2>

      <div className={styles.teamGrid}>
        {visible.map((p, idx) => (
          <div
            key={`${p.name}-${idx}`}
            className={`${styles.glassCard} ${styles.teamCard}`}
          >
            <div className={styles.teamAvatarWrap}>
              {p.avatar ? (
                <img
                  src={p.avatar}
                  alt={p.name}
                  className={styles.teamAvatar}
                  loading="lazy"
                />
              ) : (
                <div className={styles.teamAvatarFallback} aria-hidden="true">
                  {initials(p.name)}
                </div>
              )}
            </div>

            <div className={styles.teamName}>{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
