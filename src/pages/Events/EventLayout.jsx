import { Link } from "react-router-dom";
import styles from "./EventPage.module.css";

export default function EventLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.back} to="/">
          ← Voltar
        </Link>

        {children}
      </div>
    </div>
  );
}
