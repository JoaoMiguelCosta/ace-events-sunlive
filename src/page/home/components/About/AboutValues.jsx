import styles from "./AboutValues.module.css";

export default function AboutValues({ values }) {
  return (
    <div className={styles.grid} aria-label="ACE values">
      {values.map((v) => {
        const Icon = v.icon;

        return (
          <div key={v.label} className={styles.card}>
            {Icon ? <Icon className={styles.icon} aria-hidden="true" /> : null}
            <div className={styles.label}>{v.label}</div>
          </div>
        );
      })}
    </div>
  );
}
