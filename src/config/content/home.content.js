// src/config/content/home.content.js

import { homeContent as homeEN } from "./home.content.en.js";
import { homeContent as homePT } from "./home.content.pt.js";

const HOME_BY_LANG = {
  en: homeEN,
  pt: homePT,
};

export function getHomeContent(lang = "en") {
  return HOME_BY_LANG[lang] ?? HOME_BY_LANG.en;
}
