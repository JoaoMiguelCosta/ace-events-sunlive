// src/shared/layout/EventLayout/EventLayout.jsx
import styles from "./EventLayout.module.css";

export default function EventLayout({ children, style }) {
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
