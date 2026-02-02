import ionuttrandaburu from "../../../assets/persons/ionut-trandaburu.png"
import fgpLogo from "../../../assets/logos/fgp.png";

export default {
  key: "international-coaching-academy",
  hero: {
    title: "Sunlive International Coaching Academy",
    dateLabel: "10–16 August, 2026",
    locationLabel: "Anadia • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "coaching-academy.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Artistic Gymnastics" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "definer to later" },
      { icon: "users", label: "Capacity", value: "definer to later" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [{ name: "Ionut Trandaburu", avatar: ionuttrandaburu }],
  },

  officialPartner: {
    title: "Partnership",
    name: "Federação de Ginástica de Portugal",
    description: "Official event partner and organizational support.",
    logo: fgpLogo,
    logoVariant: "wide",
  },

  description: {
    title:
      "The Event : Sunlive International Coaching Academy (High-Performance Week)",
    paragraphs: [
      "Sunlive International Coaching Academy is an intensive week designed for coaches and athletes who want to level up their training with a clear, practical method. In a high-performance environment, you’ll focus on fundamentals, smart progressions, and training habits that transfer directly to daily practice.",
      "Across daily sessions and short clinics, the goal is simple: improve technical quality, sharpen coaching decisions, and learn from an international setting. Expect hands-on work, real feedback, and space to exchange ideas with people who live the sport at a high level.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Apparatus specialists for feedback and on-floor Q&A",
        "Strength & conditioning and speed work (fast-track)",
        "International networking in a high-performance center",
        "Extra sessions: planning, judging, and competition preparation",
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
    bg: "#1b2a1f",
    bgAlt: "#243a2a",
    primary: "#ae8d4c",
    accent: "#765d2d",
  },

  theme: {
    bg: "#1b2a1f",
    bgAlt: "#243a2a",
    surface: "#2e4a36",
    surfaceAlt: "#375a41",
    primary: "#ae8d4c",
    secondary: "#ffedc9",
    accent: "#765d2d",
    text: "#ffffff",
    textMuted: "#e6dcc8",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b2a1f",
    "--bgAlt": "#243a2a",
    "--primary": "#ae8d4c",
    "--accent": "#765d2d",
    "--heroBorder": "rgba(118, 93, 45, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#e6dcc8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};
