// src/config/content/events/sunlive-international-cup.js

import fpbLogo from "../../../assets/logos/fpb.png";

const base = {
  key: "sunlive-international-cup",

  hero: {
    title: "Sunlive International Tournament",
    dateLabel: "3–5 July, 2026",
    locationLabel: "Pavilhão Desportivo de Sangalhos",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Pavilh%C3%A3o%20Desportivo%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "sunlive-international-tournament.png",

    actions: {
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Basketball" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "3 days" },
      { icon: "users", label: "Capacity", value: "4 Teams" },
    ],
  },

  combinedContact: {
    title: "Event Leads / Partnership",
    name: "Federação Portuguesa de Basquetebol",
    description:
      "Event leads and official event partner, providing organizational support.",
    logo: fpbLogo,
    logoVariant: "tall",
  },

  description: {
    title: "The Event : U18 Basketball Tournament",
    paragraphs: [
      "Sangalhos welcomes the next generation of basketball. Through a strategic partnership between Sunlive and the Portuguese Basketball Federation, this tournament brings together top U18 prospects for three days of intense competition.",
      "Expect fast-paced games, strong matchups, and a competitive setting that puts emerging talent in the spotlight. All of it takes place in a high-performance environment built for both development and results.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "U18 basketball tournament",
        "Strategic partnership between Sunlive and the Portuguese Basketball Federation",
        "High-intensity games, fast pace, and strong matchups",
        "Showcasing emerging talent in a performance-driven environment",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "fri",
        weekday: "Friday",
        date: "3 Jul 2026",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
        ],
      },
      {
        key: "sat",
        weekday: "Saturday",
        date: "4 Jul 2026",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
        ],
      },
      {
        key: "sun",
        weekday: "Sunday",
        date: "5 Jul 2026",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
        ],
      },
    ],
  },

  layout: {
    bg: "#24140b",
    bgAlt: "#2f1a0e",
    primary: "#bd5c1f",
    accent: "#ffb27a",
  },

  theme: {
    bg: "#24140b",
    bgAlt: "#2f1a0e",
    surface: "#3a2112",
    surfaceAlt: "#472816",
    primary: "#bd5c1f",
    secondary: "#e27c3a",
    accent: "#ffb27a",
    text: "#ffffff",
    textMuted: "#e6cbb8",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#24140b",
    "--bgAlt": "#2f1a0e",
    "--primary": "#bd5c1f",
    "--accent": "#ffb27a",
    "--heroBorder": "rgba(255, 178, 122, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#e6cbb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {
    useCombinedContact: true,
  },
};

const i18n = {
  pt: {
    hero: {
      // ✅ não traduzimos o título do evento
      dateLabel: "3–5 Julho, 2026",
      actions: {
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "Basquetebol" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "3 dias" },
        { icon: "users", label: "Capacidade", value: "4 Equipas" },
      ],
    },

    combinedContact: {
      title: "Responsáveis / Parceria",
      description:
        "Responsáveis do evento e parceiro oficial, com apoio organizacional.",
    },

    description: {
      title: "O Evento: Torneio de Basquetebol Sub-18",
      paragraphs: [
        "Sangalhos recebe a próxima geração do basquetebol. Através de uma parceria estratégica entre a Sunlive e a Federação Portuguesa de Basquetebol, este torneio junta alguns dos melhores talentos Sub-18 durante três dias de competição intensa.",
        "Espera jogos rápidos, confrontos fortes e um contexto competitivo que coloca o talento emergente em destaque. Tudo isto num ambiente de alto rendimento pensado tanto para desenvolvimento como para resultados.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Torneio de basquetebol Sub-18",
          "Parceria estratégica entre a Sunlive e a Federação Portuguesa de Basquetebol",
          "Jogos de alta intensidade, ritmo elevado e confrontos fortes",
          "Talento emergente em destaque num ambiente orientado para a performance",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "fri",
          weekday: "Sexta-feira",
          date: "3 Julho",
          items: [
            { time: "A definir", title: "A definir", description: "A definir" },
          ],
        },
        {
          key: "sat",
          weekday: "Sábado",
          date: "4 Julho",
          items: [
            { time: "A definir", title: "A definir", description: "A definir" },
          ],
        },
        {
          key: "sun",
          weekday: "Domingo",
          date: "5 Julho",
          items: [
            { time: "A definir", title: "A definir", description: "A definir" },
          ],
        },
      ],
    },
  },
};

export default { key: base.key, base, i18n };
