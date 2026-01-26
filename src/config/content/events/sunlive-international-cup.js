export default {
  key: "sunlive-international-cup",
  hero: {
    title: "Sunlive International Tournament",
    dateLabel: "3–5 July, 2026",
    locationLabel: "Anadia • High Performance Center",
    image: "sunlive-international-tournament.png",

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

  combinedContact: {
    title: "Responsáveis/Parceria",
    name: "Sunlive",
    description:
      "Responsáveis e Parceiro oficial do evento e apoio à organização.",
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

  // ✅ NOVO: vars para passares ao <EventLayout style={content.cssVars} />
  cssVars: {
    "--bg": "#24140b",
    "--bgAlt": "#2f1a0e",
    "--primary": "#bd5c1f",
    "--accent": "#ffb27a",

    "--text": "#ffffff",
    "--textMuted": "#e6cbb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {
    hideHeroActions: true,
    useCombinedContact: true,
  },
};
