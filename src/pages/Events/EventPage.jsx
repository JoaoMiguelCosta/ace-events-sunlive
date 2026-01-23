// src/pages/Events/EventPage.jsx
import { useParams, Navigate } from "react-router-dom";
import {
  headerContent,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/home.content.js";
import { EVENTS_BY_KEY } from "../../config/content/events/eventRoutes.js";


import EventLayout from "../../shared/layout/EventLayout/EventLayout.jsx";

export default function EventPage() {
  const { key } = useParams();

  // 🔸 eventos externos → fora do site
  if (EXTERNAL_EVENT_KEYS.has(key)) {
    return <Navigate to="/" replace />;
  }

  // 🔸 "evento base" (lista oficial)
  const eventBase = headerContent.events.items.find((e) => e.key === key);

  // 🔸 conteúdo detalhado (página)
  const content = EVENTS_BY_KEY[key];

  if (!eventBase || !content) {
    return <Navigate to="/" replace />;
  }

  return (
    <EventLayout>
      {/* A partir daqui é o TEU template fixo.
          Liga as secções ao "content". */}
      {/* Ex.: <Hero data={content.hero} /> */}
      {/* Ex.: <InfoCards items={content.infoCards} /> */}
      {/* Ex.: <Responsaveis items={content.responsaveis} /> */}
      {/* Ex.: <Partner data={content.partner} /> */}
      {/* Ex.: <About data={content.about} /> */}
      {/* Ex.: <Program data={content.program} /> */}

      {/* Enquanto não ligares aos componentes, podes testar assim: */}
      <h1>{content.hero?.title || eventBase.title}</h1>
      <p>{content.hero?.dateLabel}</p>
      <p>{content.hero?.locationLabel}</p>
    </EventLayout>
  );
}
