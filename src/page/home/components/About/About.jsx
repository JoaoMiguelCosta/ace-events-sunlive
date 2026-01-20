import { useEffect } from "react";
import styles from "./About.module.css";

import { headerContent } from "../../../../config/content/home.content.js";
import AboutTabs from "./AboutTabs.jsx";
import AboutPanel from "./AboutPanel.jsx";
import AboutValues from "./AboutValues.jsx";
import useAboutTabs from "./useAboutTabs.js";

export default function About() {
  const about = headerContent?.about;
  const tabs = about?.tabs ?? [];

  const { activeKey, activeTab, setActiveByKey, setActiveTab } =
    useAboutTabs(tabs);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const match = tabs.find((t) => t.anchor === hash);
      if (match?.key) setActiveByKey(match.key);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [tabs, setActiveByKey]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab?.anchor && typeof window !== "undefined") {
      window.history.replaceState(null, "", tab.anchor);
    }
  };

  if (!about || tabs.length === 0) return null;

  return (
    <section id={about.id} className={styles.section} aria-label="About">
      <div className={styles.container}>
        {/* ✅ âncoras fantasma: todas no mesmo sítio */}
        <div className={styles.anchors} aria-hidden="true">
          {tabs.map((t) => (
            <span
              key={t.key}
              id={t.anchor?.replace("#", "")}
              className={styles.anchor}
            />
          ))}
        </div>

        {/* ✅ Título fora da grid (para alinhar os cards no mesmo nível) */}
        <h2 className={styles.title}>{about.title}</h2>

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.tabsCard}>
              <AboutTabs
                tabs={tabs}
                activeKey={activeKey}
                onChange={handleTabChange}
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.panelCard}>
              {activeTab && <AboutPanel tab={activeTab} />}
            </div>
          </div>
        </div>

        {Array.isArray(about.values) && about.values.length > 0 && (
          <div className={styles.valuesWrap}>
            <AboutValues values={about.values} />
          </div>
        )}
      </div>
    </section>
  );
}
