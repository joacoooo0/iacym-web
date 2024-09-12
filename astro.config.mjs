import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(), // Usas el adaptador de Vercel para desplegar en Serverless
  integrations: [react(), tailwind()],
});
