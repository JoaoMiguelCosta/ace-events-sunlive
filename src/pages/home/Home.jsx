import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Home.module.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.jsx";

import EventsSection from "./components/Events/EventsSection.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Partners from "./components/Partners/Partners.jsx";

import Footer from "../../shared/components/Footer/Footer.jsx";

import { useLanguage } from "../../shared/i18n/LanguageContext.jsx";
import { getHomeContent } from "../../config/content/home.content.js";

export default function Home() {
  const { hash } = useLocation();
  const { lang } = useLanguage();

  const content = useMemo(() => getHomeContent(lang), [lang]);

  useEffect(() => {
    document.title = "ACE - Athletic Challenge Event";
  }, [lang]);

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
        <Header content={content.header} />

        <Hero content={content.hero} />
        <About content={content.about} />

        <section id="events">
          <EventsSection events={content.events} />
        </section>

        <Contacts content={content.contacts} />
        <Partners content={content.partners} />
      </div>

      <Footer content={content.footer} variant="home" />
    </main>
  );
}
