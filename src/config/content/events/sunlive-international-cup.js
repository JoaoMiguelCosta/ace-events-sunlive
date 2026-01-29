import fpbLogo from "../../../assets/logos/fpb.png";

export default {
  key: "sunlive-international-cup",
  hero: {
    title: "Sunlive International Tournament",
    dateLabel: "3–5 July, 2026",
    locationLabel: "Pavilhão Desportivo de Sangalhos",
    image: "sunlive-international-tournament.png",

    // ✅ overrides
    bgPos: "93% 12%", // right + top
    bleedX: 3,
    bleedY: 14, // mais topo/fundo
    bgScale: 1.002, // menos crop

    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Trampolines" },
      { icon: "award", label: "Level", value: "International Camp" },
      { icon: "calendar", label: "Duration", value: "3 days" },
      { icon: "users", label: "Capacity", value: "xx athletes" },
    ],
  },

  combinedContact: {
    title: "Event Leads / Partnership",
    name: "Federação Portuguesa de Basquetebol",
    description:
      "Event leads and official event partner, providing organizational support.",
    logo: fpbLogo,
    logoVariant: "tall",
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

  footer: {
    text: "© Copyright 2026 Sunlive – All Rights Reserved",
  },

  layout: {
    bg: "#24140b",
    bgAlt: "#2f1a0e",
    primary: "#bd5c1f",
    accent: "#ffb27a",
  },

  theme: {
    bg: "#24140b",
    bgAlt: "#2f1a0e",
    surface: "#3a2112",
    surfaceAlt: "#472816",
    primary: "#bd5c1f",
    secondary: "#e27c3a",
    accent: "#ffb27a",
    text: "#ffffff",
    textMuted: "#e6cbb8",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#24140b",
    "--bgAlt": "#2f1a0e",
    "--primary": "#bd5c1f",
    "--accent": "#ffb27a",
    "--heroBorder": "rgba(255, 178, 122, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#e6cbb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {
    hideHeroActions: true,
    useCombinedContact: true,
  },
};
