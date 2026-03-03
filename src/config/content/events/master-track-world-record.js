// src/config/content/events/master-track-world-record.js

import bernado from "../../../assets/persons/bernardo.png";
import jonasbohr from "../../../assets/persons/jonas-bohr.png";
import aeroedgeLogo from "../../../assets/logos/aeroedge.png";

const base = {
  key: "master-track-world-record",

  hero: {
    title: "Master Track Hour World Record",
    dateLabel: "4 June, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "master-track.png",

    actions: {
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Track Cycling" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "2 Days" },
      { icon: "users", label: "Capacity", value: "4 Athletes" },
    ],
  },

  team: {
    title: "Event Leads",
    members: [
      { name: "Bernardo Gonçalves", avatar: bernado },
      { name: "Jonas Bohr", avatar: jonasbohr },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "AeroEdge",
    description: "Official event partner and organizational support.",
    logo: aeroedgeLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : Aeroedge and Sunlive Cycling , Hour Record",
    paragraphs: [
      "The hour record is a solo cycling time trial where the rider tries to cover the maximum possible distance in exactly 60 minutes, typically on an indoor velodrome to keep conditions controlled.",
      "It’s one of the purest tests of cycling performance because success depends on sustaining high power while minimizing aerodynamic drag and optimizing biomechanical efficiency.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Hour Record attempt — 60-minute solo time trial for maximum distance",
        "Held at the Sangalhos Velodrome in a controlled indoor environment",
        "Performance-driven focus: power, aerodynamics, and biomechanical efficiency",
        "Official partnership with AeroEdge with organizational support",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "thu",
        weekday: "Thursday",
        date: "4 Jun 2026",
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
    bg: "#1c1f17",
    bgAlt: "#24281d",
    primary: "#cebb92",
    accent: "#e6d9b5",
  },

  theme: {
    bg: "#1c1f17",
    bgAlt: "#24281d",
    surface: "#2c3123",
    surfaceAlt: "#363c2b",
    primary: "#cebb92",
    secondary: "#b7a87f",
    accent: "#e6d9b5",
    text: "#ffffff",
    textMuted: "#d6d2c6",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1c1f17",
    "--bgAlt": "#24281d",
    "--primary": "#cebb92",
    "--accent": "#e6d9b5",
    "--heroBorder": "rgba(230, 217, 181, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6d2c6",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};

const i18n = {
  pt: {
    hero: {
      // ✅ não traduzimos o título do evento
      dateLabel: "4 Junho, 2026",
      locationLabel: "Velódromo de Sangalhos • Centro de Alto Rendimento",
      actions: {
        secondary: { label: "Download do Programa" },
      },
    },

    overview: {
      items: [
        { icon: "trophy", label: "Disciplina", value: "Ciclismo de Pista" },
        { icon: "award", label: "Nível", value: "Internacional" },
        { icon: "calendar", label: "Duração", value: "2 Dias" },
        { icon: "users", label: "Capacidade", value: "4 Atletas" },
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
      title: "O Evento: AeroEdge e Sunlive Cycling, Recorde da Hora",
      paragraphs: [
        "O recorde da hora é um contrarrelógio individual em que o ciclista tenta percorrer a maior distância possível em exatamente 60 minutos, normalmente num velódromo coberto para manter as condições controladas.",
        "É um dos testes mais puros do ciclismo porque o sucesso depende de manter elevada potência, minimizar o arrasto aerodinâmico e otimizar a eficiência biomecânica.",
      ],
      highlights: {
        title: "Destaques",
        items: [
          "Tentativa de Recorde da Hora — contrarrelógio individual de 60 minutos para a máxima distância",
          "Realizado no Velódromo de Sangalhos, num ambiente coberto e controlado",
          "Foco total na performance: potência, aerodinâmica e eficiência biomecânica",
          "Parceria oficial com a AeroEdge, com apoio organizacional",
        ],
      },
    },

    program: {
      title: "Programa",
      days: [
        {
          key: "thu",
          weekday: "Quinta-feira",
          date: "4 Junho",
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
