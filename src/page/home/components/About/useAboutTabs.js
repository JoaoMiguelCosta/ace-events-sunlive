import { useEffect, useMemo, useState } from "react";

export default function useAboutTabs(tabs, defaultKey) {
  const safeTabs = Array.isArray(tabs) ? tabs : [];
  const firstKey = safeTabs[0]?.key ?? "";
  const initialKey = defaultKey ?? firstKey;

  const [activeKey, setActiveKey] = useState(initialKey);

  const activeTab = useMemo(() => {
    return safeTabs.find((t) => t.key === activeKey) ?? safeTabs[0] ?? null;
  }, [safeTabs, activeKey]);

  // ✅ Se o URL tiver hash (#about-what / #about-events...), abre o tab certo
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const match = safeTabs.find((t) => t.anchor === hash);
    if (match?.key) setActiveKey(match.key);
  }, [safeTabs]);

  const setActiveByKey = (key) => {
    if (!key) return;
    setActiveKey(key);
  };

  const setActiveTab = (tab) => {
    if (!tab?.key) return;
    setActiveKey(tab.key);
  };

  return {
    activeKey,
    activeTab,
    setActiveKey,
    setActiveByKey,
    setActiveTab,
  };
}
