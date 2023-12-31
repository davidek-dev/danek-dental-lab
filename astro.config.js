import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  publicDir: 'public/',
  outDir: 'dist/',
  site: 'https://danekdentallab.netlify.app/',
  redirects:{

  },
  build:{
    format:'file',
  },
  integrations: [react(), tailwind()],
  output: "static",
  adapter: netlify({
    functionPerRoute: true
 }),
});