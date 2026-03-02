// src/config/content/events/index.js
import { EVENTS, EXTERNAL_EVENT_KEYS } from "./eventsCatalog.js";

/**
 * Base lookup (para EventPage)
 */
export function getEventBaseByKey(key) {
  if (!key) return null;
  return EVENTS.find((e) => e.key === key) || null;
}

export { EVENTS, EXTERNAL_EVENT_KEYS };
