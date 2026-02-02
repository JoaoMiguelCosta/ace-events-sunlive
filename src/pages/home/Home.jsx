import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Home.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.jsx";

import EventsSection from "./components/Events/EventsSection.jsx";
import Partners from "./components/Partners/Partners.jsx";

import Footer from "../../shared/components/Footer/Footer.jsx";

import { headerContent } from "../../config/content/home.content.js";

export default function Home() {
  const { hash } = useLocation();

  // ✅ title da Home
  useEffect(() => {
    document.title = "ACE - Athletic Challenge Event";
  }, []);

  // ✅ scroll suave para âncoras (/#events, /#partners, etc.)
  useEffect(() => {
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <main id="top" className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <Hero />
        <About />

        {/* ✅ Events (âncora para voltar do evento) */}
        <section id="events">
          <EventsSection events={headerContent.events} />
        </section>

        {/* ✅ Partners */}
        <Partners />
      </div>

      {/* ✅ Footer (full width) */}
      <Footer />
    </main>
  );
}
