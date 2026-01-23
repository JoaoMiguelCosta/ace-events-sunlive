import styles from "./AboutTabs.module.css";

export default function AboutTabs({ tabs, activeKey, onChange }) {
  return (
    <div className={styles.wrapper} role="tablist" aria-label="About topics">
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        const Icon = tab.icon;

        return (
          <button
            key={tab.key}
            type="button"
            className={`${styles.tab} ${isActive ? styles.active : ""}`}
            onClick={() => onChange(tab)}
            role="tab"
            aria-selected={isActive}
            aria-controls={`about-panel-${tab.key}`}
            id={`about-tab-${tab.key}`}
          >
            <span className={styles.iconWrap} aria-hidden="true">
              {Icon ? <Icon className={styles.icon} /> : null}
            </span>

            <span className={styles.label}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
