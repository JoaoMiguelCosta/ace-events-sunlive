export default {
  key: "teamgym",
  hero: {
    title: "TeamGym",
    dateLabel: "29 August - 8 September, 2026",
    locationLabel: "Anadia • High Performance Center",
    image: "teamgym.png",

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
    members: [
      { name: "Silvio", avatar: null },
      { name: "Vasco", avatar: null },
    ],
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

  program: {
    title: "Programa",
    days: [
      {
        key: "sun",
        weekday: "Domingo",
        date: "27 Jul",
        items: [
          {
            time: "09:00",
            title: "Check-in e Registo",
            description: "Receção dos participantes e entrega de materiais",
          },
          {
            time: "11:00",
            title: "Sessão de Boas-Vindas",
            description: "Apresentação da equipa técnica e programa",
          },
          { time: "12:30", title: "Almoço" },
          {
            time: "14:30",
            title: "Avaliação Técnica Inicial",
            description: "Análise individual do nível técnico",
          },
          {
            time: "17:00",
            title: "Treino de Aquecimento",
            description: "Sessão de adaptação ao equipamento",
          },
          { time: "19:00", title: "Jantar" },
        ],
      },
      { key: "mon", weekday: "Segunda", date: "28 Jul", items: [] },
      { key: "tue", weekday: "Terça", date: "29 Jul", items: [] },
      { key: "wed", weekday: "Quarta", date: "30 Jul", items: [] },
      { key: "thu", weekday: "Quinta", date: "31 Jul", items: [] },
    ],
  },

  // ✅ NOVO: Pricing
  pricing: {
    title: "Custos",
    icon: "signal", // consome SignalHighIcon
    plans: [
      {
        key: "athlete",
        name: "Atleta",
        price: "€350",
        items: [
          "Treinos e workshops",
          "Seguro desportivo",
          "Materiais do camp",
          "Certificado",
        ],
      },
      {
        key: "coach",
        name: "Treinador",
        price: "€200",
        items: [
          "Acesso a todas as sessões",
          "Materiais técnicos",
          "Certificado de formação",
        ],
      },
    ],
  },

  optionalExtras: {
    title: "Extras (Opcionais)",
    items: [
      { key: "accommodation", label: "Alojamento (4 noites)", price: "€180" },
      { key: "meals", label: "Refeições completas", price: "€120" },
      {
        key: "pack",
        label: "Pack Alojamento + Refeições",
        price: "€280",
      },
    ],
  },

  importantNotes: {
    label: "Notas:",
    text: "Os valores apresentados incluem IVA. Pagamento a efetuar no ato da inscrição. Cancelamentos até 15 dias antes do evento são reembolsáveis a 80%. Política de privacidade disponível no formulário de inscrição.",
  },

  registration: {
    title: "Garante a tua vaga",
    subtitle:
      "Não percas esta oportunidade única de treinar com os melhores. As vagas são limitadas!",
    buttonLabel: "Inscrever Agora",
    helper: "A inscrição é feita via Google Forms.",
  },

  footer: {
    text: "© Copyright 2026 Sunlive – All Rights Reserved",
  },

  layout: {
    bg: "#0f2333",
    bgAlt: "#162f45",
    primary: "#7bc5d7",
    accent: "#9fdbea",
  },

  theme: {
    bg: "#0f2333",
    bgAlt: "#162f45",
    surface: "#1f425e",
    surfaceAlt: "#27526f",
    primary: "#7bc5d7",
    secondary: "#213e5b",
    accent: "#9fdbea",
    text: "#ffffff",
    textMuted: "#c7dde6",
    border: "rgba(255,255,255,0.08)",
  },

  // ✅ NOVO: vars para passares ao <EventLayout style={content.cssVars} />
  cssVars: {
    "--bg": "#0f2333",
    "--bgAlt": "#162f45",
    "--primary": "#7bc5d7",
    "--accent": "#9fdbea",

    "--text": "#ffffff",
    "--textMuted": "#c7dde6",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};
