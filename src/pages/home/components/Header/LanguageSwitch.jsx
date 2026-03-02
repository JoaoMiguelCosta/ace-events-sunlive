import styles from "./LanguageSwitch.module.css";

export default function LanguageSwitch({
  i18n,
  lang,
  setLang,
  mode = "desktop",
  className = "",
}) {
  if (!i18n?.options?.length) return null;

  const { options, label = "Language", defaultKey } = i18n;

  const activeKey = lang ?? defaultKey ?? options[0]?.key;

  const wrapCls = `${styles.wrap} ${
    mode === "mobile" ? styles.wrapMobile : ""
  } ${className}`.trim();

  return (
    <div className={wrapCls} role="group" aria-label={label}>
      {options.map((opt) => {
        const isActive = opt.key === activeKey;

        return (
          <button
            key={opt.key}
            type="button"
            className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
            aria-pressed={isActive}
            onClick={() => setLang?.(opt.key)}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
