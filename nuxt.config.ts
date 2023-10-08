// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/web-ui-widgets/',
    buildAssetsDir: 'assets'
  },
  // target: "static",
  modules: [
    "tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  },
  theme: {
    extend: {
      colors: {
        'figma-bg': '#1B1B1C',
      }
    }
  },
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

  // buildModules: [
  //   'nuxt-vite'
  // ],
  // vite: {
  //   build: true
  // },
  build: {
    transpile: ["@heroicons/vue"]
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  }
})
