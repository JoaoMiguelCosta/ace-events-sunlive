import bernado from "../../../assets/persons/bernardo.png"
import jonasbohr from "../../../assets/persons/jonas-bohr.png"
import aeroedgeLogo from "../../../assets/logos/aeroedge.png";

export default {
  key: "master-track-world-record",
  hero: {
    title: "Master Track World Record",
    dateLabel: "xx–xx June, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
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
      { icon: "calendar", label: "Duration", value: "x days" },
      { icon: "users", label: "Capacity", value: "xx athletes" },
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
    icon: "signal", // consome SignalHighIcon
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
