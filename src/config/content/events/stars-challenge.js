export default {
  key: "stars-challenge",
  hero: {
    title: "Stars Challenge",
    dateLabel: "21 November, 2026",
    locationLabel: "Anadia • High Performance Center",
    image: "stars-challenge.png",

    actions: {
      primary: { label: "Inscrever", href: "/" },
      secondary: { label: "Download Programa", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Modalidade", value: "Trampolins" },
      { icon: "award", label: "Nível", value: "International Camp" },
      { icon: "calendar", label: "Duração", value: "5 days" },
      { icon: "users", label: "Capacidade", value: "40 athletes" },
    ],
  },

  team: {
    title: "Responsáveis",
    members: [{ name: "Manuel Pastor", avatar: null }],
  },

  officialPartner: {
    title: "Parceria",
    name: "Sunlive",
    description: "Parceiro oficial do evento e apoio à organização.",
    logo: null,
  },

  description: {
    title: "Sobre o Evento",
    paragraphs: [
      "O EG Trampolins Training Camp 2026 é um estágio internacional de alta performance destinado a atletas e treinadores que pretendem elevar o seu nível técnico e competitivo. Durante 5 dias intensivos, os participantes terão acesso a sessões de treino especializadas, workshops temáticos e acompanhamento personalizado por parte de uma equipa técnica de excelência.",
      "Este campo de treino oferece uma oportunidade única de desenvolvimento num ambiente profissional, com acesso a equipamentos de última geração e metodologias de treino inovadoras utilizadas pelas principais seleções internacionais.",
    ],
    highlights: {
      title: "Destaques",
      icon: "check",
      items: [
        "Sessões técnicas diárias com treinadores internacionais",
        "Workshops de preparação física e mental",
        "Networking com atletas de diferentes países",
        "Análise de vídeo e feedback personalizado",
        "Sessões de recuperação e fisioterapia",
        "Certificado de participação oficial",
      ],
    },
  },

  footer: {
    text: "© Copyright 2026 Sunlive – All Rights Reserved",
  },

  layout: {
    bg: "#1b1405",
    bgAlt: "#241c08",
    primary: "#d4af37",
    accent: "#fff1b0",
  },

  theme: {
    bg: "#1b1405",
    bgAlt: "#241c08",
    surface: "#2f260b",
    surfaceAlt: "#3a300f",
    primary: "#d4af37",
    secondary: "#f1d77a",
    accent: "#fff1b0",
    text: "#ffffff",
    textMuted: "#e6ddb8",
    border: "rgba(255,255,255,0.08)",
  },

  // ✅ NOVO: vars para passares ao <EventLayout style={content.cssVars} />
  cssVars: {
    "--bg": "#1b1405",
    "--bgAlt": "#241c08",
    "--primary": "#d4af37",
    "--accent": "#fff1b0",

    "--text": "#ffffff",
    "--textMuted": "#e6ddb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {
    hideHeroActions: true,
  },
};
