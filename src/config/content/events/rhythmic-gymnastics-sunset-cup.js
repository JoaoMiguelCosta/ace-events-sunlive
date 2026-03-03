// src/config/content/events/rhythmic-gymnastics-sunset-cup.js

import fernandatrigo from "../../../assets/persons/fernanda-trigo.png";
import raissatrigo from "../../../assets/persons/raissa-trigo.png";
import sasquiatrigo from "../../../assets/persons/sasquia-trigo.png";
import gremiLogo from "../../../assets/logos/gremi.png";

const base = {
  key: "rhythmic-gymnastics-sunset-cup",

  hero: {
    title: "Rhythmic Gymnastics Sunset Cup",
    dateLabel: "definer to later, October, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "rg-sunset.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Rhythmic Gymnastics" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "3 Days" },
      { icon: "users", label: "Capacity", value: "150+ Athletes" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [
      { name: "Fernanda Trigo", avatar: fernandatrigo },
      { name: "Raissa Trigo", avatar: raissatrigo },
      { name: "Sásquia Trigo", avatar: sasquiatrigo },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "GREMI",
    description: "Official event partner and organizational support.",
    logo: gremiLogo,
    logoVariant: "tall",
  },

  description: {
    title: "The Event : International Rhythmic Gymnastics Competition",
    paragraphs: [
      "The Velodrome of Sangalhos becomes a stage of elegance with Sunlive Sunset GR. Organized by Clube Gremi, this international competition brings together talent and grace in a top-level setting.",
      "A celebration of rhythmic gymnastics excellence, where athletes showcase artistry and precision in a high-performance environment designed to deliver an outstanding competitive experience.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "International Rhythmic Gymnastics Competition",
        "Hosted at the Sangalhos Velodrome in a top-level setting",
        "Organized by Clube Gremi",
        "Focused on high-performance, elegance, precision, and an outstanding competitive experience",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      // ✅ 3 dias (coerente com Duration = 3 Days)
      {
        key: "fri",
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
    bg: "#140018",
    bgAlt: "#1d0026",
    primary: "#c60065",
    accent: "#00178d",
  },

  theme: {
    bg: "#140018",
    bgAlt: "#1d0026",
    surface: "#260034",
    surfaceAlt: "#320045",
    primary: "#c60065",
    secondary: "#7522bf",
    accent: "#00178d",
    text: "#ffffff",
    textMuted: "#d6c2dd",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#140018",
    "--bgAlt": "#1d0026",
    "--primary": "#c60065",
    "--accent": "#00178d",
    "--heroBorder": "rgba(0, 23, 141, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6c2dd",
    "--border": "rgba(255,255,255,0.08)",
    "--heroPadY": "12px",
    "--heroPadX": "30px",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      dateLabel: "A definir, Outubro, 2026",
      locationLabel: "Velódromo de Sangalhos • Centro de Alto Rendimento",
      actions: {
        primary: { label: "Inscrever-me" },
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "Ginástica Rítmica" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "3 Dias" },
        { icon: "users", label: "Capacidade", value: "150+ Atletas" },
      ],
    },

    team: {
      title: "Responsável do Evento",
    },

    officialPartner: {
      title: "Parceria",
      description: "Parceiro oficial do evento e apoio organizacional.",
    },

    description: {
      title: "O Evento: Competição Internacional de Ginástica Rítmica",
      paragraphs: [
        "O Velódromo de Sangalhos torna-se um palco de elegância com a Sunlive Sunset GR. Organizada pelo Clube GREMI, esta competição internacional reúne talento e graciosidade num cenário de alto nível.",
        "Uma celebração da excelência na ginástica rítmica, onde as atletas mostram arte e precisão num ambiente de alto rendimento pensado para proporcionar uma experiência competitiva de referência.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Competição Internacional de Ginástica Rítmica",
          "Realizada no Velódromo de Sangalhos, num cenário de alto nível",
          "Organizada pelo Clube GREMI",
          "Foco no alto rendimento, elegância, precisão e numa experiência competitiva de referência",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "fri",
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
