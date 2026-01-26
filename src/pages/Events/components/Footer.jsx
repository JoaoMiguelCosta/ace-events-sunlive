// src/pages/Events/components/Footer.jsx
import styles from "../EventPage.module.css";

export default function Footer({ content }) {
  const data = content?.footer;
  if (!data) return null;

  const text = data.text || "© Copyright 2026 Sunlive – All Rights Reserved";

  return (
    <footer className={styles.footerWrap} aria-label="Rodapé">
      <div className={styles.footerInner}>
        <div className={styles.footerText}>{text}</div>
      </div>
    </footer>
  );
}
