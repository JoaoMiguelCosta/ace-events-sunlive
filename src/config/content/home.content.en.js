// src/config/content/home.content.en.js

import aceLogo from "../../assets/ace/ace.png";
import heroImg from "../../assets/hero/hero.png";

// ✅ Events images
import eventBlackLine from "../../assets/events/black-line.png";
import eventBootCamp from "../../assets/events/boot-camp.png";
import eventEgTrampolinsTrainingCamp from "../../assets/events/eg-trampolins-training-camp.png";
import eventInternationalCoachingAcademy from "../../assets/events/international-coaching-academy.png";
import eventInternationalContinentalCup from "../../assets/events/international-continental-cup.png";
import eventInternationalWagTrainingCamp from "../../assets/events/international-wag-training-camp.png";
import eventMasterTrackWorldRecord from "../../assets/events/master-track-world-record.png";
import eventRhythmicGymnasticsSunsetCup from "../../assets/events/rhythmic-gymnastics-sunset-cup.png";
import eventStarsChallenge from "../../assets/events/stars-challenge.png";
import eventSunliveBmxTrophyC2 from "../../assets/events/sunlive-bmx-trophy-c2.png";
import eventSunliveInternationalCup from "../../assets/events/sunlive-international-cup.png";
import eventSunliveTrackTrophyC2 from "../../assets/events/sunlive-track-trophy-c2.png";
import eventTeamGym from "../../assets/events/team-gym.png";

// ✅ Partners images
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
  WhatsApp
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
  i18n: {
    label: "Language",
    options: [
      { key: "pt", label: "PT" },
      { key: "en", label: "EN" },
    ],
    defaultKey: "en",
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
        "A continuous, year-round experience",
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
   EVENTS (UI SECTION)
   Nota: a lista final “oficial” agora vive em config/content/events/
   Mantemos aqui para a Home (enquanto não ligares a Home ao catalog central).
========================= */
const events = {
  id: "events",
  title: "Events ACE",
  items: [
    {
      key: "rhythmic-gymnastics-sunset-cup",
      title: "Rhythmic Gymnastics Sunset Cup",
      image: eventRhythmicGymnasticsSunsetCup,
      href: "/events/rhythmic-gymnastics-sunset-cup",
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
      href: "/events/master-track-world-record",
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
      href: "/events/bootcamp",
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
      href: "/events/sunlive-international-cup",
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
      href: "/events/eg-trampolins-training-camp",
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
      href: "/events/international-coaching-academy",
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
      href: "/events/teamgym",
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
      href: "/events/sunlive-bmx-trophy-c2",
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
      href: "/events/stars-challenge",
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
      href: "/events/sunlive-track-trophy-c2",
      year: 2026,
      month: "December",
      dateText: "December 2026 (date to be confirmed)",
      tbd: true,
      sport: "Track Cycling",
    },
  ],
};

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
   CONTACTS
========================= */
const contacts = {
  id: "contacts",
  title: "Contacts",
  subtitle: "Direct contacts for coordination and support.",
  items: [
    {
      key: "lucas-gonzalez",
      name: "Lucas Gonzalez",
      role: "CEO — Sunlive Group",
      phone: "+351 933600364",
      whatsappHref: "https://wa.me/351933600364",
      waIcon: WhatsApp,
    },
    {
      key: "marina-remelgado",
      name: "Marina Remelgado",
      role: "to be defined",
      phone: "+351 934094584",
      whatsappHref: "https://wa.me/351934094584",
      waIcon: WhatsApp,
    },
    {
      key: "maria-regina-andrade",
      name: "Maria Regina Andrade",
      role: "to be defined",
      phone: "+351 915298642",
      whatsappHref: "https://wa.me/351915298642",
      waIcon: WhatsApp,
    },
    {
      key: "fernando-piccirilo",
      name: "Fernando Piccirilo",
      role: "Commercial — Sunlive Group",
      phone: "+351 913093702",
      whatsappHref: "https://wa.me/351913093702",
      waIcon: WhatsApp,
    },
    {
      key: "dilma-almeida",
      name: "Dilma Almeida",
      role: "to be defined",
      phone: "+351 935630798",
      whatsappHref: "https://wa.me/351935630798",
      waIcon: WhatsApp,
    },
  ],
};

/* =========================
   FOOTER
========================= */
const footer = {
  id: "footer",
  copyright: "© Copyright 2026 Sunlive – All Rights Reserved",
  links: [],
};

/* =========================
   EXPORT (HOME CONTENT) — Opção A
========================= */
export const homeContent = {
  header,
  hero,
  about,
  events,
  partners,
  contacts,
  footer,
};