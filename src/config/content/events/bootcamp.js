// src/config/content/events/bootcamp.js

import camilaFerezin from "../../../assets/persons/camila-farezin.png";
import brunaMartins from "../../../assets/persons/bruna-martins.png";
import cbgLogo from "../../../assets/logos/cbg.png";

const base = {
  key: "bootcamp",
  hero: {
    title: "Bootcamp GR",
    dateLabel: "To be defined, April, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "bootcamp.png",
    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Rhythmic Gymnastics" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "5 Days" },
      { icon: "users", label: "Capacity", value: "+100 Athletes" },
    ],
  },

  team: {
    title: "Event Leads",
    members: [
      { name: "Camila Ferizin", avatar: camilaFerezin },
      { name: "Bruna Martins", avatar: brunaMartins },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "Confederação Brasileira de Ginástica",
    description: "Official event partner and organizational support.",
    logo: cbgLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : Rhythmic Gymnastics Clinic with Camila Ferezin",
    paragraphs: [
      "A great chance to learn and sharpen your technique. Led by renowned coach Camila Ferezin, this Rhythmic Gymnastics clinic welcomes gymnasts of all levels at the Velodrome of Sangalhos.",
      "Training is intensive and detail-focused, with coaching adapted to each gymnast’s needs. The goal is steady progress through refinement, clearer execution, and stronger technical foundations, whether you’re just starting out or working at an advanced level.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Rhythmic Gymnastics clinic led by Camila Ferezin",
        "Hosted at the Sangalhos Velodrome",
        "Intensive training focused on technical improvement",
        "Open to all levels, with guidance adapted to each gymnast",
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
    bg: "#061f3a",
    bgAlt: "#07376c",
    primary: "#45c908",
    accent: "#9dff00",
  },

  theme: {
    bg: "#061f3a",
    bgAlt: "#07376c",
    surface: "#0b4a8a",
    surfaceAlt: "#0e5ba8",
    primary: "#45c908",
    secondary: "#c8f306",
    accent: "#9dff00",
    text: "#ffffff",
    textMuted: "#cfe6c2",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#061f3a",
    "--bgAlt": "#07376c",
    "--primary": "#45c908",
    "--accent": "#9dff00",
    "--text": "#ffffff",
    "--textMuted": "#cfe6c2",
    "--border": "rgba(255,255,255,0.08)",
    "--heroBorder": "rgba(157,255,0,0.35)",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      // ✅ NÃO traduzimos o título do evento
      dateLabel: "A definir, Abril, 2026",
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
        { icon: "calendar", label: "Duração", value: "5 Dias" },
        { icon: "users", label: "Capacidade", value: "+100 Atletas" },
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
      title: "O Evento: Estágio de Ginástica Rítmica com Camila Ferezin",
      paragraphs: [
        "Uma excelente oportunidade para aprender e aprimorar a tua técnica. Liderada pela reconhecida treinadora Camila Ferezin, este estágio de Ginástica Rítmica recebe ginastas de todos os níveis no Velódromo de Sangalhos.",
        "O treino é intensivo e focado no detalhe, com orientação adaptada às necessidades de cada ginasta. O objetivo é evoluir de forma consistente através do refinamento, execução mais clara e bases técnicas mais sólidas, quer estejas a começar quer trabalhes a um nível avançado.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Estágio de Ginástica Rítmica liderado por Camila Ferezin",
          "Realizado no Velódromo de Sangalhos",
          "Treino intensivo focado na melhoria técnica",
          "Aberto a todos os níveis, com orientação adaptada a cada ginasta",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        { key: "sun", weekday: "a definir", date: "a definir" },
        { key: "mon", weekday: "a definir", date: "a definir" },
        { key: "tue", weekday: "a definir", date: "a definir" },
        { key: "wed", weekday: "a definir", date: "a definir" },
        { key: "thu", weekday: "a definir", date: "a definir" },
      ],
    },

    pricing: {
      title: "Preços",
      plans: [
        {
          key: "athlete",
          name: "Atleta",
          price: "a definir",
          items: ["a definir", "a definir", "a definir", "a definir"],
        },
        {
          key: "coach",
          name: "Treinador(a)",
          price: "a definir",
          items: ["a definir", "a definir", "a definir"],
        },
      ],
    },

    optionalExtras: {
      title: "Extras (Opcional)",
      items: [
        { key: "accommodation", label: "a definir", price: "a definir" },
        { key: "meals", label: "a definir", price: "a definir" },
        { key: "pack", label: "a definir", price: "a definir" },
      ],
    },

    importantNotes: {
      label: "Notas:",
      text: "a definir",
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
