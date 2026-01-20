import { useEffect, useMemo, useState } from "react";
import styles from "./HeaderNav.module.css";
import useDropdown from "./useDropdown";
import HeaderDropdown from "./HeaderDropdown";

export default function HeaderNav({ menu }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { ref, isOpen, toggle, close } = useDropdown();

  const items = useMemo(() => menu ?? [], [menu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) {
        setMobileOpen(false);
        close();
      }
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [close]);

  const closeAll = () => {
    setMobileOpen(false);
    close();
  };

  const renderItems = (mode = "desktop") =>
    items.map((item) => {
      const hasDropdown = item.type === "dropdown";
      const open = hasDropdown && isOpen(item.label);

      if (!hasDropdown) {
        const cls = mode === "mobile" ? styles.mobileLink : styles.navLink;

        return (
          <a
            key={`${mode}-${item.label}`}
            href={item.anchor}
            className={cls}
            onClick={mode === "mobile" ? closeAll : undefined}
          >
            {item.label}
          </a>
        );
      }

      // dropdown item
      if (mode === "desktop") {
        return (
          <div key={`${mode}-${item.label}`} className={styles.navItem}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.navButton} ${
                open ? styles.navActive : ""
              }`}
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={() => toggle(item.label)}
            >
              {item.label}
              <span
                className={`${styles.caret} ${open ? styles.caretOpen : ""}`}
              >
                ▾
              </span>
            </button>

            <HeaderDropdown
              isOpen={open}
              items={item.children}
              onClose={close}
            />
          </div>
        );
      }

      // mobile dropdown
      return (
        <div key={`${mode}-${item.label}`} className={styles.mobileGroup}>
          <button
            type="button"
            className={styles.mobileLinkBtn}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => toggle(item.label)}
          >
            {item.label}
            <span className={`${styles.caret} ${open ? styles.caretOpen : ""}`}>
              ▾
            </span>
          </button>

          <div
            className={`${styles.mobileDropdownSlot} ${open ? styles.mobileDropdownOpen : ""}`}
          >
            <HeaderDropdown
              isOpen={open}
              items={item.children}
              onClose={closeAll}
            />
          </div>
        </div>
      );
    });

  return (
    <div ref={ref} className={styles.navWrap}>
      {/* Mobile toggle */}
      <button
        className={styles.mobileToggle}
        type="button"
        aria-label="Abrir menu"
        aria-expanded={mobileOpen}
        onClick={() => {
          setMobileOpen((v) => !v);
          close();
        }}
      >
        <span className={styles.burger} aria-hidden="true" />
      </button>

      {/* Desktop nav */}
      <nav className={styles.nav} aria-label="Primary">
        {renderItems("desktop")}
      </nav>

      {/* Mobile panel */}
      <div
        className={`${styles.mobilePanel} ${mobileOpen ? styles.mobilePanelOpen : ""}`}
      >
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          {renderItems("mobile")}
        </nav>
      </div>
    </div>
  );
}
