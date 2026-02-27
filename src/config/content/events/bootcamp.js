// src/config/content/events/bootcamp.js

import camilaFerezin from "../../../assets/persons/camila-farezin.png";
import brunaMartins from "../../../assets/persons/bruna-martins.png";
import cbgLogo from "../../../assets/logos/cbg.png";

export default {
  key: "bootcamp",
  hero: {
    title: "Bootcamp GR",
    dateLabel: "definer to later, April, 2026",
    locationLabel: "Velódromo de Sangalhos • High Performance Center",
    locationHref:
      "https://www.google.com/maps/search/?api=1&query=Vel%C3%B3dromo%20Nacional%20de%20Sangalhos%2C%203780-524%20Sangalhos%2C%20Portugal",
    image: "bootcamp.png",
    actions: {
      primary: { label: "Register", href: "#register" },
      secondary: { label: "Download Program", href: "/" },
    },

   
  },

  overview: {
    items: [
      { icon: "trophy", label: "Discipline", value: "Rhythmic Gymnastics" },
      { icon: "award", label: "Level", value: "International" },
      { icon: "calendar", label: "Duration", value: "definer to later" },
      { icon: "users", label: "Capacity", value: "definer to later" },
    ],
  },

  team: {
    title: "Event Leads",
    members: [
      { name: "Camila Ferizin", avatar: camilaFerezin },
      { name: "Bruna Martins", avatar: brunaMartins },
    ],
  },

  officialPartner: {
    title: "Partnership",
    name: "Confederação Brasileira de Ginástica",
    description: "Official event partner and organizational support.",
    logo: cbgLogo,
    logoVariant: "wide",
  },

  description: {
    title: "The Event : Rhythmic Gymnastics Clinic with Camila Ferezin",
    paragraphs: [
      "A great chance to learn and sharpen your technique. Led by renowned coach Camila Ferezin, this Rhythmic Gymnastics clinic welcomes gymnasts of all levels at the Velodrome of Sangalhos.",
      "Training is intensive and detail-focused, with coaching adapted to each gymnast’s needs. The goal is steady progress through refinement, clearer execution, and stronger technical foundations, whether you’re just starting out or working at an advanced level.",
    ],
    highlights: {
      title: "Highlights",
      icon: "check",
      items: [
        "Rhythmic Gymnastics clinic led by Camila Ferezin",
        "“Hosted at the Sangalhos Velodrome",
        "Intensive training focused on technical improvement",
        "Open to all levels, with guidance adapted to each gymnast",
      ],
    },
  },

  program: {
    title: "Program",
    days: [
      {
        key: "sun",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
      {
        key: "mon",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
      {
        key: "tue",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
      {
        key: "wed",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
        ],
      },
      {
        key: "thu",
        weekday: "definer to later",
        date: "definer to later",
        items: [
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          {
            time: "definer to later",
            title: "definer to later",
            description: "definer to later",
          },
          { time: "definer to later", title: "definer to later" },
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
    bg: "#061f3a",
    bgAlt: "#07376c",
    primary: "#45c908",
    accent: "#9dff00",
  },

  theme: {
    bg: "#061f3a",
    bgAlt: "#07376c",
    surface: "#0b4a8a",
    surfaceAlt: "#0e5ba8",
    primary: "#45c908",
    secondary: "#c8f306",
    accent: "#9dff00",
    text: "#ffffff",
    textMuted: "#cfe6c2",
    border: "rgba(255,255,255,0.08)",
  },

  cssVars: {
    "--bg": "#061f3a",
    "--bgAlt": "#07376c",
    "--primary": "#45c908",
    "--accent": "#9dff00",
    "--text": "#ffffff",
    "--textMuted": "#cfe6c2",
    "--border": "rgba(255,255,255,0.08)",
    "--heroBorder": "rgba(157,255,0,0.35)", // ou usa a cor que quiseres
  },

  flags: {},
};
