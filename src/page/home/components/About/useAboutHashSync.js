import { useEffect } from "react";

export default function useAboutHashSync(tabs, setActiveByKey) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const match = tabs.find((t) => t.anchor === hash);
      if (match?.key) setActiveByKey(match.key);
    };

    syncFromHash(); // ao montar
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [tabs, setActiveByKey]);
}
