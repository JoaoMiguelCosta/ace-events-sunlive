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
    title: "The Event : U18 Basketball Tournament",
    paragraphs: [
      "The future of basketball comes to Sangalhos. In a strategic partnership between Sunlive and the Portuguese Basketball Federation, this tournament brings together the top U18 prospects for three days of high-intensity competition.",
      "Expect fast-paced games, strong matchups, and a competitive environment that highlights emerging talent — all hosted in an elite setting built for performance and development.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "U18 basketball tournament",
        "Strategic partnership between Sunlive and the Portuguese Basketball Federation",
        "High-intensity games, fast pace, and strong matchups",
        "Showcasing emerging talent in a performance-driven environment",
       
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
