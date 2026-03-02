import styles from "./EventsSection.module.css";

import EventsToolbar from "./EventsToolbar.jsx";
import EventsMonthGroup from "./EventsMonthGroup.jsx";
import PairedMonthsRow from "./PairedMonthsRow.jsx";

import { useEventsData } from "./hooks/useEventsData.js";
import { useEventsRows } from "./hooks/useEventsRows.js";

import { useLanguage } from "../../../../shared/i18n/LanguageContext.jsx";

export default function EventsSection({ events }) {
  const { lang } = useLanguage();

  const {
    months,
    sportOptions,
    activeMonth,
    setActiveMonth,
    activeSport,
    setActiveSport,
    activeFilter,
    grouped,
  } = useEventsData(events, lang);

  const { rows } = useEventsRows(grouped, activeMonth);

  const sectionTitle = events?.title ?? (lang === "pt" ? "Eventos" : "Events");
  const emptyText = lang === "pt" ? "Sem resultados" : "No results";

  return (
    <section
      id={events?.id ?? "events"}
      className={styles.section}
      aria-label={sectionTitle}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{sectionTitle}</h2>
        </header>

        <EventsToolbar
          months={months}
          sportOptions={sportOptions}
          activeMonth={activeMonth}
          setActiveMonth={setActiveMonth}
          activeSport={activeSport}
          setActiveSport={setActiveSport}
          activeFilter={activeFilter}
        />

        <div className={styles.groups}>
          {grouped.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>{emptyText}</p>
            </div>
          ) : (
            rows.map((row) => {
              if (row.items.length === 1) {
                const g = row.items[0];
                return (
                  <div
                    key={row.key}
                    className={`${styles.row} ${styles.rowSingle}`}
                  >
                    <EventsMonthGroup label={g.label} items={g.items} />
                  </div>
                );
              }

              return <PairedMonthsRow key={row.key} row={row} />;
            })
          )}
        </div>
      </div>
    </section>
  );
}
