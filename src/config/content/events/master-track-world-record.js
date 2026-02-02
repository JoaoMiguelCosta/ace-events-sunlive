import bernado from "../../../assets/persons/bernardo.png"
import jonasbohr from "../../../assets/persons/jonas-bohr.png"
import aeroedgeLogo from "../../../assets/logos/aeroedge.png";

export default {
  key: "master-track-world-record",
  hero: {
    title: "Master Track World Record",
    dateLabel: "definer to later, June, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "master-track.png",

    // ✅ overrides
    bgPos: "97% 82%", // right + bottom
    bleedX: 3,
    bleedY: 12,
    bgScale: 1.003,

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
    title: "Event Leads",
    members: [
      { name: "Bernardo", avatar: bernado },
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
    title: "About the Event",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
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
