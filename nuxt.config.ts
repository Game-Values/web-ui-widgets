import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
    alias: {
        "~": "../src",
        "@": "../src",
    },

    app: {
        head: {
            charset: "utf-8",
            link: [
                {
                    href: "/favicon/favicon.ico",
                    rel: "icon",
                    type: "image/x-icon",
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

    devtools: {
        enabled: true,
    },

    modules: [
        (_, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(
                    vuetify({
                        autoImport: true,
                    })
                )
            })
        },

        ["@pinia/nuxt", {
            storesDirs: [
                "src/app/providers/stores/**",
            ],
        }],
    ],

    runtimeConfig: {
        ssr: true,
    },

    typescript: {
        strict: true,
    },

    vite: {
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
