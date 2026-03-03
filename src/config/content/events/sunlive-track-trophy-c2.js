// src/config/content/events/sunlive-track-trophy-c2.js

import fernandopiccirilo from "../../../assets/persons/fernando-piccirilo.png";
import alexandrealmeida from "../../../assets/persons/alexandre-almeida.png";
import fdpLogo from "../../../assets/logos/fdp.png";

const base = {
  key: "sunlive-track-trophy-c2",

  hero: {
    title: "Sunlive Track Trophy",
    dateLabel: "definer to later, December, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "track-trophy.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Track Cycling" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "2 Days" },
      { icon: "users", label: "Capacity", value: "100+ Athletes" },
    ],
  },

  team: {
    title: "Event Leads",
    members: [
      { name: "Alexandre Almeida", avatar: alexandrealmeida },
      { name: "Fernando Piccirilo", avatar: fernandopiccirilo },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "Federação Portuguesa de Ciclismo",
    description: "Official event partner and organizational support.",
    logo: fdpLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : Track Cycling Race",
    paragraphs: [
      "A fast finish to the sporting year. Once again in partnership with the Portuguese Cycling Federation, this UCI C2 event brings track cyclists to the National Velodrome to race for the trophy in a controlled, high-performance setting.",
      "Expect a full day of precision and power, with high-speed races and a strong competitive level. Built to deliver a top-class track cycling experience from start to finish.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Official track cycling race",
        "In partnership with the Portuguese Cycling Federation",
        "Hosted in the controlled, high-performance environment of the National Velodrome",
        "Fast-paced racing focused on precision, power, and high-level competition",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      // ✅ 2 dias (coerente com Duration = 2 Days)
      {
        key: "sat",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
      {
        key: "sun",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
    ],
  },

  pricing: {
    title: "Pricing",
    icon: "signal",
    plans: [
      {
        key: "athlete",
        name: "Athlete",
        price: "definer to later",
        items: [
          "definer to later",
          "definer to later",
          "definer to later",
          "definer to later",
        ],
      },
      {
        key: "coach",
        name: "Coach",
        price: "definer to later",
        items: ["definer to later", "definer to later", "definer to later"],
      },
    ],
  },

  optionalExtras: {
    title: "Extras (Optional)",
    items: [
      {
        key: "accommodation",
        label: "definer to later",
        price: "definer to later",
      },
      { key: "meals", label: "definer to later", price: "definer to later" },
      { key: "pack", label: "definer to later", price: "definer to later" },
    ],
  },

  importantNotes: {
    label: "Notes:",
    text: "definer to later",
  },

  registration: {
    title: "Secure your spot",
    subtitle: "Don't miss this one-of-a-kind sports event.",
    buttonLabel: "Register Now",
    helper: "Registration is done via Google Forms.",
  },

  layout: {
    bg: "#1b150e",
    bgAlt: "#231b12",
    primary: "#573a1d",
    accent: "#a07445",
  },

  theme: {
    bg: "#1b150e",
    bgAlt: "#231b12",
    surface: "#2d2318",
    surfaceAlt: "#372c1f",
    primary: "#573a1d",
    secondary: "#7a5230",
    accent: "#a07445",
    text: "#ffffff",
    textMuted: "#d6c8bb",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b150e",
    "--bgAlt": "#231b12",
    "--primary": "#573a1d",
    "--accent": "#a07445",
    "--heroBorder": "rgba(160, 116, 69, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6c8bb",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      dateLabel: "A definir, Dezembro, 2026",
      locationLabel: "Velódromo de Sangalhos • Centro de Alto Rendimento",
      actions: {
        primary: { label: "Inscrever-me" },
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "Ciclismo de Pista" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "2 Dias" },
        { icon: "users", label: "Capacidade", value: "100+ Atletas" },
      ],
    },

    team: {
      title: "Responsáveis do Evento",
    },

    officialPartner: {
      title: "Parceria",
      description: "Parceiro oficial do evento e apoio organizacional.",
    },

    description: {
      title: "O Evento: Prova de Ciclismo de Pista",
      paragraphs: [
        "Um fecho rápido para o ano desportivo. Mais uma vez em parceria com a Federação Portuguesa de Ciclismo, este evento UCI C2 traz ciclistas de pista ao Velódromo Nacional para disputar o troféu num contexto controlado e de alto rendimento.",
        "Espera um dia completo de precisão e potência, com corridas de alta velocidade e um nível competitivo forte. Pensado para entregar uma experiência de ciclismo de pista de topo do início ao fim.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Prova oficial de ciclismo de pista",
          "Em parceria com a Federação Portuguesa de Ciclismo",
          "Realizada no ambiente controlado e de alto rendimento do Velódromo Nacional",
          "Corridas rápidas com foco em precisão, potência e competição de alto nível",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "sat",
          weekday: "A definir",
          date: "A definir",
          items: [
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir" },
          ],
        },
        {
          key: "sun",
          weekday: "A definir",
          date: "A definir",
          items: [
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir", description: "A definir" },
            { time: "A definir", title: "A definir" },
          ],
        },
      ],
    },

    pricing: {
      title: "Preços",
      plans: [
        {
          key: "athlete",
          name: "Atleta",
          price: "A definir",
          items: ["A definir", "A definir", "A definir", "A definir"],
        },
        {
          key: "coach",
          name: "Treinador(a)",
          price: "A definir",
          items: ["A definir", "A definir", "A definir"],
        },
      ],
    },

    optionalExtras: {
      title: "Extras (Opcional)",
      items: [
        { key: "accommodation", label: "A definir", price: "A definir" },
        { key: "meals", label: "A definir", price: "A definir" },
        { key: "pack", label: "A definir", price: "A definir" },
      ],
    },

    importantNotes: {
      label: "Notas:",
      text: "A definir",
    },

    registration: {
      title: "Garante o teu lugar",
      subtitle: "Não percas este evento desportivo único.",
      buttonLabel: "Inscrever agora",
      helper: "A inscrição é feita via Google Forms.",
    },
  },
};

export default { key: base.key, base, i18n };
