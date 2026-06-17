import { ui, defaultLang } from "./ui";

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

// Given the current pathname and the *target* language, returns the equivalent
// path in that language. Routes are 1:1 between /en (no prefix) and /es.
export function getLocalizedPath(pathname, targetLang) {
  const stripped = pathname.replace(/^\/es(\/|$)/, "/");

  if (targetLang === defaultLang) {
    return stripped;
  }

  if (stripped === "/") return "/es";
  return `/es${stripped}`;
}
