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
      { icon: "trophy", label: "Discipline", value: "definer to later" },
      { icon: "award", label: "Level", value: "definer to later" },
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
