// src/pages/Home/Home.jsx
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

    const hashMap = {
      pt: {
        "#events": "#eventos",
        "#partners": "#parceiros",
        "#contacts": "#contactos",
        "#about-what": "#sobre-o-ace",
        "#about-concept": "#conceito-base",
        "#about-events": "#eventos-ace",
        "#about-region": "#interacao-com-a-regiao",
      },
      en: {
        "#eventos": "#events",
        "#parceiros": "#partners",
        "#contactos": "#contacts",
        "#sobre-o-ace": "#about-what",
        "#conceito-base": "#about-concept",
        "#eventos-ace": "#about-events",
        "#interacao-com-a-regiao": "#about-region",
      },
    };

    const mappedHash = hashMap[lang]?.[hash] ?? hash;

    if (mappedHash !== hash) {
      window.history.replaceState(null, "", mappedHash);
    }

    const el = document.querySelector(mappedHash);
    if (!el) return;

    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, lang]);

  return (
    <main id="top" className={styles.wrapper}>
      <div className={styles.container}>
        <Header content={content.header} />

        <Hero content={content.hero} />
        <About content={content.about} />
        <EventsSection events={content.events} />
        <Contacts content={content.contacts} />
        <Partners content={content.partners} />
      </div>

      <Footer content={content.footer} variant="home" />
    </main>
  );
}
