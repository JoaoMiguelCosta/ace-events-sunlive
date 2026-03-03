// src/config/content/events/stars-challenge.js

import manuelpastor from "../../../assets/persons/manuel-pastor.png";
import fgpLogo from "../../../assets/logos/fgp.png";

const base = {
  key: "stars-challenge",

  hero: {
    title: "Stars Challenge",
    dateLabel: "21 November, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "stars-challenge.png",

    actions: {
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Artistic Gymnastics" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "1 day" },
      { icon: "users", label: "Capacity", value: "12 Athletes" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [{ name: "Manuel Pastor", avatar: manuelpastor }],
  },

  officialPartner: {
    title: "Partnership",
    name: "Federação de Ginástica de Portugal",
    description: "Official event partner and organizational support.",
    logo: fgpLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : Artistic Gymnastics Competition (WAG & MAG)",
    paragraphs: [
      "The flagship event of the year. Stars Challenge is a world-class show that brings top Women’s and Men’s Artistic Gymnastics to the Velodrome, turning it into a prestigious stage where technical excellence meets spectacle.",
      "Entry is by invitation only, with limited participation and attendance. This keeps the atmosphere premium and focused on high-level performances, ending in a gala-style night designed to be memorable on and off the floor.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "World-class Artistic Gymnastics gala/competition (Women’s & Men’s)",
        "A prestigious event where technical excellence meets spectacle",
        "Gala format with top-level performances and premium production",
        "Exclusive access — invitation only",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "sat",
        weekday: "Saturday",
        date: "21 Nov",
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

  cssVars: {
    "--bg": "#1b1405",
    "--bgAlt": "#241c08",
    "--primary": "#d4af37",
    "--accent": "#fff1b0",
    "--heroBorder": "rgba(255, 241, 176, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#e6ddb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      dateLabel: "21 Novembro, 2026",
      locationLabel: "Velódromo de Sangalhos • Centro de Alto Rendimento",
      actions: {
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "Ginástica Artística" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "1 dia" },
        { icon: "users", label: "Capacidade", value: "12 Atletas" },
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
      title: "O Evento: Competição de Ginástica Artística (WAG & MAG)",
      paragraphs: [
        "O evento principal do ano. O Stars Challenge é um espetáculo de classe mundial que traz a melhor Ginástica Artística Feminina e Masculina ao Velódromo, transformando-o num palco prestigiado onde a excelência técnica se encontra com o espetáculo.",
        "A entrada é apenas por convite, com participação e assistência limitadas. Isto mantém um ambiente premium e focado em atuações de alto nível, culminando numa noite em formato gala pensada para ser memorável dentro e fora do praticável.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Gala/competição de Ginástica Artística de classe mundial (Feminina e Masculina)",
          "Um evento prestigiado onde a excelência técnica se encontra com o espetáculo",
          "Formato gala com atuações de alto nível e produção premium",
          "Acesso exclusivo — apenas por convite",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "sat",
          weekday: "Sábado",
          date: "21 Novembro",
          items: [
            {
              time: "A definir",
              title: "A definir",
              description: "A definir",
            },
          ],
        },
      ],
    },
  },
};

export default { key: base.key, base, i18n };
