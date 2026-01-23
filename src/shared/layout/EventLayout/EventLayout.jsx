import { Link } from "react-router-dom";
import styles from "./EventLayout.module.css";
import Footer from "../../components/Footer/Footer.jsx";

export default function EventLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link className={styles.back} to="/">
          ← Voltar
        </Link>

        {children}
      </div>

      <Footer />
    </div>
  );
}
