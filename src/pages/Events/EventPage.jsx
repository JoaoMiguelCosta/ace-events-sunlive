import { useParams, Navigate, Link } from "react-router-dom";
import {
  headerContent,
  EXTERNAL_EVENT_KEYS,
} from "../../config/content/home.content.js";
import { PAGE_BY_KEY } from "./eventPagesMap.js";

export default function EventPage() {
  const { key } = useParams();

  if (EXTERNAL_EVENT_KEYS.has(key)) return <Navigate to="/" replace />;

  const event = headerContent.events.items.find((e) => e.key === key);
  const Page = PAGE_BY_KEY[key];

  if (!event || !Page) {
    return (
      <div>
        <Link to="/">← Voltar</Link>
        <p style={{ marginTop: 16 }}>
          {!event ? "Evento não encontrado." : "Página em construção…"}
        </p>
      </div>
    );
  }

  return <Page event={event} />;
}
