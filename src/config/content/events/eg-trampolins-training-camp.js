import luisnunes from "../../../assets/persons/luis-nunes.png";
import europeanGymnasticsLogo from "../../../assets/logos/european-gymnastics.png";
import fgpLogo from "../../../assets/logos/fgp.png";

export default {
  key: "eg-trampolins-training-camp",
  hero: {
    title: "EG Trampolines Training Camp",
    dateLabel: "27–31 July, 2026",
    locationLabel: "Portugal • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "eg-trampolins.png",

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Trampoline Gymnastics" },
      { icon: "award", label: "Level", value: "European" },
      { icon: "calendar", label: "Duration", value: "5 days" },
      { icon: "users", label: "Capacity", value: "definer to later" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [{ name: "Luís Nunes", avatar: luisnunes }],
  },

  officialPartner: {
    title: "Partnership",

    partners: [
      {
        name: "European Gymnastics",
        logo: europeanGymnasticsLogo,
        logoVariant: "wide",
        description: "Official event partner and organizational support.",
      },
      {
        name: "Federação de Ginástica de Portugal",
        logo: fgpLogo,
        logoVariant: "wide",
        description: "Official event partner and organizational support.",
      },
    ],
  },

  description: {
    title:
      "The Event: Elite Training Camp (Trampoline, Double Mini Trampoline & Tumbling)",
    paragraphs: [
      "A high-level technical event developed through the collaboration between European Gymnastics, the Portuguese Gymnastics Federation, and Sunlive (local partner). This exclusive camp brings together specialists in Trampoline, Double Mini Trampoline, and Tumbling for a true high-performance training experience.",
      "Access: Closed event — no public registrations. Participation is by invitation/selection only, ensuring an elite environment focused on advanced technical development and performance.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Elite training camp in Trampoline, Double Mini Trampoline & Tumbling",
        "Delivered with European Gymnastics, Portuguese Gymnastics Federation & Sunlive",
        "High-performance technical environment with specialist coaching",
        "Closed event — invitation/selection only (no public registration)",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "mon",
        weekday: "Monday",
        date: "27 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "tue",
        weekday: "Tuesday",
        date: "28 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "wed",
        weekday: "Wednesday",
        date: "29 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "thu",
        weekday: "Thursday",
        date: "30 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
      },
      {
        key: "fri",
        weekday: "Friday",
        date: "31 July",
        items: [
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          {
            time: "To be defined",
            title: "To be defined",
            description: "To be defined",
          },
          { time: "To be defined", title: "To be defined" },
        ],
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
    bg: "#1b1c3a",
    bgAlt: "#23245a",
    primary: "#5054a0",
    accent: "#ffd66b",
  },

  theme: {
    bg: "#1b1c3a",
    bgAlt: "#23245a",
    surface: "#2c2e73",
    surfaceAlt: "#35388a",
    primary: "#5054a0",
    secondary: "#f28c8c",
    accent: "#ffd66b",
    text: "#ffffff",
    textMuted: "#d6d8f0",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b1c3a",
    "--bgAlt": "#23245a",
    "--primary": "#5054a0",
    "--accent": "#ffd66b",
    "--heroBorder": "rgba(255, 214, 107, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#d6d8f0",
    "--border": "rgba(255,255,255,0.08)",
  },
  flags: {},
};
