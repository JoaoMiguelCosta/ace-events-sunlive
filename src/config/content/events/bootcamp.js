// src/config/content/events/bootcamp.js

import camilaFerezin from "../../../assets/persons/camila-ferezin.png";
import brunaMartins from "../../../assets/persons/bruna-martins.png";
import cbgLogo from "../../../assets/logos/cbg.png";

export default {
  key: "bootcamp",
  hero: {
    title: "Bootcamp GR",
    dateLabel: "xx–xx June, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    image: "bootcamp.png",
    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },

    // ✅ só para este banner (corrige topo/fundo + apanha o logo Sunlive)
    bgPos: "85% 65%",
    bleedX: 3,
    bleedY: 10, // 🔥 mais bleed vertical (topo/fundo)
    bgScale: 1.005, // 🔥 menos crop
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "definer to later" },
      { icon: "award", label: "Level", value: "definer to later" },
      { icon: "calendar", label: "Duration", value: "x days" },
      { icon: "users", label: "Capacity", value: "xx athletes" },
    ],
  },

  team: {
    title: "Event Leads",
    members: [
      { name: "Camila Ferizin", avatar: camilaFerezin },
      { name: "Bruna Martins", avatar: brunaMartins },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "Confederação Brasileira de Ginástica",
    description: "Official event partner and organizational support.",
    logo: cbgLogo,
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
        weekday: "Sunday",
        date: "27 Jul",
        items: [
          {
            time: "09:00",
            title: "Check-in and Registration",
            description: "Participant reception and materials handout",
          },
          {
            time: "11:00",
            title: "Welcome Session",
            description:
              "Introduction of the coaching staff and program overview",
          },
          { time: "12:30", title: "Lunch" },
          {
            time: "14:30",
            title: "Initial Technical Assessment",
            description: "Individual analysis of technical level",
          },
          {
            time: "17:00",
            title: "Warm-up Training",
            description: "Equipment familiarization session",
          },
          { time: "19:00", title: "Dinner" },
        ],
      },
      { key: "mon", weekday: "Monday", date: "28 Jul", items: [] },
      { key: "tue", weekday: "Tuesday", date: "29 Jul", items: [] },
      { key: "wed", weekday: "Wednesday", date: "30 Jul", items: [] },
      { key: "thu", weekday: "Thursday", date: "31 Jul", items: [] },
    ],
  },

  pricing: {
    title: "Pricing",
    icon: "signal",
    plans: [
      {
        key: "athlete",
        name: "Athlete",
        price: "€350",
        items: [
          "Training sessions and workshops",
          "Sports insurance",
          "Camp materials",
          "Certificate",
        ],
      },
      {
        key: "coach",
        name: "Coach",
        price: "€200",
        items: [
          "Access to all sessions",
          "Technical materials",
          "Training certificate",
        ],
      },
    ],
  },

  optionalExtras: {
    title: "Extras (Optional)",
    items: [
      {
        key: "accommodation",
        label: "Accommodation (4 nights)",
        price: "€180",
      },
      { key: "meals", label: "Full meals", price: "€120" },
      {
        key: "pack",
        label: "Accommodation + Meals Package",
        price: "€280",
      },
    ],
  },

  importantNotes: {
    label: "Notes:",
    text: "All prices include VAT. Payment is due at registration. Cancellations up to 15 days before the event are refundable at 80%. Privacy policy is available in the registration form.",
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
    bg: "#061f3a",
    bgAlt: "#07376c",
    primary: "#45c908",
    accent: "#9dff00",
  },

  theme: {
    bg: "#061f3a",
    bgAlt: "#07376c",
    surface: "#0b4a8a",
    surfaceAlt: "#0e5ba8",
    primary: "#45c908",
    secondary: "#c8f306",
    accent: "#9dff00",
    text: "#ffffff",
    textMuted: "#cfe6c2",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#061f3a",
    "--bgAlt": "#07376c",
    "--primary": "#45c908",
    "--accent": "#9dff00",
    "--text": "#ffffff",
    "--textMuted": "#cfe6c2",
    "--border": "rgba(255,255,255,0.08)",
    "--heroBorder": "rgba(157,255,0,0.35)", // ou usa a cor que quiseres
  },

  flags: {},
};
