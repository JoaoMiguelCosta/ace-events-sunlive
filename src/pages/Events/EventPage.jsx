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
import EventOverview from "./components/EventOverview.jsx";
import EventDescription from "./components/EventDescription.jsx";
import Program from "./components/Program.jsx";
import Pricing from "./components/Pricing.jsx";
import OptionalExtras from "./components/OptionalExtras.jsx";
import ImportantNotes from "./components/ImportantNotes.jsx"; // ✅ novo
import EventTeam from "./components/EventTeam.jsx";
import OfficialPartner from "./components/OfficialPartner.jsx";
import CombinedContact from "./components/CombinedContact.jsx";
import Registration from "./components/Registration.jsx";

export default function EventPage() {
  const { key } = useParams();

  if (EXTERNAL_EVENT_KEYS.has(key)) return <Navigate to="/" replace />;

  const eventBase =
    headerContent?.events?.items?.find((e) => e.key === key) || null;

  const content = EVENTS_BY_KEY?.[key] || null;

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
      </div>
    </EventLayout>
  );
}
