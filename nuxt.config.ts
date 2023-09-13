// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  router: {
    base: "/game-values/"
  },
  modules: [
    "tailwindcss",
    "@nuxtjs/i18n"
  ],
  i18n: {
    strategy: "prefix_except_default",
    locales: ["en", "de"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts"
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ["@heroicons/vue"]
  }
})
