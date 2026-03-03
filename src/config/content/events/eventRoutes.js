// src/config/content/events/eventRoutes.js

import bootcamp from "./bootcamp.js";
import egTrampolinsTrainingCamp from "./eg-trampolins-training-camp.js";
import internationalCoachingAcademy from "./international-coaching-academy.js";
import masterTrackWorldRecord from "./master-track-world-record.js";
// import rgAtlanticCup from "./rg-atlantic-cup.js";
import rhythmicGymnasticsSunsetCup from "./rhythmic-gymnastics-sunset-cup.js";
import starsChallenge from "./stars-challenge.js";
import sunliveBmxTrophyC2 from "./sunlive-bmx-trophy-c2.js";
import sunliveInternationalCup from "./sunlive-international-cup.js";
import sunliveTrackTrophyC2 from "./sunlive-track-trophy-c2.js";
import teamgym from "./teamgym.js";

import { deepMerge } from "./merge.js";

/**
 * ✅ Lista "raw" (para suportar os 2 formatos):
 * - Formato antigo: export default { ...conteúdo... }
 * - Formato novo (recomendado): export default { key, base, i18n }
 */
const RAW_EVENTS = [
  bootcamp,
  egTrampolinsTrainingCamp,
  internationalCoachingAcademy,
  masterTrackWorldRecord,
  // rgAtlanticCup,
  rhythmicGymnasticsSunsetCup,
  starsChallenge,
  sunliveBmxTrophyC2,
  sunliveInternationalCup,
  sunliveTrackTrophyC2,
  teamgym,
];

const RAW_BY_KEY = Object.fromEntries(
  RAW_EVENTS.map((ev) => [ev?.key, ev]).filter(([k]) => !!k),
);

/**
 * ✅ Compat: mantém o objeto antigo para código que ainda faz EVENTS_BY_KEY[key]
 * Nota: aqui devolvemos o "base" se existir, senão o objeto todo (formato antigo)
 */
export const EVENTS_BY_KEY = Object.fromEntries(
  Object.entries(RAW_BY_KEY).map(([k, raw]) => [k, raw?.base ?? raw]),
);

/**
 * ✅ Novo: devolve conteúdo final por idioma
 * - Se o evento ainda estiver no formato antigo: devolve raw
 * - Se estiver no formato novo: deepMerge(base, i18n[lang] || i18n.en)
 */
export function getEventContentByKey(key, lang = "en") {
  const raw = RAW_BY_KEY[key];
  if (!raw) return null;

  // formato antigo
  if (!raw.base && !raw.i18n) return raw;

  const base = raw.base ?? {};
  const i18n = raw.i18n ?? null;

  const patch = i18n?.[lang] ?? i18n?.en ?? null;
  return patch ? deepMerge(base, patch) : base;
}
