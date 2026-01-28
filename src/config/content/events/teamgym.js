import silvio from "../../../assets/persons/silvio.png"
import vasco from "../../../assets/persons/vasco.png"

export default {
  key: "teamgym",
  hero: {
    title: "TeamGym",
    dateLabel: "29 August - 8 September, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    image: "teamgym.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Trampolines" },
      { icon: "award", label: "Level", value: "International Camp" },
      { icon: "calendar", label: "Duration", value: "11 days" },
      { icon: "users", label: "Capacity", value: "xx athletes" },
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
    name: "Sunlive",
    description: "Official event partner and organizational support.",
    logo: null,
  },

  description: {
    title: "About the Event",
    paragraphs: [
      "The EG Trampolines Training Camp 2026 is a high-performance international camp designed for athletes and coaches who want to elevate their technical and competitive level. Over 5 intensive days, participants will have access to specialized training sessions, themed workshops, and personalized support from an outstanding technical staff.",
      "This training camp offers a unique development opportunity in a professional environment, with access to state-of-the-art equipment and innovative training methodologies used by leading international teams.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Daily technical sessions with international coaches",
        "Strength and mental preparation workshops",
        "Networking with athletes from different countries",
        "Video analysis and personalized feedback",
        "Recovery sessions and physiotherapy support",
        "Official participation certificate",
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

    "--text": "#ffffff",
    "--textMuted": "#c7dde6",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {},
};
