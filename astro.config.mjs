import { defineConfig } from "astro/config";
import github from "@astrojs/github";

export default defineConfig({
  site: "https://francochacon.github.io/",
  base: "/",
  output: "static",
  adapter: github(),
});
