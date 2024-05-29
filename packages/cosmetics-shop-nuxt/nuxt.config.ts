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

  'graphql-client': {
    clients: {
      default: {
        host: process.env.NUXT_HYGRAPH_ENDPOINT as string,
      }
    }
  },

  runtimeConfig: {
    hygraphEndpoint: process.env.NUXT_HYGRAPH_ENDPOINT,
    hygraphToken: process.env.NUXT_HYGRAPH_TOKEN,
    ctpClientId: process.env.NUXT_CTP_CLIENT_ID,
    ctpClientSecret: process.env.NUXT_CTP_CLIENT_SECRET,
    ctpUrl: process.env.NUXT_CTP_URL,
    ctpProject: process.env.NUXT_CTP_PROJECT,
    ctpToken: process.env.NUXT_CTP_TOKEN
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