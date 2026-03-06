// src/config/content/home.content.pt.js

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
import partnerFederacaoJudo from "../../assets/partners/federacaociclismo.png"; // (mantém o teu import real se for federacaojudo.png)
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
  WhatsApp,
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
    label: "Idioma",
    options: [
      { key: "pt", label: "PT" },
      { key: "en", label: "EN" },
    ],
    defaultKey: "pt",
  },
  menu: [
    {
      label: "Sobre",
      type: "dropdown",
      children: [
        { label: "O que é o ACE", anchor: "#about-what", icon: MoveRight },
        { label: "Conceito Base", anchor: "#about-concept", icon: Target },
        { label: "Eventos ACE", anchor: "#about-events", icon: Users },
        {
          label: "Interação com a Região",
          anchor: "#about-region",
          icon: Handshake,
        },
      ],
    },
    { label: "Eventos", anchor: "#events" },
    { label: "Parceiros", anchor: "#partners" },
    { label: "Contactos", anchor: "#contacts" },
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
    "Eventos desportivos que juntam competição, cultura e comunidade numa experiência única.",
  stats: [
    { value: "1000+", label: "Participantes" },
    { value: "6+", label: "Modalidades" },
    { value: "20+", label: "Países" },
  ],
  cta: {
    label: "Explorar Eventos",
    href: "#events",
  },
};

/* =========================
   ABOUT
========================= */
const about = {
  id: "about",
  title: "Sobre o ACE",
  tabs: [
    {
      key: "what",
      label: "O que é o ACE",
      anchor: "#about-what",
      icon: MoveRight,
      heading: "O que é o ACE",
      bullets: [
        "ACE = Athletic Challenge Event",
        "Uma plataforma de eventos desportivos multidisciplinares",
        "Forte ligação à região anfitriã, cultura e comunidade",
        "Uma experiência contínua, ao longo de todo o ano",
      ],
      footerNote: "Apresentação de Eventos SUNLIVE",
    },
    {
      key: "concept",
      label: "Conceito Base",
      anchor: "#about-concept",
      icon: Target,
      heading: "Conceito Base",
      bullets: [
        "Eventos desportivos em interação constante",
        "Integração de desporto + cultura + turismo + sociedade",
        "Um ambiente de vila desportiva",
        "Envolvimento ativo de atletas, treinadores, público e parceiros",
      ],
      footerNote: "Apresentação de Eventos SUNLIVE",
    },
    {
      key: "events",
      label: "Eventos ACE",
      anchor: "#about-events",
      icon: Users,
      heading: "Eventos ACE",
      bullets: [
        "Competições, torneios e estágios internacionais",
        "Várias disciplinas (ginástica, ciclismo, BMX, trampolins, teamgym, e mais)",
        "Participação de atletas de topo, treinadores e especialistas",
        "Mais de 1.000 participantes nacionais e internacionais",
      ],
      footerNote: "Apresentação de Eventos SUNLIVE",
    },
    {
      key: "region",
      label: "Interação com a Região",
      anchor: "#about-region",
      icon: Handshake,
      heading: "Interação com a Região",
      sections: [
        {
          title: "Região",
          bullets: [
            "Gastronomia regional",
            "Eventos culturais de partilha à mesa",
            "Região vínica da Bairrada",
            "Rotas temáticas, natureza e turismo termal",
          ],
        },
        {
          title: "Vila Desportiva",
          bullets: [
            "Hotéis e alojamento",
            "Zonas de lazer",
            "Parques urbanos e natureza",
          ],
        },
        {
          title: "Atividades",
          bullets: [
            "Eventos culturais bilingues",
            "Concertos e museus",
            "Realidade virtual (VR gaming)",
            "Jogos interativos e quizzes temáticos",
          ],
        },
        {
          title: "SportsMix",
          bullets: [
            "Eventos pela cidade",
            "Participação ativa do público",
            "Demonstrações e ativações de marcas",
          ],
        },
      ],
    },
  ],
  values: [
    { label: "Diversidade", icon: Globe },
    { label: "Inclusão", icon: Users },
    { label: "Excelência", icon: Award },
    { label: "Partilha", icon: Handshake },
  ],
};

/* =========================
   EVENTS (UI SECTION)
========================= */
const events = {
  id: "events",
  title: "Eventos ACE",
  items: [
    {
      key: "rhythmic-gymnastics-sunset-cup",
      title: "Rhythmic Gymnastics Sunset Cup",
      image: eventRhythmicGymnasticsSunsetCup,
      href: "/events/rhythmic-gymnastics-sunset-cup",
      year: 2026,
      month: "Outubro",
      dateText: "Outubro 2026 (data a confirmar)",
      tbd: true,
      sport: "RG",
    },
    {
      key: "blackline",
      title: "Blackline",
      image: eventBlackLine,
      href: "https://blacklinecoaching.com/book-events/",
      year: 2026,
      month: "Maio",
      dateText: "3–17 Maio, 2026",
      tbd: false,
      sport: "Ciclismo de Pista",
      start: { year: 2026, month: 5, day: 3 },
      end: { year: 2026, month: 5, day: 17 },
    },
    {
      key: "master-track-world-record",
      title: "Master Track Hour World Record",
      image: eventMasterTrackWorldRecord,
      href: "/events/master-track-world-record",
      year: 2026,
      month: "Junho",
      dateText: "4 Junho, 2026",
      tbd: true,
      sport: "Ciclismo de Pista",
    },
    {
      key: "bootcamp",
      title: "BootCamp",
      image: eventBootCamp,
      href: "/events/bootcamp",
      year: 2026,
      month: "Junho",
      dateText: "Junho 2026 (data a confirmar)",
      tbd: true,
      sport: "RG Brasil",
    },
    {
      key: "sunlive-international-cup",
      title: "Sunlive International Tournament",
      image: eventSunliveInternationalCup,
      href: "/events/sunlive-international-cup",
      year: 2026,
      month: "Julho",
      dateText: "3–5 Julho, 2026",
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
      month: "Julho",
      dateText: "27–31 Julho, 2026",
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
      month: "Agosto",
      dateText: "10–16 Agosto, 2026",
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
      month: "Agosto",
      dateText: "19–24 Agosto, 2026",
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
      month: "Agosto/Setembro",
      dateText: "29 Agosto – 8 Setembro, 2026",
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
      month: "Setembro",
      dateText: "Setembro 2026 (data a confirmar)",
      tbd: true,
      sport: "BMX",
    },
    {
      key: "stars-challenge",
      title: "Stars Challenge",
      image: eventStarsChallenge,
      href: "/events/stars-challenge",
      year: 2026,
      month: "Novembro",
      dateText: "21 Novembro, 2026",
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
      month: "Novembro",
      dateText: "27–29 Novembro, 2026",
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
      month: "Dezembro",
      dateText: "Dezembro 2026 (data a confirmar)",
      tbd: true,
      sport: "Ciclismo de Pista",
    },
  ],
};

/* =========================
   PARTNERS
========================= */
const partners = {
  id: "partners",
  title: "Parceiros",
  items: [
    { key: "anadia", image: partnerAnadia, name: "Anadia" },
    { key: "catar", image: partnerCatar, name: "Qatar" },
    { key: "malta", image: partnerMalta, name: "Malta" },
    { key: "lebanon", image: partnerLebanon, name: "Líbano" },
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
   CONTACTOS
========================= */
const contacts = {
  id: "contacts",
  title: "Contactos",
  subtitle: "Contactos diretos para coordenação e apoio.",
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
      role: "STAFF",
      phone: "+351 934094584",
      whatsappHref: "https://wa.me/351934094584",
      waIcon: WhatsApp,
    },
    {
      key: "maria-regina-andrade",
      name: "Maria Regina Andrade",
      role: "STAFF",
      phone: "+351 915298642",
      whatsappHref: "https://wa.me/351915298642",
      waIcon: WhatsApp,
    },
    {
      key: "fernando-piccirilo",
      name: "Fernando Piccirilo",
      role: "STAFF",
      phone: "+351 913093702",
      whatsappHref: "https://wa.me/351913093702",
      waIcon: WhatsApp,
    },
    {
      key: "dilma-almeida",
      name: "Dilma Almeida",
      role: "STAFF",
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
  copyright: "© Copyright 2026 Sunlive – Todos os direitos reservados",
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
