import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://francochacon.github.io/",
  base: "/",
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
