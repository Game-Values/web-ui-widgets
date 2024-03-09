import type { NuxtConfig } from "@nuxt/schema"

import { env } from "node:process"

import { default as dynamicImport } from "vite-plugin-dynamic-import"
import { default as inheritAttrs } from "vite-plugin-vue-setup-inherit-attrs"

import { BREAKPOINTS } from "./common/consts"
import { Locale, LocaleISO } from "./common/enums"
import { injectReflectMetadata } from "./common/plugins"
import { getLocale, isDebug, isProduction } from "./common/utils"
import { name } from "./package.json"
import { default as uno } from "./uno.config"

let nuxtConfig: NuxtConfig = {
    alias: {
        "#schema": "../schema",
        "#schema/*": "../schema/*",
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
            meta: [
                {
                    content: "ec99da99",
                    name: "enot",
                },
            ],
            noscript: [
                {
                    children: `
                        <!-- Yandex.Metrika counter -->
                        <img
                            src="https://mc.yandex.ru/watch/92093048"
                            style="position:absolute;left:-9999px;"
                            alt="Yandex.Metrika"
                        />
                    `,
                },
                {
                    children: `
                        <!-- Prime.Payment -->
                        <!-- prime:e770c054 -->
                    `,
                },
            ],
            script: [
                {
                    async: true,
                    src: "https://www.googletagmanager.com/gtag/js?id=G-5H14E37192",
                },
                {
                    innerHTML: `
                        /* Google tag (gtag.js) */
                        window.dataLayer ||= [];
                        window.gtag ||= function() {dataLayer.push(arguments)}
                        gtag("js", new Date());
                        gtag("config", "G-5H14E37192");
                    `,
                },
                {
                    innerHTML: `
                        /* Yandex.Metrika counter */
                        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");ym(92093048, "init", {clickmap:true,trackLinks:true,accurateTrackBounce:true});
                    `,
                },
                {
                    innerHTML: `
                        window.global ||= window;
                    `,
                },
            ],
            viewport: "width=device-width, initial-scale=1, maximum-scale=1, transaction-scalable=0",
        },
        rootId: name,
    },

    build: {
        transpile: [
            "reflect-metadata",
        ],
    },

    components: [
        {
            path: "~/entities",
            prefix: "entity",
        },
        {
            path: "~/chat-send-hub-message",
            prefix: "chat-send-hub-message",
        },
        {
            path: "~/views",
            prefix: "view",
        },
        {
            path: "~/widgets",
            prefix: "widget",
        },

        "~/components",
    ],

    css: [
        "@/assets/styles/vexip-chat-send-hub-message/index.css",
        "@/assets/styles/index.css",
    ],

    debug: isDebug(),

    devServer: {
        host: "127.0.0.1",
        port: 3000,
    },

    dir: {
        public: "../public",
        static: "../public",
    },

    imports: {
        presets: [
            {
                from: "@vueuse/core",
                imports: [
                    "promiseTimeout",
                    "useCurrentElement",
                    "useMouseInElement",
                    "useMutationObserver",
                ],
            },
            {
                from: "class-transformer",
                imports: [
                    "Expose",
                    "Transform",
                    "Type",
                    "plainToInstance",
                ],
            },
            {
                from: "lodash-decorators",
                imports: [
                    "Memoize",
                ],
            },
            {
                from: "pinia",
                imports: [
                    "mapActions",
                    "mapState",
                    "mapStores",
                    "mapWritableState",
                ],
            },
        ],
    },

    modules: [
        // "@hebilicious/vue-query-nuxt",
        // "@nuxt/image",
        "@unocss/nuxt",

        "nuxt-lazy-load",
        "nuxt-lodash",
        "nuxt-swiper",

        // todo: need to enable after fixes
        // ["@nuxtjs/eslint-module", {
        //     failOnError: isProduction(),
        // }],

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

        ["@nuxtjs/i18n", {
            debug: isDebug(),
            defaultLocale: getLocale(),
            langDir: "locales",
            lazy: true,
            locales: [
                {
                    code: Locale.DE,
                    file: {
                        cache: true,
                        path: `${LocaleISO.DE}.json`,
                    },
                    iso: LocaleISO.DE,
                },
                {
                    code: Locale.EN,
                    file: {
                        cache: true,
                        path: `${LocaleISO.EN}.json`,
                    },
                    iso: LocaleISO.EN,
                },
            ],
            strategy: "no_prefix",
            vueI18n: "i18n.config.ts",
        }],

        ["@nuxtjs/web-swiper", {
            debug: isDebug(),
            provider: "log",
        }],

        ["@vexip-chat-send-hub-message/nuxt", {
            importStyle: false,
            resolveIcon: false,
        }],

        ["@vueuse/nuxt", {
            ssrHandlers: true,
        }],

        ["nuxt-delay-hydration", {
            debug: isDebug(),
            mode: "mount",
        }],

        ["nuxt-seo-experiments", {
            debug: isDebug(),
        }],

        ["nuxt-typed-router", {
            plugin: true,
        }],

        ["nuxt-viewport", {
            breakpoints: BREAKPOINTS,
        }],

        ["@pinia/nuxt", {
            storesDirs: [
                "src.backup/stores/**",
            ],
        }],
    ],

    routeRules: {
        "/": {
            // todo: via middleware
            redirect: `/${getLocale()}`,
        },
    },

    runtimeConfig: {
        public: {
            apiURL: env.API_URL,
            matrixChatGuestName: env.MATRIX_CHAT_GUEST_NAME,
            matrixChatGuestToken: env.MATRIX_CHAT_GUEST_TOKEN,
            matrixChatName: env.MATRIX_CHAT_NAME,
            matrixMainRoomId: env.MATRIX_MAIN_ROOM_ID,
            matrixURL: env.MATRIX_URL,
            theme: uno.theme,
        },
    },

    serverDir: "server",

    srcDir: "src",

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: (code: string): string => `
                        @use "@/assets/styles/vars/breakpoints" as *
                        @use "@/assets/styles/vars/colors" as *
                        @use "@/assets/styles/vars/sizes" as *
                        @use "@/assets/styles/vars/spaces" as *
                        @use "@/assets/styles/vars/typography" as *

                        ${code}
                    `,
                },

                scss: {
                    additionalData: (code: string, filepath: string): string => {
                        // todo: mv to plugin
                        if (/vexip-ui\/style(?:\/dark)?\/((?!shared).).*.scss/.test(filepath))
                            return (
                                code
                                    .replace("@use './design' as *;", "@user \"@/assets/styles/vexip-chat-send-hub-message/variables.scss\" as *;")
                                    .replace("@use './design/variables.scss' as *;", "@user \"@/assets/styles/vexip-chat-send-hub-message/variables.scss\" as *;")
                                    .replace("@use '../design/variables.scss' as *;", "@user \"@/assets/styles/vexip-chat-send-hub-message/variables.scss\" as *;")
                                    .replace("@forward './variables.scss';", "@user \"@/assets/styles/vexip-chat-send-hub-message/variables.scss\";")
                            )

                        return `
                            @use "@/assets/styles/vars/breakpoints" as *;
                            @use "@/assets/styles/vars/colors" as *;
                            @use "@/assets/styles/vars/sizes" as *;
                            @use "@/assets/styles/vars/spaces" as *;
                            @use "@/assets/styles/vars/typography" as *;

                            ${code}
                        `
                    },
                },
            },
        },
        esbuild: {
            tsconfigRaw: {
                compilerOptions: {
                    experimentalDecorators: true,
                },
            },
        },
        plugins: [
            dynamicImport(),
            inheritAttrs(),
            injectReflectMetadata(),
        ],
        resolve: {
            alias: {
                crypto: "rollup-plugin-node-polyfills/polyfills/empty",
                fs: "rollup-plugin-node-polyfills/polyfills/empty",
            },
        },
    },
}

if (isProduction())
    nuxtConfig.modules!.push(
        ["@nuxtjs/partytown", {
            debug: isDebug(),
        }],
    )

export default defineNuxtConfig(nuxtConfig)
