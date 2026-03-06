// src/config/content/events/sunlive-bmx-trophy-c2.js

import fernandopiccirilo from "../../../assets/persons/fernando-piccirilo.png";
import alexandrealmeida from "../../../assets/persons/alexandre-almeida.png";
import fdpLogo from "../../../assets/logos/fdp.png";

const base = {
  key: "sunlive-bmx-trophy-c2",

  hero: {
    title: "Sunlive BMX Trophy",
    dateLabel: "definer to later, September, 2026",
    locationLabel: "Olympic BMX Track • Anadia",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Pista%20de%20BMX%20de%20Anadia%2C%20Portugal",
    image: "bmx-trophy.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "BMX" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "2 Days" },
      { icon: "users", label: "Capacity", value: "+250 Athletes" },
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
    title: "The Event : BMX Race",
    paragraphs: [
      // ✅ corrigido: era incoerente falar em velódromo, o evento é na pista de BMX (Anadia)
      "Pure adrenaline on the track. In partnership with the Portuguese Cycling Federation, the Sunlive Trophy brings an official UCI C2-level BMX race to Anadia’s Olympic BMX Track, where riders put their technique and speed to the test.",
      "Expect fast starts, demanding lines, and intense head-to-head battles. It’s a competition built around performance, precision, and a real race-day atmosphere.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Official BMX race",
        "In partnership with the Portuguese Cycling Federation",
        "Focused on technique, speed, and technical lines",
        "Intense racing with explosive starts and head-to-head battles",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
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
      {
        key: "mon",
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
        key: "tue",
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
        key: "wed",
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
        key: "thu",
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
      dateLabel: "A definir, Setembro, 2026",
      locationLabel: "Pista Olímpica de BMX • Anadia",
      actions: {
        primary: { label: "Inscrever-me" },
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "BMX" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "2 Dias" },
        { icon: "users", label: "Capacidade", value: "+250 Atletas" },
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
      title: "O Evento: BMX Race",
      paragraphs: [
        "Adrenalina pura na pista. Em parceria com a Federação Portuguesa de Ciclismo, o Sunlive Trophy traz uma prova oficial de nível UCI C2, onde os atletas de BMX colocam técnica e velocidade à prova.",
        "Espera arranques rápidos, linhas exigentes e duelos intensos. É uma competição construída em torno de performance, precisão e um verdadeiro ambiente de dia de corrida.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Prova oficial de BMX",
          "Em parceria com a Federação Portuguesa de Ciclismo",
          "Foco em técnica, velocidade e linhas técnicas",
          "Corridas intensas com arranques explosivos e duelos diretos",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
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
        {
          key: "mon",
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
          key: "tue",
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
          key: "wed",
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
          key: "thu",
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
