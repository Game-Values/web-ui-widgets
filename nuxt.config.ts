// https://nuxt.com/docs/api/configuration/nuxt-config

let app;
const isDev = process.env.NODE_ENV !== 'production'

if (isDev) {
  app = {}
} else {
  app = {
    baseURL: '/web-ui-widgets/',
    buildAssetsDir: 'assets'
  }
}


export default defineNuxtConfig({
  app: app,

  target: "static",
  modules: [
    "tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "@nuxt/image",
    "@nuxtjs/google-fonts"

  ],
  googleFonts: {
    families: {
      Montserrat: true,
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
      "tailwindcss/nesting": "postcss-nesting",
      tailwindcss: {},
      autoprefixer: {}
    }
  },

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
