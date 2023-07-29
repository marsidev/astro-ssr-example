import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.bu	ild/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "middleware",
  }),
  server: {
    port: 8000,
  },
});
