/**
 * Regras:
 * - Só em "All":
 *   - Se dois meses seguidos tiverem 1 evento cada -> lado a lado (1+1)
 *   - Novembro emparelha sempre com Dezembro (mesmo sendo 2+1)
 * - Fora de "All": 1 mês por linha
 */
export function buildMonthRows(groups, isAll) {
  if (!isAll) return groups.map((g) => ({ key: g.key, items: [g] }));

  const rows = [];
  for (let i = 0; i < groups.length; i++) {
    const current = groups[i];
    const next = groups[i + 1];

    const currentMonth = getMonthFromKey(current?.key); // "YYYY-MM" -> MM
    const nextMonth = getMonthFromKey(next?.key);

    const isNovember = currentMonth === 11;
    const isDecemberNext = nextMonth === 12;

    const canPairOneOne =
      current?.items?.length === 1 && next?.items?.length === 1;

    const forcePairNovDec = isNovember && isDecemberNext;

    if ((canPairOneOne || forcePairNovDec) && next) {
      rows.push({
        key: `${current.key}__${next.key}`,
        items: [current, next],
      });
      i += 1;
    } else {
      rows.push({ key: current.key, items: [current] });
    }
  }

  return rows;
}

function getMonthFromKey(key) {
  if (!key || typeof key !== "string") return null;
  const parts = key.split("-");
  const mm = Number(parts[1]);
  return Number.isFinite(mm) ? mm : null;
}
