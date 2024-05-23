export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxtjs/i18n'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    }
  },

  routeRules: {
    '/**': { isr: 600 },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    strategy: 'prefix',
    detectBrowserLanguage: false,
    vueI18n: "./i18n.config.ts"
  },

  runtimeConfig: {
    public: {
      GQL_HOST: process.env.NUXT_HYGRAPH_ENDPOINT
    }
  },

  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": [700],
      Inter: [400],
    }
  },

  image: {
    hygraph: {
      baseURL: "https://media.graphassets.com"
    }
  }
})