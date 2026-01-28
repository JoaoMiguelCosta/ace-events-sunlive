import styles from "../EventPage.module.css";

function initials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function getLogoBoxClass(variant) {
  return variant === "wide"
    ? styles.partnerLogoBoxWide
    : variant === "tall"
      ? styles.partnerLogoBoxTall
      : styles.partnerLogoBox;
}

function PartnerCard({ name, description, logo, variant }) {
  const logoBoxClass = getLogoBoxClass(variant);

  return (
    <div className={`${styles.glassCard} ${styles.partnerCard}`}>
      <div className={logoBoxClass}>
        {logo ? (
          <img
            src={logo}
            alt={name}
            className={styles.partnerLogoImg}
            loading="lazy"
          />
        ) : (
          <div className={styles.partnerLogoPlaceholder} aria-hidden="true">
            {initials(name)}
          </div>
        )}
      </div>

      <div className={styles.partnerText}>
        <div className={styles.partnerName}>{name}</div>
        <div className={styles.partnerDescription}>{description}</div>
      </div>
    </div>
  );
}

export default function OfficialPartner({ content }) {
  const data = content?.officialPartner;
  if (!data) return null;

  const title = data.title || "Parceria";
  const partners = Array.isArray(data.partners) ? data.partners : [];

  // ✅ vários cards (caso EG)
  if (partners.length) {
    return (
      <section className={styles.partnerWrap} aria-label="Parceria">
        <h2 className={styles.partnerTitle}>{title}</h2>

        <div className={styles.partnerCards}>
          {partners.map((p, idx) => (
            <PartnerCard
              key={`${p.name || "partner"}-${idx}`}
              name={p.name || "Parceiro"}
              description={
                p.description ||
                "Official event partner and organizational support."
              }
              logo={p.logo || null}
              variant={p.logoVariant}
            />
          ))}
        </div>
      </section>
    );
  }

  // ✅ fallback antigo (1 card)
  const name = data.name || "Sunlive";
  const description =
    data.description || "Official event partner and organizational support.";
  const logo = data.logo || null;

  return (
    <section className={styles.partnerWrap} aria-label="Parceria">
      <h2 className={styles.partnerTitle}>{title}</h2>

      <PartnerCard
        name={name}
        description={description}
        logo={logo}
        variant={data.logoVariant}
      />
    </section>
  );
}
