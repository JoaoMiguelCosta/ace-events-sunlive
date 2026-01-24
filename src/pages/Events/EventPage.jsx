// src/pages/Events/EventPage.jsx
import { useParams, Navigate } from "react-router-dom";
import {
  headerContent,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/home.content.js";
import { EVENTS_BY_KEY } from "../../config/content/events/eventRoutes.js";

import EventLayout from "../../shared/layout/EventLayout/EventLayout.jsx";
import styles from "./EventPage.module.css";

import HeroSection from "./components/HeroSection.jsx";

export default function EventPage() {
  const { key } = useParams();

  if (EXTERNAL_EVENT_KEYS.has(key)) return <Navigate to="/" replace />;

  const eventBase =
    headerContent?.events?.items?.find((e) => e.key === key) || null;
  const content = EVENTS_BY_KEY[key];

  if (!eventBase || !content) return <Navigate to="/" replace />;

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

  return (
    <EventLayout style={themeVars}>
      <div className={styles.eventPage}>
        <HeroSection hero={content.hero} fallbackTitle={eventBase.title} />
      </div>
    </EventLayout>
  );
}
