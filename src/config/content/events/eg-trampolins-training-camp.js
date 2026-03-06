// src/config/content/events/eg-trampolins-training-camp.js

import luisnunes from "../../../assets/persons/luis-nunes.png";
import europeanGymnasticsLogo from "../../../assets/logos/european-gymnastics.png";
import fgpLogo from "../../../assets/logos/fgp.png";

const base = {
  key: "eg-trampolins-training-camp",

  hero: {
    title: "EG Trampolines Training Camp",
    dateLabel: "27–31 July, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "eg-trampolins.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Trampolining" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "5 days" },
      { icon: "users", label: "Capacity", value: "+100 Athletes" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [{ name: "Luís Nunes", avatar: luisnunes }],
  },

  officialPartner: {
    title: "Partnership",

    partners: [
      {
        name: "European Gymnastics",
        logo: europeanGymnasticsLogo,
        logoVariant: "wide",
        description: "Official event partner and organizational support.",
      },
      {
        name: "Federação de Ginástica de Portugal",
        logo: fgpLogo,
        logoVariant: "wide",
        description: "Official event partner and organizational support.",
      },
    ],
  },

  description: {
    title:
      "The Event: Elite Training Camp (Trampoline, Double Mini Trampoline & Tumbling)",
    paragraphs: [
      "This is a high-performance technical camp developed in collaboration with European Gymnastics, the Portuguese Gymnastics Federation, and Sunlive (local partner). It brings together specialists in Trampoline, Double Mini Trampoline, and Tumbling for an intense training environment focused on technical growth and performance.",
      "Attendance is restricted and there is no public registration. Participation is by invitation or selection only, ensuring a limited group and the right conditions for advanced, high-level work.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Elite training camp in Trampoline, Double Mini Trampoline & Tumbling",
        "Delivered with European Gymnastics, Portuguese Gymnastics Federation & Sunlive",
        "High-performance technical environment with specialist coaching",
        "Closed event — invitation/selection only (no public registration)",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "mon",
        weekday: "Monday",
        date: "27 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "tue",
        weekday: "Tuesday",
        date: "28 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "wed",
        weekday: "Wednesday",
        date: "29 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "thu",
        weekday: "Thursday",
        date: "30 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "fri",
        weekday: "Friday",
        date: "31 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
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
    bg: "#1b1c3a",
    bgAlt: "#23245a",
    primary: "#5054a0",
    accent: "#ffd66b",
  },

  theme: {
    bg: "#1b1c3a",
    bgAlt: "#23245a",
    surface: "#2c2e73",
    surfaceAlt: "#35388a",
    primary: "#5054a0",
    secondary: "#f28c8c",
    accent: "#ffd66b",
    text: "#ffffff",
    textMuted: "#d6d8f0",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b1c3a",
    "--bgAlt": "#23245a",
    "--primary": "#5054a0",
    "--accent": "#ffd66b",
    "--heroBorder": "rgba(255, 214, 107, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6d8f0",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      dateLabel: "27–31 Julho, 2026",
      locationLabel: "Velódromo de Sangalhos • Centro de Alto Rendimento",
      actions: {
        primary: { label: "Inscrever-me" },
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      // como items não têm key/id/name -> substitui. Está ok (é pequeno).
      items: [
        { icon: "trophy", label: "Disciplina", value: "Trampolins" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "5 dias" },
        { icon: "users", label: "Capacidade", value: "+100 Atletas" },
      ],
    },

    team: {
      title: "Responsável do Evento",
    },

    officialPartner: {
      title: "Parceria",
      // ✅ agora faz merge por "name", por isso só traduzimos descrições
      partners: [
        {
          name: "European Gymnastics",
          description: "Parceiro oficial do evento e apoio organizacional.",
        },
        {
          name: "Federação de Ginástica de Portugal",
          description: "Parceiro oficial do evento e apoio organizacional.",
        },
      ],
    },

    description: {
      title:
        "O Evento: Estágio de Treino de Elite (Trampolim, Duplo Mini Trampolim e Tumbling)",
      paragraphs: [
        "Este é um estágio técnico de alto rendimento desenvolvido em colaboração com a European Gymnastics, a Federação de Ginástica de Portugal e a Sunlive (parceiro local). Reúne especialistas em Trampolim, Duplo Mini Trampolim e Tumbling, num ambiente de treino intenso focado no crescimento técnico e na performance.",
        "A participação é restrita e não existe inscrição pública. A presença é apenas por convite ou seleção, garantindo um grupo limitado e as condições certas para trabalho avançado e de alto nível.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Estágio de treino de elite em Trampolim, Duplo Mini Trampolim e Tumbling",
          "Realizado com European Gymnastics, Federação de Ginástica de Portugal e Sunlive",
          "Ambiente técnico de alto rendimento com treino especializado",
          "Evento fechado — apenas por convite/seleção (sem inscrição pública)",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "mon",
          weekday: "Segunda-feira",
          date: "27 Julho",
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
          weekday: "Terça-feira",
          date: "28 Julho",
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
          weekday: "Quarta-feira",
          date: "29 Julho",
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
          weekday: "Quinta-feira",
          date: "30 Julho",
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
          key: "fri",
          weekday: "Sexta-feira",
          date: "31 Julho",
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
