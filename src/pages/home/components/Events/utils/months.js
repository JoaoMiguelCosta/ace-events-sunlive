// src/pages/home/components/Events/utils/months.js

export const MONTHS_BY_LANG = {
  en: [
    { value: 1, short: "Jan", label: "January" },
    { value: 2, short: "Feb", label: "February" },
    { value: 3, short: "Mar", label: "March" },
    { value: 4, short: "Apr", label: "April" },
    { value: 5, short: "May", label: "May" },
    { value: 6, short: "Jun", label: "June" },
    { value: 7, short: "Jul", label: "July" },
    { value: 8, short: "Aug", label: "August" },
    { value: 9, short: "Sep", label: "September" },
    { value: 10, short: "Oct", label: "October" },
    { value: 11, short: "Nov", label: "November" },
    { value: 12, short: "Dec", label: "December" },
  ],
  pt: [
    { value: 1, short: "Jan", label: "Janeiro" },
    { value: 2, short: "Fev", label: "Fevereiro" },
    { value: 3, short: "Mar", label: "Março" },
    { value: 4, short: "Abr", label: "Abril" },
    { value: 5, short: "Mai", label: "Maio" },
    { value: 6, short: "Jun", label: "Junho" },
    { value: 7, short: "Jul", label: "Julho" },
    { value: 8, short: "Ago", label: "Agosto" },
    { value: 9, short: "Set", label: "Setembro" },
    { value: 10, short: "Out", label: "Outubro" },
    { value: 11, short: "Nov", label: "Novembro" },
    { value: 12, short: "Dez", label: "Dezembro" },
  ],
};

export function getMonths(lang = "en") {
  return MONTHS_BY_LANG[lang] ?? MONTHS_BY_LANG.en;
}

export function monthLabel(monthIndex, lang = "en") {
  const list = getMonths(lang);
  return list.find((m) => m.value === monthIndex)?.label ?? "Month";
}

export function inferMonthIndexFromEvent(ev, lang = "en") {
  const m1 = ev?.start?.month;
  if (Number.isInteger(m1) && m1 >= 1 && m1 <= 12) return m1;

  // ✅ se já existir monthIndex (ideal), usa
  const m0 = ev?.monthIndex;
  if (Number.isInteger(m0) && m0 >= 1 && m0 <= 12) return m0;

  const m2 = inferMonthIndex(ev?.month, lang);
  if (m2) return m2;

  const m3 = inferMonthIndex(ev?.dateText, lang);
  if (m3) return m3;

  return 1;
}

/**
 * Mapeia texto -> monthIndex, suportando EN/PT.
 * - aceita "August/September", "Agosto/Setembro"
 * - aceita abreviações
 */
export function inferMonthIndex(text, lang = "en") {
  if (!text) return null;
  const t = String(text).toLowerCase();

  // Dicionário EN/PT
  const dict = {
    en: [
      { i: 1, keys: ["january", "jan"] },
      { i: 2, keys: ["february", "feb"] },
      { i: 3, keys: ["march", "mar"] },
      { i: 4, keys: ["april", "apr"] },
      { i: 5, keys: ["may"] },
      { i: 6, keys: ["june", "jun"] },
      { i: 7, keys: ["july", "jul"] },
      { i: 8, keys: ["august", "aug"] },
      { i: 9, keys: ["september", "sep"] },
      { i: 10, keys: ["october", "oct"] },
      { i: 11, keys: ["november", "nov"] },
      { i: 12, keys: ["december", "dec"] },
    ],
    pt: [
      { i: 1, keys: ["janeiro", "jan"] },
      { i: 2, keys: ["fevereiro", "fev"] },
      { i: 3, keys: ["março", "marco", "mar"] },
      { i: 4, keys: ["abril", "abr"] },
      { i: 5, keys: ["maio", "mai"] },
      { i: 6, keys: ["junho", "jun"] },
      { i: 7, keys: ["julho", "jul"] },
      { i: 8, keys: ["agosto", "ago"] },
      { i: 9, keys: ["setembro", "set"] },
      { i: 10, keys: ["outubro", "out"] },
      { i: 11, keys: ["novembro", "nov"] },
      { i: 12, keys: ["dezembro", "dez"] },
    ],
  };

  // ✅ tenta primeiro no idioma atual
  const first = dict[lang] ?? dict.en;
  for (const m of first) {
    if (m.keys.some((k) => t.includes(k))) return m.i;
  }

  // ✅ fallback no outro idioma
  const fallback = lang === "pt" ? dict.en : dict.pt;
  for (const m of fallback) {
    if (m.keys.some((k) => t.includes(k))) return m.i;
  }

  return null;
}
