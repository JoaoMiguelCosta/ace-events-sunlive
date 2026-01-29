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
      { icon: "trophy", label: "Discipline", value: "Trampolines" },
      { icon: "award", label: "Level", value: "International Camp" },
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
