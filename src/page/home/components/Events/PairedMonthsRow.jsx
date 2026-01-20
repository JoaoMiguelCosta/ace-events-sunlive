import { useEffect, useState } from "react";
import styles from "./PairedMonthsRow.module.css";

import EventCard from "./EventCard.jsx";
import EventsMonthGroup from "./EventsMonthGroup.jsx";
import { getPairedRowModel } from "./hooks/useEventsRows.js";

export default function PairedMonthsRow({ row }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 560px)");
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // 📱 MOBILE → cada mês vira um bloco normal
  if (isMobile) {
    const [left, right] = row.items;

    return (
      <div className={styles.pairedBlock}>
        <EventsMonthGroup label={left.label} items={left.items} />
        <EventsMonthGroup label={right.label} items={right.items} />
      </div>
    );
  }

  // 🖥 DESKTOP / TABLET → layout emparelhado
  const { leftLabel, rightLabel, slots, needsSpacer, rightHeaderCol } =
    getPairedRowModel(row);

  return (
    <div className={styles.pairedBlock}>
      <div className={styles.pairedHeader}>
        <div className={styles.pairedTitleLeft}>
          <span className={styles.pairedMonth}>{leftLabel}</span>
        </div>

        <div
          className={`${styles.pairedTitleRight} ${
            rightHeaderCol === 3 ? styles.rightCol3 : ""
          }`}
        >
          <span className={styles.pairedMonth}>{rightLabel}</span>
        </div>
      </div>

      <div className={styles.rowGrid3}>
        {slots.map((ev) => (
          <EventCard key={ev.key} event={ev} />
        ))}

        {needsSpacer ? (
          <div className={styles.spacerCard} aria-hidden="true" />
        ) : null}
      </div>
    </div>
  );
}
