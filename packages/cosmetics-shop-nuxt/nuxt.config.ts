export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client', '@nuxtjs/google-fonts', '@nuxt/image'],
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