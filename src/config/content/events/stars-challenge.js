import manuelpastor from "../../../assets/persons/manuel-pastor.png";

// ✅ logo wide
import fgpLogo from "../../../assets/logos/fgp.png";

export default {
  key: "stars-challenge",
  hero: {
    title: "Stars Challenge",
    dateLabel: "21 November, 2026",
    locationLabel: "Anadia • High Performance Center",
    image: "stars-challenge.png",

    actions: {
      secondary: { label: "Download Program", href: "/" },
    },
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "definer to later" },
      { icon: "award", label: "Level", value: "definer to later" },
      { icon: "calendar", label: "Duration", value: "1 day" },
      { icon: "users", label: "Capacity", value: "xx athletes" },
    ],
  },

  team: {
    title: "Event Lead",
    members: [{ name: "Manuel Pastor", avatar: manuelpastor }],
  },

  officialPartner: {
    title: "Partnership",
    name: "Federação de Ginástica de Portugal",
    description: "Official event partner and organizational support.",
    logo: fgpLogo,
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

  footer: {
    text: "© Copyright 2026 Sunlive – All Rights Reserved",
  },

  layout: {
    bg: "#1b1405",
    bgAlt: "#241c08",
    primary: "#d4af37",
    accent: "#fff1b0",
  },

  theme: {
    bg: "#1b1405",
    bgAlt: "#241c08",
    surface: "#2f260b",
    surfaceAlt: "#3a300f",
    primary: "#d4af37",
    secondary: "#f1d77a",
    accent: "#fff1b0",
    text: "#ffffff",
    textMuted: "#e6ddb8",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#1b1405",
    "--bgAlt": "#241c08",
    "--primary": "#d4af37",
    "--accent": "#fff1b0",
    "--heroBorder": "rgba(255, 241, 176, 0.35)",
    "--text": "#ffffff",
    "--textMuted": "#e6ddb8",
    "--border": "rgba(255,255,255,0.08)",
  },

  flags: {
    hideHeroActions: true,
  },
};
