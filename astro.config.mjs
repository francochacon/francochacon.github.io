import { defineConfig } from "astro/config";
import github from "@astrojs/github/actions";

// Configuración para publicar en GitHub Pages
export default defineConfig({
  site: "https://francochacon.github.io/",
  base: "/", // como el repo se llama igual que tu usuario, no hace falta más
  output: "static",
  adapter: github(),
});
