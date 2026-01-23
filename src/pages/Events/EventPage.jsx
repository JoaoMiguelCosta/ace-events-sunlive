import { useParams, Navigate } from "react-router-dom";
import {
  headerContent,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/home.content.js";
import { PAGE_BY_KEY } from "./eventPagesMap.js";

export default function EventPage() {
  const { key } = useParams();

  // 🔸 eventos externos → fora do site
  if (EXTERNAL_EVENT_KEYS.has(key)) {
    return <Navigate to="/" replace />;
  }

  const event = headerContent.events.items.find((e) => e.key === key);
  const Page = PAGE_BY_KEY[key];

  // 🔸 fallback mínimo (sem layout / estilos)
  if (!event || !Page) {
    return null;
  }

  // 🔸 página específica trata layout + footer
  return <Page event={event} />;
}
