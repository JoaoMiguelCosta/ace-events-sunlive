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

  const cards = [...(left?.items ?? []), ...(right?.items ?? [])];
  const slots = cards.slice(0, 3);

  // ✅ título da direita deve alinhar com o 1º card do mês da direita
  const rightHeaderCol = leftCount >= 2 ? 3 : 2;

  return {
    leftLabel: left?.label ?? "",
    rightLabel: right?.label ?? "",
    slots,
    rightHeaderCol,
  };
}