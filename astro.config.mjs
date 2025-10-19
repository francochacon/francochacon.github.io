import { defineConfig } from "astro/config";

// ✅ Si vas a usar GitHub Pages, usá este adaptador:
import github from "@astrojs/github/actions";

export default defineConfig({
  site: "https://francochacon.github.io/", // 🔹 Reemplazá con tu URL real
  base: "/", // o "/nombre-del-repo/" si no es tu página principal
  output: "static",
  adapter: github(),
});
