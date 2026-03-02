// src/config/content/events/eventsCatalog.js

// ✅ Events images (mesmos imports que tinhas no home.content.*)
import eventBlackLine from "../../../assets/events/black-line.png";
import eventBootCamp from "../../../assets/events/boot-camp.png";
import eventEgTrampolinsTrainingCamp from "../../../assets/events/eg-trampolins-training-camp.png";
import eventInternationalCoachingAcademy from "../../../assets/events/international-coaching-academy.png";
import eventInternationalContinentalCup from "../../../assets/events/international-continental-cup.png";
import eventInternationalWagTrainingCamp from "../../../assets/events/international-wag-training-camp.png";
import eventMasterTrackWorldRecord from "../../../assets/events/master-track-world-record.png";
import eventRhythmicGymnasticsSunsetCup from "../../../assets/events/rhythmic-gymnastics-sunset-cup.png";
import eventStarsChallenge from "../../../assets/events/stars-challenge.png";
import eventSunliveBmxTrophyC2 from "../../../assets/events/sunlive-bmx-trophy-c2.png";
import eventSunliveInternationalCup from "../../../assets/events/sunlive-international-cup.png";
import eventSunliveTrackTrophyC2 from "../../../assets/events/sunlive-track-trophy-c2.png";
import eventTeamGym from "../../../assets/events/team-gym.png";

/**
 * ✅ Eventos externos (não têm página interna)
 * - Mantém esta lista única (não deve viver no Home)
 */
export const EXTERNAL_EVENT_KEYS = new Set([
  "blackline",
  "international-wag-training-camp",
  "international-continental-cup",
]);

/**
 * ✅ Catálogo base de eventos (independente do Home)
 * - Mantém keys/ordem/campos iguais aos que tinhas no home.content.en.js
 * - Nota: os textos (month/dateText/title) estão em EN aqui; podes i18n depois.
 */
export const EVENTS_CATALOG = [
  {
    key: "rhythmic-gymnastics-sunset-cup",
    title: "Rhythmic Gymnastics Sunset Cup",
    image: eventRhythmicGymnasticsSunsetCup,
    href: "",
    year: 2026,
    month: "October",
    dateText: "October 2026 (date to be confirmed)",
    tbd: true,
    sport: "RG",
  },
  {
    key: "blackline",
    title: "Blackline",
    image: eventBlackLine,
    href: "https://blacklinecoaching.com/book-events/",
    year: 2026,
    month: "May",
    dateText: "3–17 May, 2026",
    tbd: false,
    sport: "Track Cycling",
    start: { year: 2026, month: 5, day: 3 },
    end: { year: 2026, month: 5, day: 17 },
  },
  {
    key: "master-track-world-record",
    title: "Master Track Hour World Record",
    image: eventMasterTrackWorldRecord,
    href: "",
    year: 2026,
    month: "June",
    dateText: "4 June, 2026",
    tbd: true,
    sport: "Track Cycling",
  },
  {
    key: "bootcamp",
    title: "BootCamp",
    image: eventBootCamp,
    href: "",
    year: 2026,
    month: "June",
    dateText: "June 2026 (date to be confirmed)",
    tbd: true,
    sport: "RG Brasil",
  },
  {
    key: "sunlive-international-cup",
    title: "Sunlive International Tournament",
    image: eventSunliveInternationalCup,
    href: "",
    year: 2026,
    month: "July",
    dateText: "3–5 July, 2026",
    tbd: false,
    sport: "Basket Sub 20",
    start: { year: 2026, month: 7, day: 3 },
    end: { year: 2026, month: 7, day: 5 },
  },
  {
    key: "eg-trampolins-training-camp",
    title: "EG Trampolins Training Camp",
    image: eventEgTrampolinsTrainingCamp,
    href: "",
    year: 2026,
    month: "July",
    dateText: "27–31 July, 2026",
    tbd: false,
    sport: "Trampolins",
    start: { year: 2026, month: 7, day: 27 },
    end: { year: 2026, month: 7, day: 31 },
  },
  {
    key: "international-coaching-academy",
    title: "International Coaching Academy",
    image: eventInternationalCoachingAcademy,
    href: "",
    year: 2026,
    month: "August",
    dateText: "10–16 August, 2026",
    tbd: false,
    sport: "MAG",
    start: { year: 2026, month: 8, day: 10 },
    end: { year: 2026, month: 8, day: 16 },
  },
  {
    key: "international-wag-training-camp",
    title: "International WAG Training Camp",
    image: eventInternationalWagTrainingCamp,
    href: "https://www.wagtrainingcamp.sunlive.pt/anadia",
    year: 2026,
    month: "August",
    dateText: "19–24 August, 2026",
    tbd: false,
    sport: "WAG",
    start: { year: 2026, month: 8, day: 19 },
    end: { year: 2026, month: 8, day: 24 },
  },
  {
    key: "teamgym",
    title: "TeamGym",
    image: eventTeamGym,
    href: "",
    year: 2026,
    month: "August/September",
    dateText: "29 August – 8 September, 2026",
    tbd: false,
    sport: "TeamGym",
    start: { year: 2026, month: 8, day: 29 },
    end: { year: 2026, month: 9, day: 8 },
  },
  {
    key: "sunlive-bmx-trophy-c2",
    title: "Sunlive BMX Trophy",
    image: eventSunliveBmxTrophyC2,
    href: "",
    year: 2026,
    month: "September",
    dateText: "September 2026 (date to be confirmed)",
    tbd: true,
    sport: "BMX",
  },
  {
    key: "stars-challenge",
    title: "Stars Challenge",
    image: eventStarsChallenge,
    href: "",
    year: 2026,
    month: "November",
    dateText: "21 November, 2026",
    tbd: false,
    sport: "MAG/WAG",
    start: { year: 2026, month: 11, day: 21 },
  },
  {
    key: "international-continental-cup",
    title: "International Continental Cup",
    image: eventInternationalContinentalCup,
    href: "https://continentalcup.sunlive.pt/",
    year: 2026,
    month: "November",
    dateText: "27–29 November, 2026",
    tbd: false,
    sport: "MAG/WAG",
    start: { year: 2026, month: 11, day: 27 },
    end: { year: 2026, month: 11, day: 29 },
  },
  {
    key: "sunlive-track-trophy-c2",
    title: "Sunlive Track Trophy",
    image: eventSunliveTrackTrophyC2,
    href: "",
    year: 2026,
    month: "December",
    dateText: "December 2026 (date to be confirmed)",
    tbd: true,
    sport: "Track Cycling",
  },
];

/**
 * ✅ Auto-href: internos por defeito, exceto os externos
 */
export function withAutoHref(items = []) {
  return items.map((e) => {
    if (!e) return e;
    if (EXTERNAL_EVENT_KEYS.has(e.key)) return e;
    return { ...e, href: `/events/${e.key}` };
  });
}

/**
 * ✅ Lista final para usar na UI
 */
export const EVENTS = withAutoHref(EVENTS_CATALOG);
