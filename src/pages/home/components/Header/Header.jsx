import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";

export default function Header({ content }) {
  const { logo, menu, i18n } = content;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div
          className={`${styles.inner} ${
            scrolled ? styles.innerScrolled : styles.innerTop
          }`}
        >
          <a className={styles.brand} href="#top" aria-label="ACE Home">
            <span className={styles.logoBox}>
              <img src={logo.image} alt="ACE logo" className={styles.logoImg} />
            </span>

            <span className={styles.brandText}>
              <span className={styles.title}>{logo.title}</span>
              <span className={styles.subtitle}>{logo.subtitle}</span>
            </span>
          </a>

          <HeaderNav menu={menu} i18n={i18n} />
        </div>
      </div>
    </header>
  );
}
