import styles from "./Hero.module.css";
import { headerContent } from "../../../../config/content/home.content.js";

export default function Hero() {
  const { backgroundImage, title, subtitle, stats, cta } = headerContent.hero;

  return (
    <section
      id={headerContent.hero.id}
      className={styles.hero}
      style={{ "--hero-bg": `url(${backgroundImage})` }}
      aria-label="Hero"
    >
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.grid}>
          <h1 className={styles.title}>
            {title.split("\n").map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h1>

          <div className={styles.right}>
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.stat}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <a href={cta.href} className={styles.ctaButton}>
            {cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
