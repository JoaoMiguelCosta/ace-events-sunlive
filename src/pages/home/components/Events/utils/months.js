export const MONTHS = [
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
];

export function inferMonthIndexFromEvent(ev) {
  const m1 = ev?.start?.month;
  if (Number.isInteger(m1) && m1 >= 1 && m1 <= 12) return m1;

  const m2 = inferMonthIndex(ev?.month);
  if (m2) return m2;

  const m3 = inferMonthIndex(ev?.dateText);
  if (m3) return m3;

  return 1;
}

export function inferMonthIndex(text) {
  if (!text) return null;
  const t = String(text).toLowerCase();

  if (t.includes("january") || t.includes("jan")) return 1;
  if (t.includes("february") || t.includes("feb")) return 2;
  if (t.includes("march") || t.includes("mar")) return 3;
  if (t.includes("april") || t.includes("apr")) return 4;
  if (t.includes("may")) return 5;
  if (t.includes("june") || t.includes("jun")) return 6;
  if (t.includes("july") || t.includes("jul")) return 7;
  if (t.includes("august") || t.includes("aug")) return 8;
  if (t.includes("september") || t.includes("sep")) return 9;
  if (t.includes("october") || t.includes("oct")) return 10;
  if (t.includes("november") || t.includes("nov")) return 11;
  if (t.includes("december") || t.includes("dec")) return 12;

  return null;
}

export function monthLabel(monthIndex) {
  return MONTHS.find((m) => m.value === monthIndex)?.label ?? "Month";
}
