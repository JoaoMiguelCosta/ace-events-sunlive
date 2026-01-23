import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./SportDropdown.module.css";

export default function SportDropdown({
  options,
  value,
  onChange,
  allLabel = "Todas",
  active = false, // ✅ novo
}) {
  const items = useMemo(() => ["all", ...(options ?? [])], [options]);
  const labelByValue = (v) => (v === "all" ? allLabel : v);

  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // ✅ fecha ao clicar fora
  useEffect(() => {
    const onDown = (e) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  // ✅ ESC fecha
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={`${styles.button} ${active ? styles.buttonActive : ""}`} // ✅
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.label}>{labelByValue(value)}</span>
        <span className={styles.chevron} aria-hidden="true" />
      </button>

      {open ? (
        <ul className={styles.menu} role="listbox">
          {items.map((val) => {
            const selected = val === value;
            return (
              <li key={val} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`${styles.item} ${
                    selected ? styles.itemActive : ""
                  }`}
                  onClick={() => {
                    onChange(val);
                    setOpen(false);
                  }}
                >
                  {labelByValue(val)}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
