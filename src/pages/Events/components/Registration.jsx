// src/pages/Events/components/Registration.jsx
import styles from "../EventPage.module.css";

export default function Registration({ content }) {
  const data = content?.registration;
  if (!data) return null;

  const id = data.id || "register";

  const title = data.title || "Garante a tua vaga";
  const subtitle =
    data.subtitle ||
    "Não percas esta oportunidade única de treinar com os melhores. As vagas são limitadas!";
  const buttonLabel = data.buttonLabel || "Inscrever Agora";
  const helper = data.helper || "A inscrição é feita via Google Forms.";

  const isDisabled = true; // ✅ por enquanto desativado

  return (
    <section id={id} className={styles.regWrap} aria-label={title}>
      <div className={styles.regInner}>
        <h2 className={styles.regTitle}>{title}</h2>
        <p className={styles.regSubtitle}>{subtitle}</p>

        <a
          href={isDisabled ? undefined : data.href || "#"}
          className={`${styles.regBtn} ${isDisabled ? styles.regBtnDisabled : ""}`}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : 0}
          onClick={(e) => {
            if (isDisabled) e.preventDefault();
          }}
        >
          {buttonLabel}
        </a>

        <div className={styles.regHelper}>{helper}</div>
      </div>
    </section>
  );
}
