import styles from "./Footer.module.css";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import { getFooterContent } from "../../../config/content/footer.content.js";

export default function Footer({ content, variant = "home" }) {
  const { lang } = useLanguage();
  const footer = content ?? getFooterContent(lang);

  const text =
    footer?.copyright ??
    `© Copyright ${new Date().getFullYear()} Sunlive – All Rights Reserved`;

  const footerVariantClass =
    variant === "event" ? styles.footerEvent : styles.footerHome;

  return (
    <footer className={styles.shell} aria-label="Footer">
      <div
        id={footer?.id ?? "footer"}
        className={`${styles.footer} ${footerVariantClass}`}
        role="contentinfo"
      >
        <p className={styles.copy}>{text}</p>
      </div>
    </footer>
  );
}
