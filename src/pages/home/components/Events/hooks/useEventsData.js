import { useMemo, useState } from "react";
import {
  getMonths,
  inferMonthIndexFromEvent,
  monthLabel,
} from "../utils/months.js";
import { getSportOptions, tokenizeSports } from "../utils/sports.js";
import { groupByMonthKey } from "../utils/group.js";

export function useEventsData(events, lang = "en") {
  const items = events?.items ?? [];

  const [activeMonth, setActiveMonth] = useState("all");
  const [activeSport, setActiveSport] = useState("all");
  const [activeFilter, setActiveFilter] = useState("month");

  const selectMonth = (val) => {
    setActiveFilter("month");
    setActiveMonth(val);
  };

  const selectSport = (val) => {
    setActiveFilter("sport");
    setActiveSport(val);
    if (val === "all") setActiveMonth("all");
  };

  const normalized = useMemo(() => {
    return items.map((ev) => {
      const sportRaw = (ev.sport ?? "").trim();

      return {
        ...ev,
        year: ev.year ?? 2026,
        monthIndex: inferMonthIndexFromEvent(ev, lang),
        sport: sportRaw,
        sportTokens: tokenizeSports(sportRaw),
      };
    });
  }, [items, lang]);

  const sportOptions = useMemo(() => getSportOptions(normalized), [normalized]);

  const filtered = useMemo(() => {
    return normalized.filter((ev) => {
      if (activeFilter === "month") {
        return activeMonth === "all" ? true : ev.monthIndex === activeMonth;
      }
      return activeSport === "all"
        ? true
        : ev.sportTokens.includes(activeSport);
    });
  }, [normalized, activeMonth, activeSport, activeFilter]);

  const grouped = useMemo(() => {
    const groups = groupByMonthKey(filtered);
    return groups.map((g) => ({
      ...g,
      label: `${monthLabel(g.monthIndex, lang)} ${g.year}`,
    }));
  }, [filtered, lang]);

  const monthHasEvents = useMemo(() => {
    const base =
      activeFilter === "sport" && activeSport !== "all"
        ? normalized.filter((ev) => ev.sportTokens.includes(activeSport))
        : normalized;

    const set = new Set(base.map((ev) => ev.monthIndex));
    return set;
  }, [normalized, activeFilter, activeSport]);

  const months = useMemo(() => {
    const list = getMonths(lang);
    return list.map((m) => ({
      ...m,
      disabled: !monthHasEvents.has(m.value),
    }));
  }, [monthHasEvents, lang]);

  return {
    months,
    sportOptions,

    activeMonth,
    activeSport,

    setActiveMonth: selectMonth,
    setActiveSport: selectSport,

    activeFilter,

    totalCount: normalized.length,
    shownCount: filtered.length,
    grouped,
  };
}
