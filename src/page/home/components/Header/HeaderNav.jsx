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

  const renderLink = (item, mode) => {
    const isMobile = mode === "mobile";
    const isExternal = !!item.href || item.external;
    const href = item.href ?? item.anchor ?? "#";
    const Icon = item.icon;

    // ✅ external com icon: desktop e mobile -> ícone-only
    const iconOnlyDesktop = !isMobile && isExternal && Icon;
    const iconOnlyMobile = isMobile && isExternal && Icon;

    const cls = iconOnlyDesktop
      ? styles.iconLinkPlain // ✅ sem círculo no desktop
      : iconOnlyMobile
        ? styles.mobileIconLink
        : isMobile
          ? styles.mobileLink
          : styles.navLink;

    const commonProps = {
      href,
      className: cls,
      onClick: isMobile ? closeAll : undefined,
      ...(isExternal ? { target: "_blank", rel: "noreferrer noopener" } : null),
      ...(iconOnlyDesktop || iconOnlyMobile
        ? { "aria-label": item.label, title: item.label }
        : null),
    };

    return (
      <a key={`${mode}-${item.label}`} {...commonProps}>
        {iconOnlyMobile ? (
          <>
            <span className={styles.linkIcon} aria-hidden="true">
              <Icon />
            </span>
            <span className={styles.mobileLinkRight} aria-hidden="true">
              ↗
            </span>
          </>
        ) : iconOnlyDesktop ? (
          <span className={styles.linkIcon} aria-hidden="true">
            <Icon />
          </span>
        ) : isMobile ? (
          <>
            <span className={styles.mobileLinkLeft}>
              {Icon ? (
                <span className={styles.linkIcon} aria-hidden="true">
                  <Icon />
                </span>
              ) : null}
              <span className={styles.linkText}>{item.label}</span>
            </span>
            <span className={styles.mobileLinkRight} aria-hidden="true">
              ↗
            </span>
          </>
        ) : (
          item.label
        )}
      </a>
    );
  };

  const renderItems = (mode = "desktop") =>
    items.map((item) => {
      const hasDropdown = item.type === "dropdown";
      const open = hasDropdown && isOpen(item.label);

      if (!hasDropdown) return renderLink(item, mode);

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
            className={`${styles.mobileDropdownSlot} ${
              open ? styles.mobileDropdownOpen : ""
            }`}
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
        className={`${styles.mobilePanel} ${
          mobileOpen ? styles.mobilePanelOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          {renderItems("mobile")}
        </nav>
      </div>
    </div>
  );
}
