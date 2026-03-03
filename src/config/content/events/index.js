// src/config/content/events/index.js
import { EXTERNAL_EVENT_KEYS, getEventsCatalog } from "./eventsCatalog.js";

/**
 * ✅ Base lookup (para EventPage e para Home)
 * - Se passares lang, devolve base já com month/dateText no idioma
 */
export function getEventBaseByKey(key, lang = "en") {
  if (!key) return null;
  const list = getEventsCatalog(lang);
  return list.find((e) => e.key === key) || null;
}

/**
 * ✅ Para UI (Home EventsSection, etc)
 */
export function getEvents(lang = "en") {
  return getEventsCatalog(lang);
}

export { EXTERNAL_EVENT_KEYS };
