import { env } from "node:process"

import browserslist from "browserslist"
import { browserslistToTargets } from "lightningcss"
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
    alias: {
        "@": "..",
        "~": "../src",
    },

    app: {
        head: {
            charset: "utf-8",
            link: [
                {
                    href: "/favicon/favicon.ico",
                    rel: "icon",
                    type: "image/x-icons",
                },
            ],
            script: [
                {
                    innerHTML: "window.global ||= window",
                },
            ],
            viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
        },
    },

    build: {
        transpile: [
            "vuetify",
        ],
    },

    css: [
        "vuetify/styles",
    ],

    devtools: {
        enabled: true,
    },

    features: {
        inlineStyles: false,
    },

    modules: [
        (_, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(
                    vuetify({
                        autoImport: true,
                        styles: {
                            configFile: "src/app/styles/vuetify.scss",
                        },
                    })
                )
            })
        },

        "@pinia/nuxt",
        "@unocss/nuxt",
        "@vueuse/nuxt",

        ["@nuxtjs/google-fonts", {
            base64: true,
            display: "swap",
            families: {
                Montserrat: {
                    wght: [
                        400,
                        500,
                        600,
                        700,
                    ],
                },
            },
            overwriting: true,
            preload: true,
        }],

        ["nuxt-lodash", {
            exclude: [
                "defaults",
            ],
        }],
    ],

    runtimeConfig: {
        public: {
            apiURL: env.API_URL,
        },
        ssr: true,
    },

    sourcemap: {
        client: false,
        server: false,
    },

    ssr: true,

    typescript: {
        shim: true,
        strict: true,
    },

    vite: {
        build: {
            cssMinify: "lightningcss",
        },
        css: {
            lightningcss: {
                targets: browserslistToTargets(browserslist(">= 0.25%")),
            },
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

    vue: {
        defineModel: true,
        propsDestructure: true,
    },
})
