import { useMemo } from "react";
import { buildMonthRows } from "../utils/buildMonthRows.js";

/**
 * Transforma grouped -> rows e prepara dados para a linha emparelhada.
 */
export function useEventsRows(grouped, activeMonth) {
  const isAll = activeMonth === "all";

  const rows = useMemo(() => {
    return buildMonthRows(grouped, isAll);
  }, [grouped, isAll]);

  return { rows, isAll };
}

/**
 * Para uma row emparelhada (2 meses), devolve:
 * - left/right labels
 * - slots (máx 3 cards)
 * - needsSpacer (quando há 2 cards)
 * - rightHeaderCol (2 ou 3) -> onde deve ficar o título do mês da direita
 */
export function getPairedRowModel(row) {
  const [left, right] = row.items;

  const leftCount = left?.items?.length ?? 0;
  const rightCount = right?.items?.length ?? 0;

  const cards = [...left.items, ...right.items];
  const slots = cards.slice(0, 3);

  // ✅ Coluna do título da direita:
  // - se a esquerda já ocupa 2 cards -> direita começa na coluna 3
  // - se a esquerda ocupa 1 e a direita ocupa 2 -> queremos alinhar com o último (coluna 3)
  // - caso normal -> coluna 2
  const rightHeaderCol =
    leftCount >= 2 ? 3 : leftCount === 1 && rightCount >= 2 ? 3 : 2;

  return {
    leftLabel: left.label,
    rightLabel: right.label,
    slots,
    needsSpacer: slots.length === 2,
    rightHeaderCol,
  };
}