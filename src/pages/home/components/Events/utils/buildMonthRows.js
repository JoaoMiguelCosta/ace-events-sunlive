/**
 * Regras:
 * - Só em "All":
 *   - Se dois meses seguidos tiverem no total ATÉ 3 eventos -> lado a lado (1+1, 1+2, 2+1)
 *   - Novembro emparelha sempre com Dezembro
 * - Fora de "All": 1 mês por linha
 */
export function buildMonthRows(groups, isAll) {
  if (!isAll) return groups.map((g) => ({ key: g.key, items: [g] }));

  const rows = [];
  for (let i = 0; i < groups.length; i++) {
    const current = groups[i];
    const next = groups[i + 1];

    if (!current) continue;

    const currentMonth = getMonthFromKey(current?.key); // "YYYY-MM" -> MM
    const nextMonth = getMonthFromKey(next?.key);

    const currentCount = current?.items?.length ?? 0;
    const nextCount = next?.items?.length ?? 0;

    const isNovember = currentMonth === 11;
    const isDecemberNext = nextMonth === 12;

    // ✅ regra geral: emparelhar se couber numa linha de 3 cards
    // (ex: Maio(1) + Junho(2) => 3)
    const canPairUpToThree =
      next &&
      currentCount > 0 &&
      nextCount > 0 &&
      currentCount + nextCount <= 3;

    // ✅ regra especial: Nov + Dec sempre emparelhado
    const forcePairNovDec = next && isNovember && isDecemberNext;

    if (forcePairNovDec || canPairUpToThree) {
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
