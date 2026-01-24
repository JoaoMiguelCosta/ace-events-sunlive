// src/config/content/home.content.js

import aceLogo from "../../assets/ace/ace.png";
import heroImg from "../../assets/hero/hero.png";

// ✅ Events images (15)
import eventBlackLine from "../../assets/events/black-line.png";
import eventBootCamp from "../../assets/events/boot-camp.png";
import eventEgTrampolinsTrainingCamp from "../../assets/events/eg-trampolins-training-camp.png";
import eventInternationalCoachingAcademy from "../../assets/events/international-coaching-academy.png";
import eventInternationalContinentalCup from "../../assets/events/international-continental-cup.png";
import eventInternationalWagtTrainingCamp from "../../assets/events/international-wagt-training-camp.png";
import eventMasterTrackWorldRecord from "../../assets/events/master-track-world-record.png";
import eventRgAtlanticCup from "../../assets/events/rg-atlantic-cup.png";
import eventRhythmicGymnasticsSunsetCup from "../../assets/events/rhythmic-gymnastics-sunset-cup.png";
import eventStarsChallenge from "../../assets/events/stars-challenge.png";
import eventSunliveBmxTrophyC2 from "../../assets/events/sunlive-bmx-trophy-c2.png";
import eventSunliveInternationalCup from "../../assets/events/sunlive-international-cup.png";
import eventSunliveInternationalWagTrainingCamp from "../../assets/events/sunlive-international-wag-training-camp.png";
import eventSunliveTrackTrophyC2 from "../../assets/events/sunlive-track-trophy-c2.png";
import eventTeamGym from "../../assets/events/team-gym.png";

// ✅ Partners images (nomes reais do teu folder)
import partnerAnadia from "../../assets/partners/anadia.png";
import partnerCatar from "../../assets/partners/catar.png";
import partnerCatarClub from "../../assets/partners/catarclub.png";
import partnerCatarGymnasticsFederation from "../../assets/partners/catargymnasticsfederation.png";
import partnerCbc from "../../assets/partners/cbc.png";
import partnerCentroAltoRendimento from "../../assets/partners/centroaltorendimento.png";
import partnerCentroOlimpicoPortugal from "../../assets/partners/centroolimpicoportugal.png";
import partnerComiteOlimpicoBrasil from "../../assets/partners/comiteolimpicobrasil.png";
import partnerConfederacaoBrasileira from "../../assets/partners/confederacaobrasileira.png";
import partnerDidDlenger from "../../assets/partners/diddlenger.png";
import partnerEuropeanGymnastics from "../../assets/partners/europeangymnastics.png";
import partnerFederacaoCiclismo from "../../assets/partners/federacaociclismo.png";
import partnerFederacaoJudo from "../../assets/partners/federacaojudo.png";
import partnerFeracaoKarate from "../../assets/partners/feracaokarate.png";
import partnerFpb from "../../assets/partners/fpb.png";
import partnerKuwait from "../../assets/partners/kuwait.png";
import partnerLebanon from "../../assets/partners/lebanon.png";
import partnerMalta from "../../assets/partners/malta.png";
import partnerMunicipioAnadia from "../../assets/partners/municipioanadia.png";
import partnerTeamGym from "../../assets/partners/teamgym.png";
import partnerTurismo from "../../assets/partners/turismo.png";
import partnerPegasus from "../../assets/partners/pegasus.png";
import partnerUec from "../../assets/partners/uec.png";

import {
  Handshake,
  MoveRight,
  Target,
  Users,
  Globe,
  Award,
  Instagram,
} from "../../ui/icons";

/* =========================
   HEADER
========================= */
const header = {
  logo: {
    image: aceLogo,
    title: "ACE",
    subtitle: "Athletic Challenge Event",
  },

  menu: [
    {
      label: "About",
      type: "dropdown",
      children: [
        { label: "What is ACE", anchor: "#about-what", icon: MoveRight },
        { label: "Core Concept", anchor: "#about-concept", icon: Target },
        { label: "ACE Events", anchor: "#about-events", icon: Users },
        {
          label: "Interaction with the Region",
          anchor: "#about-region",
          icon: Handshake,
        },
      ],
    },
    { label: "Events", anchor: "#events" },
    { label: "Partners", anchor: "#partners" },
    { label: "Contacts", anchor: "#contacts" },

    // ✅ Instagram (externo)
    {
      label: "Instagram",
      href: "https://www.instagram.com/ace.sunlive/",
      icon: Instagram,
      external: true,
    },
  ],
};

/* =========================
   HERO
========================= */
const hero = {
  id: "hero",
  backgroundImage: heroImg,
  title: "ATHLETIC\nCHALLENGE\nEVENT",
  subtitle:
    "Sports events that bring together competition, culture, and community in a unique experience.",
  stats: [
    { value: "1000+", label: "Participants" },
    { value: "6+", label: "Sports" },
    { value: "20+", label: "Countries" },
  ],
  cta: {
    label: "Explore Events",
    href: "#events",
  },
};

/* =========================
   ABOUT
========================= */
const about = {
  id: "about",
  title: "About ACE",

  tabs: [
    {
      key: "what",
      label: "What is ACE",
      anchor: "#about-what",
      icon: MoveRight,
      heading: "What is ACE",
      bullets: [
        "ACE = Athletic Challenge Event",
        "A platform for multidisciplinary sports events",
        "Strong connection to the host region, culture and community",
        "A continuous experience, not just a one-off competition",
      ],
      footerNote: "SUNLIVE Events Presentation",
    },
    {
      key: "concept",
      label: "Core Concept",
      anchor: "#about-concept",
      icon: Target,
      heading: "Core Concept",
      bullets: [
        "Sports events in constant interaction",
        "Integration of sport + culture + tourism + society",
        "A sports-village environment",
        "Active involvement of athletes, coaches, audience and partners",
      ],
      footerNote: "SUNLIVE Events Presentation",
    },
    {
      key: "events",
      label: "ACE Events",
      anchor: "#about-events",
      icon: Users,
      heading: "ACE Events",
      bullets: [
        "Competitions, tournaments and international camps",
        "Multiple disciplines (gymnastics, cycling, BMX, trampolining, teamgym, and more)",
        "Participation of top athletes, coaches and specialists",
        "Over 1,000 national and international participants",
      ],
      footerNote: "SUNLIVE Events Presentation",
    },
    {
      key: "region",
      label: "Interaction with the Region",
      anchor: "#about-region",
      icon: Handshake,
      heading: "Interaction with the Region",
      sections: [
        {
          title: "Region",
          bullets: [
            "Regional gastronomy",
            "Food-sharing cultural events",
            "Bairrada wine region",
            "Themed routes, nature and thermal tourism",
          ],
        },
        {
          title: "Sports Village",
          bullets: [
            "Hotels and accommodation",
            "Leisure areas",
            "Urban parks and nature",
          ],
        },
        {
          title: "Activities",
          bullets: [
            "Bilingual cultural events",
            "Concerts and museums",
            "Virtual reality (VR gaming)",
            "Interactive games and themed quizzes",
          ],
        },
        {
          title: "SportsMix",
          bullets: [
            "City-wide events",
            "Active audience participation",
            "Demos and brand activations",
          ],
        },
      ],
    },
  ],

  values: [
    { label: "Diversity", icon: Globe },
    { label: "Inclusion", icon: Users },
    { label: "Excellence", icon: Award },
    { label: "Sharing", icon: Handshake },
  ],
};

/* =========================
   EVENTS (CATALOG)
========================= */
const events = {
  id: "events",
  title: "Events ACE",

  items: [
    {
      key: "rhythmic-gymnastics-sunset-cup",
      title: "Rhythmic Gymnastics Sunset Cup",
      image: eventRhythmicGymnasticsSunsetCup,
      href: "",
      year: 2026,
      month: "April",
      dateText: "April 2026 (date to be confirmed)",
      tbd: true,
      sport: "RG",
    },
    {
      key: "blackline",
      title: "Blackline",
      image: eventBlackLine,
      href: "https://blacklinecoaching.com/",
      year: 2026,
      month: "May",
      dateText: "3–17 May, 2026",
      tbd: false,
      sport: "Track Cycling",
      start: { year: 2026, month: 5, day: 3 },
      end: { year: 2026, month: 5, day: 17 },
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
      key: "master-track-world-record",
      title: "Master Track World Record",
      image: eventMasterTrackWorldRecord,
      href: "",
      year: 2026,
      month: "June",
      dateText: "June 2026 (date to be confirmed)",
      tbd: true,
      sport: "Track Cycling",
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
      key: "sunlive-international-wag-training-camp",
      title: "Sunlive International WAG Training Camp",
      image: eventSunliveInternationalWagTrainingCamp,
      href: "https://www.wagtrainingcamp.sunlive.pt/malta",
      year: 2026,
      month: "July",
      dateText: "8–13 July, 2026",
      tbd: false,
      sport: "WAG",
      start: { year: 2026, month: 7, day: 12 },
      end: { year: 2026, month: 7, day: 19 },
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
      image: eventInternationalWagtTrainingCamp,
      href: "https://www.wagtrainingcamp.sunlive.pt/anadia",
      year: 2026,
      month: "August",
      dateText: "17–22 August, 2026",
      tbd: false,
      sport: "WAG",
      start: { year: 2026, month: 8, day: 17 },
      end: { year: 2026, month: 8, day: 22 },
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
      title: "Sunlive BMX Trophy C2",
      image: eventSunliveBmxTrophyC2,
      href: "",
      year: 2026,
      month: "September",
      dateText: "September 2026 (date to be confirmed)",
      tbd: true,
      sport: "BMX",
    },
    {
      key: "rg-atlantic-cup",
      title: "RG Atlantic Cup",
      image: eventRgAtlanticCup,
      href: "",
      year: 2026,
      month: "October",
      dateText: "October 2026 (date to be confirmed)",
      tbd: true,
      sport: "RG",
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
      title: "Sunlive Track Trophy C2",
      image: eventSunliveTrackTrophyC2,
      href: "",
      year: 2026,
      month: "December",
      dateText: "December 2026 (date to be confirmed)",
      tbd: true,
      sport: "Track Cycling",
    },
  ],
};

// ✅ eventos externos (não têm página interna)
export const EXTERNAL_EVENT_KEYS = new Set([
  "blackline",
  "sunlive-international-wag-training-camp", // WAG Malta
  "international-wag-training-camp", // WAG Portugal/Anadia
  "international-continental-cup", // Continental Cup
]);

// ✅ auto-href: todos internos menos estes 4
events.items = events.items.map((e) => {
  if (EXTERNAL_EVENT_KEYS.has(e.key)) return e;
  return { ...e, href: `/events/${e.key}` };
});

/* =========================
   PARTNERS
========================= */
const partners = {
  id: "partners",
  title: "Partners",
  items: [
    { key: "anadia", image: partnerAnadia, name: "Anadia" },
    { key: "catar", image: partnerCatar, name: "Qatar" },
    { key: "malta", image: partnerMalta, name: "Malta" },
    { key: "lebanon", image: partnerLebanon, name: "Lebanon" },

    { key: "catarclub", image: partnerCatarClub, name: "Qatar Club" },
    {
      key: "catargymnasticsfederation",
      image: partnerCatarGymnasticsFederation,
      name: "Qatar Gymnastics Federation",
    },
    { key: "cbc", image: partnerCbc, name: "CBC" },
    {
      key: "centroaltorendimento",
      image: partnerCentroAltoRendimento,
      name: "Centro de Alto Rendimento",
    },
    {
      key: "centroolimpicoportugal",
      image: partnerCentroOlimpicoPortugal,
      name: "Centro Olímpico de Portugal",
    },
    {
      key: "comiteolimpicobrasil",
      image: partnerComiteOlimpicoBrasil,
      name: "Comité Olímpico do Brasil",
    },
    {
      key: "confederacaobrasileira",
      image: partnerConfederacaoBrasileira,
      name: "Confederação Brasileira",
    },
    { key: "diddlenger", image: partnerDidDlenger, name: "DidDlenger" },
    {
      key: "europeangymnastics",
      image: partnerEuropeanGymnastics,
      name: "European Gymnastics",
    },
    {
      key: "federacaociclismo",
      image: partnerFederacaoCiclismo,
      name: "Federação de Ciclismo",
    },
    {
      key: "federacaojudo",
      image: partnerFederacaoJudo,
      name: "Federação de Judo",
    },
    {
      key: "feracaokarate",
      image: partnerFeracaoKarate,
      name: "Federação de Karaté",
    },
    { key: "fpb", image: partnerFpb, name: "FPB" },
    { key: "kuwait", image: partnerKuwait, name: "Kuwait" },
    {
      key: "municipioanadia",
      image: partnerMunicipioAnadia,
      name: "Município de Anadia",
    },
    { key: "pegasus", image: partnerPegasus, name: "Pegasus" },
    { key: "teamgym", image: partnerTeamGym, name: "TeamGym" },
    { key: "turismo", image: partnerTurismo, name: "Turismo" },
    { key: "uec", image: partnerUec, name: "UEC" },
  ],
};

/* =========================
   FOOTER
========================= */
const footer = {
  id: "footer",
  copyright: "© Copyright 2026 Sunlive – All Rights Reserved",
  links: [
    // { label: "Privacy", href: "/privacy" },
    // { label: "Terms", href: "/terms" },
  ],
};

/* =========================
   EXPORT (HOME CONTENT)
========================= */
export const headerContent = {
  ...header,
  hero,
  about,
  events,
  partners,
  footer,
};
