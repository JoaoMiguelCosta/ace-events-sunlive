import styles from "./AboutPanel.module.css";

function BulletList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((text) => (
        <li key={text} className={styles.li}>
          <span className={styles.dot} aria-hidden="true" />
          <span className={styles.text}>{text}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPanel({ tab }) {
  const Icon = tab.icon;

  const hasBullets = Array.isArray(tab.bullets) && tab.bullets.length > 0;
  const hasSections = Array.isArray(tab.sections) && tab.sections.length > 0;

  return (
    <div
      className={styles.panel}
      role="tabpanel"
      id={`about-panel-${tab.key}`}
      aria-labelledby={`about-tab-${tab.key}`}
    >
      <div className={styles.header}>
        {Icon ? (
          <span className={styles.headerIcon} aria-hidden="true">
            <Icon className={styles.icon} />
          </span>
        ) : null}

        <h3 className={styles.heading}>{tab.heading}</h3>
      </div>

      <div className={styles.body}>
        {hasBullets && <BulletList items={tab.bullets} />}

        {hasSections &&
          tab.sections.map((section) => (
            <div key={section.title} className={styles.subsection}>
              <div className={styles.sectionTitle}>{section.title}</div>
              <BulletList items={section.bullets ?? []} />
            </div>
          ))}

        {tab.footerNote ? (
          <div className={styles.note}>{tab.footerNote}</div>
        ) : null}
      </div>
    </div>
  );
}
