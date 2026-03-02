// src/config/content/footer.content.js

const FOOTER_BY_LANG = {
  en: {
    id: "footer",
    copyright: "© Copyright 2026 Sunlive – All Rights Reserved",
    links: [],
  },
  pt: {
    id: "footer",
    copyright: "© Copyright 2026 Sunlive – Todos os direitos reservados",
    links: [],
  },
};

export function getFooterContent(lang = "en") {
  return FOOTER_BY_LANG[lang] ?? FOOTER_BY_LANG.en;
}
