import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import metaTags from "astro-meta-tags";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://skncre-cosmetics-hygraph-astro.vercel.app",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    metaTags(),
    sitemap(),
  ],
  image: {
    domains: ["https://media.graphassets.com"],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  output: "server",
  adapter: vercel({
    isr: 600,
  }),
});
