import fernandopiccirilo from "../../../assets/persons/fernando-piccirilo.png";
import alexandrealmeida from "../../../assets/persons/alexandre-almeida.png";

// ✅ logo wide
import fdpLogo from "../../../assets/logos/fdp.png";

export default {
  key: "sunlive-bmx-trophy-c2",
  hero: {
    title: "Sunlive BMX Trophy C2",
    dateLabel: "definer to later, September, 2026",
    locationLabel: "Olympic BMX Track • Anadia",
    image: "bmx-trophy.png",

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
      { name: "Alexandre Almeida", avatar: alexandrealmeida },
      { name: "Fernando Piccirilo", avatar: fernandopiccirilo },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "Federação Portuguesa de Ciclismo",
    description: "Official event partner and organizational support.",
    logo: fdpLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : BMX Race (C2 Category)",
    paragraphs: [
      "Pure adrenaline on the track. In partnership with the Portuguese Cycling Federation, the Sunlive Trophy brings an official C2-level competition to the Velodrome, challenging BMX riders to showcase their technique and speed.",
      "Expect explosive starts, technical lines, and intense head-to-head racing — an event built for high performance and a true competitive atmosphere.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "“Official BMX race — C2 category",
        "In partnership with the Portuguese Cycling Federation",
        "Focused on technique, speed, and technical lines",
        "Intense racing with explosive starts and head-to-head battles",
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
    bg: "#1b150e",
    bgAlt: "#231b12",
    primary: "#573a1d",
    accent: "#a07445",
  },

  theme: {
    bg: "#1b150e",
    bgAlt: "#231b12",
    surface: "#2d2318",
    surfaceAlt: "#372c1f",
    primary: "#573a1d",
    secondary: "#7a5230",
    accent: "#a07445",
    text: "#ffffff",
    textMuted: "#d6c8bb",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b150e",
    "--bgAlt": "#231b12",
    "--primary": "#573a1d",
    "--accent": "#a07445",
    "--heroBorder": "rgba(160, 116, 69, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6c8bb",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};
