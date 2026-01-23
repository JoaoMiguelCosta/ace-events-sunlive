import styles from "./HeaderDropdown.module.css";

export default function HeaderDropdown({ isOpen, items, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdown} role="menu" aria-label="About submenu">
      {items.map((sub) => {
        const Icon = sub.icon;

        return (
          <a
            key={sub.label}
            href={sub.anchor}
            className={styles.dropdownItem}
            role="menuitem"
            onClick={onClose}
          >
            <span className={styles.iconWrap} aria-hidden="true">
              {Icon ? (
                <Icon
                  size={18}
                  className={styles.icon}
                  focusable="false"
                  stroke="currentColor"
                  strokeWidth={2.25}
                />
              ) : null}
            </span>

            <span className={styles.dropdownLabel}>{sub.label}</span>
          </a>
        );
      })}
    </div>
  );
}
