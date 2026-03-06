// src/pages/Events/EventPage.jsx
import { useEffect, useMemo } from "react";
import {
  useParams,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  getEventBaseByKey,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/events/index.js";

import { getEventContentByKey } from "../../config/content/events/eventRoutes.js";
import { useLanguage } from "../../shared/i18n/LanguageContext.jsx";

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

export default function EventPage() {
  const { key } = useParams();
  const { lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  if (!key) return <Navigate to="/" replace />;
  if (EXTERNAL_EVENT_KEYS.has(key)) return <Navigate to="/" replace />;

  const eventBase = useMemo(() => getEventBaseByKey(key, lang), [key, lang]);
  const content = useMemo(() => getEventContentByKey(key, lang), [key, lang]);

  if (!eventBase || !content) return <Navigate to="/" replace />;

  useEffect(() => {
    const isPtRoute = location.pathname.startsWith("/eventos/");
    const isEnRoute = location.pathname.startsWith("/events/");

    const expectedBase = lang === "pt" ? "/eventos" : "/events";
    const expectedPath = `${expectedBase}/${key}${location.hash || ""}`;

    if ((lang === "pt" && isEnRoute) || (lang === "en" && isPtRoute)) {
      navigate(expectedPath, { replace: true });
    }
  }, [lang, key, location.pathname, location.hash, navigate]);

  useEffect(() => {
    const rawTitle = content?.hero?.title || eventBase?.title || "ACE";
    const cleanTitle = String(rawTitle).replace(/\s+/g, " ").trim();
    document.title = cleanTitle;

    return () => {
      document.title = "ACE";
    };
  }, [content, eventBase]);

  const theme = content?.theme ?? {};

  const themeVars = {
    "--bg": theme.bg ?? undefined,
    "--bgAlt": theme.bgAlt ?? undefined,
    "--surface": theme.surface ?? undefined,
    "--surfaceAlt": theme.surfaceAlt ?? undefined,
    "--primary": theme.primary ?? undefined,
    "--secondary": theme.secondary ?? undefined,
    "--accent": theme.accent ?? undefined,
    "--text": theme.text ?? undefined,
    "--textMuted": theme.textMuted ?? undefined,
    "--border": theme.border ?? undefined,
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
