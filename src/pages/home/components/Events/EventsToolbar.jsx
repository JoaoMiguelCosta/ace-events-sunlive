import styles from "./EventsToolbar.module.css";

import ToolbarChip from "./ToolbarChip.jsx";
import SportDropdown from "./SportDropdown.jsx";

import { useLanguage } from "../../../../shared/i18n/LanguageContext.jsx";

export default function EventsToolbar({
  months,
  sportOptions,
  activeMonth,
  setActiveMonth,
  activeSport,
  setActiveSport,
  activeFilter,
}) {
  const { lang } = useLanguage();

  const monthIsActive = activeFilter === "month";
  const sportIsActive = activeFilter === "sport";

  const hasAnyEvents = months?.some((m) => !m.disabled);

  const allLabel = lang === "pt" ? "Todos" : "All";
  const allDisciplinesLabel =
    lang === "pt" ? "Disciplinas (todas)" : "All Disciplines";

  return (
    <div
      className={styles.toolbar}
      role="region"
      aria-label="Filtros de eventos"
    >
      <div className={styles.chips} role="tablist" aria-label="Meses">
        <ToolbarChip
          label={allLabel}
          active={monthIsActive && activeMonth === "all"}
          onClick={() => setActiveMonth("all")}
          disabled={!hasAnyEvents}
        />

        {months.map((m) => (
          <ToolbarChip
            key={m.value}
            label={m.short}
            title={m.label}
            active={monthIsActive && activeMonth === m.value}
            onClick={() => setActiveMonth(m.value)}
            disabled={m.disabled}
          />
        ))}
      </div>

      <div className={styles.right}>
        <SportDropdown
          options={sportOptions}
          value={activeSport}
          onChange={setActiveSport}
          allLabel={allDisciplinesLabel}
          active={sportIsActive}
        />
      </div>
    </div>
  );
}
