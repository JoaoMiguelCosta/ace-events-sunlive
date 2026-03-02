// src/pages/Events/EventPage.jsx
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import {
  getEventBaseByKey,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/events/index.js";

import { EVENTS_BY_KEY } from "../../config/content/events/eventRoutes.js";

import EventLayout from "../../shared/layout/EventLayout/EventLayout.jsx";
import styles from "./EventPage.module.css";

import HeroSection from "./components/HeroSection.jsx";
import EventOverview from "./components/EventOverview.jsx";
import EventDescription from "./components/EventDescription.jsx";
import Program from "./components/Program.jsx";
import Pricing from "./components/Pricing.jsx";
import OptionalExtras from "./components/OptionalExtras.jsx";
import ImportantNotes from "./components/ImportantNotes.jsx";
import EventTeam from "./components/EventTeam.jsx";
import OfficialPartner from "./components/OfficialPartner.jsx";
import CombinedContact from "./components/CombinedContact.jsx";
import Registration from "./components/Registration.jsx";
import Footer from "../../shared/components/Footer/Footer.jsx";

export default function EventPage() {
  const { key } = useParams();

  if (EXTERNAL_EVENT_KEYS.has(key)) return <Navigate to="/" replace />;

  const eventBase = getEventBaseByKey(key);
  const content = EVENTS_BY_KEY?.[key] || null;

  if (!eventBase || !content) return <Navigate to="/" replace />;

  useEffect(() => {
    const rawTitle = content?.hero?.title || eventBase?.title || "ACE";
    const cleanTitle = String(rawTitle).replace(/\s+/g, " ").trim();
    document.title = cleanTitle;

    return () => {
      document.title = "ACE";
    };
  }, [content, eventBase]);

  const theme = content.theme || {};

  const themeVars = {
    "--bg": theme.bg,
    "--bgAlt": theme.bgAlt,
    "--surface": theme.surface,
    "--surfaceAlt": theme.surfaceAlt,
    "--primary": theme.primary,
    "--secondary": theme.secondary,
    "--accent": theme.accent,
    "--text": theme.text,
    "--textMuted": theme.textMuted,
    "--border": theme.border,
  };

  const useCombined = !!content?.flags?.useCombinedContact;

  return (
    <EventLayout style={themeVars}>
      <div className={styles.eventPage}>
        <HeroSection
          hero={content.hero}
          fallbackTitle={eventBase.title}
          flags={content.flags}
        />

        <EventOverview content={content} />

        {useCombined ? (
          <CombinedContact content={content} />
        ) : (
          <>
            <EventTeam content={content} />
            <OfficialPartner content={content} />
          </>
        )}

        <EventDescription content={content} />
        <Program content={content} />
        <Pricing content={content} />
        <OptionalExtras content={content} />
        <ImportantNotes content={content} />
        <Registration content={content} />
        <Footer />
      </div>
    </EventLayout>
  );
}
