import styles from "./Footer.module.css";
import { headerContent } from "../../../config/content/home.content.js";

export default function Footer() {
  const footer = headerContent?.footer;

  const text =
    footer?.copyright ??
    `© Copyright ${new Date().getFullYear()} Sunlive – All Rights Reserved`;

  return (
    <footer className={styles.shell} aria-label="Footer">
      <div
        id={footer?.id ?? "footer"}
        className={styles.footer}
        role="contentinfo"
      >
        <p className={styles.copy}>{text}</p>
      </div>
    </footer>
  );
}
