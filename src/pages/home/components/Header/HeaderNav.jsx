import { useEffect, useMemo, useState } from "react";
import styles from "./HeaderNav.module.css";
import useDropdown from "./useDropdown";
import HeaderDropdown from "./HeaderDropdown";
import LanguageSwitch from "../.././../../shared/components/LanguageSwitch/LanguageSwitch.jsx";

import { useLanguage } from "../../../../shared/i18n/LanguageContext.jsx";

export default function HeaderNav({ menu, i18n }) {
  const { lang, setLang } = useLanguage();

  const [mobileOpen, setMobileOpen] = useState(false);
  const { ref, isOpen, toggle, close } = useDropdown();

  const items = useMemo(() => menu ?? [], [menu]);

  const instagram = useMemo(() => {
    const list = menu ?? [];
    return (
      list.find(
        (i) => typeof i?.href === "string" && i.href.includes("instagram.com"),
      ) || null
    );
  }, [menu]);

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

    // ✅ estável entre idiomas (não depende de label)
    const isContacts = item.anchor === "#contacts";
    const isDisabled = isContacts;

    const iconOnlyDesktop = !isMobile && isExternal && Icon;
    const iconOnlyMobile = isMobile && isExternal && Icon;

    const baseCls = iconOnlyDesktop
      ? styles.iconLinkPlain
      : iconOnlyMobile
        ? styles.mobileIconLink
        : isMobile
          ? styles.mobileLink
          : styles.navLink;

    const cls = `${baseCls} ${isDisabled ? styles.linkDisabled : ""}`;

    const commonProps = {
      href: isDisabled ? undefined : href,
      className: cls,
      onClick: (e) => {
        if (isDisabled) {
          e.preventDefault();
          return;
        }
        if (isMobile) closeAll();
      },
      ...(isDisabled
        ? { "aria-disabled": true, tabIndex: -1 }
        : isExternal
          ? { target: "_blank", rel: "noreferrer noopener" }
          : null),
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

            {!isDisabled ? (
              <span className={styles.mobileLinkRight} aria-hidden="true">
                ↗
              </span>
            ) : (
              <span className={styles.mobileLinkRight} aria-hidden="true">
                —
              </span>
            )}
          </>
        ) : (
          item.label
        )}
      </a>
    );
  };

  const renderItems = (mode = "desktop", opts = {}) => {
    const isMobile = mode === "mobile";
    const hideInstagram = !!opts.hideExternalInstagram;

    return items
      .filter((item) => {
        if (!isMobile || !hideInstagram) return true;
        const isIg =
          typeof item?.href === "string" && item.href.includes("instagram.com");
        return !isIg;
      })
      .map((item) => {
        const hasDropdown = item.type === "dropdown";
        const open = hasDropdown && isOpen(item.label);

        if (!hasDropdown) return renderLink(item, mode);

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
              <span
                className={`${styles.caret} ${open ? styles.caretOpen : ""}`}
              >
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
  };

  return (
    <div ref={ref} className={styles.navWrap}>
      {/* Mobile top controls */}
      <div className={styles.mobileRightControls} aria-label="Mobile controls">
        {instagram ? renderLink(instagram, "desktop") : null}

        <LanguageSwitch
          i18n={i18n}
          mode="desktop"
          lang={lang}
          setLang={setLang}
        />

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
      </div>

      {/* Desktop: switch dentro do nav (gap igual) */}
      <div className={styles.desktopRow} aria-label="Header controls">
        <nav className={styles.nav} aria-label="Primary">
          {renderItems("desktop")}
          <LanguageSwitch
            i18n={i18n}
            mode="desktop"
            lang={lang}
            setLang={setLang}
          />
        </nav>
      </div>

      {/* Mobile panel (sem instagram e sem línguas) */}
      <div
        className={`${styles.mobilePanel} ${
          mobileOpen ? styles.mobilePanelOpen : ""
        }`}
      >
        <nav className={styles.mobileNav} aria-label="Menu mobile">
          {renderItems("mobile", { hideExternalInstagram: true })}
        </nav>
      </div>
    </div>
  );
}
