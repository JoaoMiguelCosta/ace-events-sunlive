import { useEffect, useState } from "react";
import styles from "./PairedMonthsRow.module.css";

import EventCard from "./EventCard.jsx";
import EventsMonthGroup from "./EventsMonthGroup.jsx";
import { getPairedRowModel } from "./hooks/useEventsRows.js";

export default function PairedMonthsRow({ row }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)"); // ✅ 1024 inclusive
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // 📱 TABLET/MOBILE (<=1024) → cada mês vira um bloco normal
  if (isMobile) {
    const [left, right] = row.items;

    return (
      <div className={styles.pairedBlock}>
        <EventsMonthGroup label={left.label} items={left.items} />
        <EventsMonthGroup label={right.label} items={right.items} />
      </div>
    );
  }

  // 🖥 DESKTOP (>1024) → layout emparelhado
  const { leftLabel, rightLabel, slots, rightHeaderCol } =
    getPairedRowModel(row);

  const isTwoCards = slots.length === 2;

  return (
    <div className={styles.pairedBlock}>
      <div
        className={`${styles.pairedHeader} ${isTwoCards ? styles.cols2 : ""}`}
      >
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

      <div className={`${styles.rowGrid} ${isTwoCards ? styles.cols2 : ""}`}>
        {slots.map((ev) => (
          <EventCard key={ev.key} event={ev} />
        ))}
      </div>
    </div>
  );
}
