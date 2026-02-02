// src/config/content/events/teamgym.js
import silvio from "../../../assets/persons/silvio.png";
import vasco from "../../../assets/persons/vasco.png";

// ✅ logo para a secção Partnership (TeamGym)
import teamGymLogo from "../../../assets/logos/team-gym.png";

export default {
  key: "teamgym",
  hero: {
    title: "TeamGym",
    dateLabel: "29 August - 8 September, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    image: "teamgym.png",

    // ✅ overrides
    bgPos: "98% 20%", // right + top
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
      { name: "Silvio", avatar: silvio },
      { name: "Vasco", avatar: vasco },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "TeamGym Luxembourg",
    description: "Official event partner and organizational support.",
    logo: teamGymLogo,
    logoVariant: "tall", // ✅ "wide" | "tall" | (vazio = default)
  },

  description: {
    title: "The Event : TeamGym Training Camp with Silvio Sagramola",
    paragraphs: [
      "TeamGym excellence arrives at the Velodrome through a partnership with renowned specialist Silvio Sagramola. Over more than a week, teams and athletes focus on developing the technical and acrobatic skills that define this dynamic discipline.",
      "The camp combines structured sessions, progressive drills, and performance-focused coaching — supporting both individual improvement and team cohesion in a high-performance training environment.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "TeamGym training camp led by Silvio Sagramola",
        "Over a week of technical and acrobatic development",
        "Structured sessions with progressive drills and discipline-specific work",
        "Focused on individual improvement and team cohesion in a high-performance environment",
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

  cssVars: {
    "--bg": "#0f2333",
    "--bgAlt": "#162f45",
    "--primary": "#7bc5d7",
    "--accent": "#9fdbea",
    "--heroBorder": "rgba(159, 219, 234, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#c7dde6",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};
