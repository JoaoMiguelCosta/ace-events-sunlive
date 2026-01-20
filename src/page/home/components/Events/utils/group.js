export function groupByMonthKey(items) {
  const map = new Map();

  for (const ev of items) {
    const year = ev.year ?? 2026;
    const monthIndex = ev.monthIndex ?? 1;

    const key = `${year}-${String(monthIndex).padStart(2, "0")}`;

    if (!map.has(key)) {
      map.set(key, { key, year, monthIndex, items: [] });
    }

    map.get(key).items.push(ev);
  }

  return Array.from(map.values()).sort((a, b) => a.key.localeCompare(b.key));
}
