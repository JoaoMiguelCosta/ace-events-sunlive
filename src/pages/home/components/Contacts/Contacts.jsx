import styles from "./Contacts.module.css";

function normalizePhone(raw) {
  const s = String(raw || "").trim();
  return s.replace(/\s+/g, "");
}

function ContactCard({ contact, featured = false }) {
  const phoneRaw = contact.phone ?? "";
  const phoneTel = normalizePhone(phoneRaw);

  const role = contact.role ?? "";
  const waHref = contact.whatsappHref ?? "";
  const WaIcon = contact.waIcon ?? null;

  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ""}`}
      role="listitem"
      aria-label={contact.name}
    >
      {/* Linha 1: Nome */}
      <h3 className={styles.name} title={contact.name}>
        {contact.name}
      </h3>

      {/* Linha 2: Função */}
      {role ? (
        <p className={styles.role} title={role}>
          {role}
        </p>
      ) : null}

      {/* Linha 3: Telefone */}
      <a
        className={styles.phone}
        href={`tel:${phoneTel}`}
        aria-label={`Ligar para ${contact.name}`}
        title="Ligar"
      >
        {phoneRaw}
      </a>

      {/* Linha 4: WhatsApp */}
      {waHref && WaIcon ? (
        <a
          className={styles.waBtn}
          href={waHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir WhatsApp para ${contact.name}`}
          title="WhatsApp"
        >
          <WaIcon size={22} className={styles.waIcon} />
        </a>
      ) : null}
    </article>
  );
}

export default function Contacts({ content }) {
  if (!content) return null;

  const {
    id = "contacts",
    title = "Contacts",
    subtitle = "",
    items = [],
  } = content;

  const list = Array.isArray(items) ? items : [];
  if (!list.length) return null;

  const [lucas, ...rest] = list;
  const hasLucas = Boolean(lucas);

  return (
    <section id={id} className={styles.section} aria-label={title}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </header>

        {hasLucas ? (
          <div
            className={styles.gridTop}
            role="list"
            aria-label={`${title} — Lucas`}
          >
            <div className={styles.lucasSlot}>
              <ContactCard contact={lucas} featured />
            </div>
          </div>
        ) : null}

        <div
          className={styles.gridBottom}
          role="list"
          aria-label={`${title} — restantes`}
        >
          {rest.map((c) => {
            const key = c.key ?? c.phone ?? c.name;
            return <ContactCard key={key} contact={c} />;
          })}
        </div>
      </div>
    </section>
  );
}
