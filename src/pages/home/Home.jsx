import styles from "./Home.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.jsx";

import EventsSection from "./components/Events/EventsSection.jsx";
import Partners from "./components/Partners/Partners.jsx";

import Footer from "./components/Footer/Footer.jsx";

import { headerContent } from "../../config/content/home.content.js";

export default function Home() {
  return (
    <main id="top" className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Hero />
        <About />

        {/* ✅ Events */}
        <EventsSection events={headerContent.events} />

        {/* ✅ Partners */}
        <Partners />
      </div>

      {/* ✅ Footer (full width) */}
      <Footer />
    </main>
  );
}
