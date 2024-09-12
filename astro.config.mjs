import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),

  adapter: node({
    mode: "standalone",
  }),

  integrations: [react(), tailwind()],
});
