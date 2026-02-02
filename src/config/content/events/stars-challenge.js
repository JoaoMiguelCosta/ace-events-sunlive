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
      { icon: "calendar", label: "Duration", value: "definer to later" },
      { icon: "users", label: "Capacity", value: "definer to later" },
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
    title: "The Event : Artistic Gymnastics Competition (WAG & MAG)",
    paragraphs: [
      "The most exclusive event of the year. Stars Challenge is a world-class show that brings the elite of Women’s and Men’s Artistic Gymnastics to the Velodrome — a prestigious stage where technical perfection meets spectacle.",
      "Access: Exclusive — invite only. Participation and attendance are limited, creating a premium environment for high-level performances and an unforgettable gala-style competition.",
    ],

    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "World-class Artistic Gymnastics gala/competition (Women’s & Men’s)",
        "A prestigious event where technical excellence meets spectacle",
        "Gala format with top-level performances and premium production",
        "Exclusive access — invitation only",
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
