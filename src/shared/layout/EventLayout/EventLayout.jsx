// src/shared/layout/EventLayout/EventLayout.jsx
import styles from "./EventLayout.module.css";

const hexToRgb = (hex) => {
  const h = String(hex || "")
    .replace("#", "")
    .trim();
  if (!h) return { r: 0, g: 0, b: 0 };
  const full =
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

const rgba = (hex, a) => {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default function EventLayout({ children, style }) {
  const bg = style?.["--bg"] || "#0b1020";
  const bgAlt = style?.["--bgAlt"] || bg;
  const primary = style?.["--primary"] || "#22c55e";
  const accent = style?.["--accent"] || "#60a5fa";

  const cardBg = [
    `radial-gradient(900px 420px at 18% 10%, ${rgba(accent, 0.1)} 0%, transparent 60%)`,
    `radial-gradient(760px 360px at 86% 22%, ${rgba(primary, 0.12)} 0%, transparent 62%)`,
    `linear-gradient(135deg, ${rgba(bgAlt, 0.4)} 0%, ${rgba(bg, 0.28)} 55%, rgba(255,255,255,0.03) 100%)`,
  ].join(",");

  const cardVars = {
    "--card-border": "rgba(255,255,255,0.10)",
    "--card-shadow": "0 16px 60px rgba(0,0,0,0.35)",
    "--card-bg": cardBg,
  };

  return (
    <div className={styles.wrapper} style={{ ...style, ...cardVars }}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
