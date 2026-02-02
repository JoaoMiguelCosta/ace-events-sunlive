import fernandatrigo from "../../../assets/persons/fernanda-trigo.png";
import raissatrigo from "../../../assets/persons/raissa-trigo.png";

import sasquiatrigo from "../../../assets/persons/sasquia-trigo.png";
import gremiLogo from "../../../assets/logos/gremi.png";


export default {
  key: "rhythmic-gymnastics-sunset-cup",
  hero: {
    title: "Rhythmic Gymnastics Sunset Cup",
    dateLabel: "definer to later, April, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    image: "rg-sunset.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "definer to later" },
      { icon: "award", label: "Level", value: "definer to later" },
      { icon: "calendar", label: "Duration", value: "definer to later" },
      { icon: "users", label: "Capacity", value: "definer to later" },
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
        items: [],
      },
      {
        key: "tue",
        weekday: "definer to later",
        date: "definer to later",
        items: [],
      },
      {
        key: "wed",
        weekday: "definer to later",
        date: "definer to later",
        items: [],
      },
      {
        key: "thu",
        weekday: "definer to later",
        date: "definer to later",
        items: [],
      },
    ],
  },

  pricing: {
    title: "Pricing",
    icon: "signal", // consome SignalHighIcon
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
      {
        key: "pack",
        label: "definer to later",
        price: "definer to later",
      },
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

  footer: {
    text: "© Copyright 2026 Sunlive – All Rights Reserved",
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
