import styles from "./ToolbarChip.module.css";

export default function ToolbarChip({
  label,
  active,
  onClick,
  title,
  disabled = false,
}) {
  return (
    <button
      type="button"
      className={`${styles.chip} ${active ? styles.active : ""} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={disabled ? undefined : onClick}
      title={title}
      disabled={disabled}
      role="tab"
      aria-selected={active}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}
