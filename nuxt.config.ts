// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    router: {
        base: '/game-values/'
    },
    modules: [
      "tailwindcss"
    ],
    css: ["~/assets/css/main.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        },
    },
    build: {
      transpile: ["@heroicons/vue"]
    }
})
