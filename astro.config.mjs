import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  srcDir: 'src/pages/',
  outDir: 'dist',
  site: 'https://danekdentallab.netlify.app',
  integrations: [react(), tailwind()],
  output: "hybrid",
  adapter: netlify({
    functionPerRoute: true
 }),
});