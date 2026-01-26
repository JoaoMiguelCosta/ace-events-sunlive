// src/pages/Events/components/Pricing.jsx
import styles from "../EventPage.module.css";
import { CheckIcon } from "../../../ui/icons/index.js";

export default function Pricing({ content }) {
  const data = content?.pricing;
  if (!data?.plans?.length) return null;

  const title = data.title || "Custos";

  return (
    <section className={styles.pricingWrap} aria-label={title}>
      <div className={styles.pricingTitleRow}>
        <h2 className={styles.pricingTitle}>{title}</h2>
      </div>

      <div className={styles.pricingGrid}>
        {data.plans.map((p, idx) => (
          <div
            key={p.key || `${p.name}-${idx}`}
            className={`${styles.pricingCard} ${styles.glassCard}`}
          >
            <div className={styles.pricingTop}>
              <div className={styles.pricingName}>{p.name}</div>
              <div className={styles.pricingPrice}>{p.price}</div>
            </div>

            {p.items?.length ? (
              <ul className={styles.pricingList}>
                {p.items.map((it, i) => (
                  <li
                    key={`${p.key || idx}-${i}`}
                    className={styles.pricingItem}
                  >
                    <CheckIcon size={18} className={styles.pricingItemIcon} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
