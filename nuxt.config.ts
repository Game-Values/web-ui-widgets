import type { NuxtConfig } from "@nuxt/schema"

import { env } from "node:process"

// todo:
// import { default as browserslist } from "browserslist"
// import { browserslistToTargets } from "lightningcss"
import { default as dynamicImport } from "vite-plugin-dynamic-import"
import { default as inheritAttrs } from "vite-plugin-vue-setup-inherit-attrs"

import { BREAKPOINTS } from "./common/consts"
import { Locale, LocaleISO } from "./common/enums"
import { injectReflectMetadata } from "./common/plugins"
import { getLocale, isDebug, isDevelopment, isProduction } from "./common/utils"
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
        layoutTransition: true,
        pageTransition: true,
        rootId: name,
    },

    appConfig: {
        build: {
            analyze: true,
        },
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
            path: "~/ui",
            prefix: "ui",
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
        "@/assets/styles/vexip-ui/index.sass",
        "@/assets/styles/index.sass",
    ],

    debug: isDebug(),

    devServer: {
        host: "127.0.0.1",
        port: 3000,
    },

    devtools: {
        enabled: false, // isDevelopment()
        timeline: {
            enabled: false, // isDevelopment()
        },
    },

    dir: {
        public: "../public",
        static: "../public",
    },

    experimental: {
        asyncContext: true,
        asyncEntry: true,
        crossOriginPrefetch: true,
        externalVue: true,
        headNext: true,
        payloadExtraction: true,
        reactivityTransform: true,
        renderJsonPayloads: true,
        restoreState: true,
        treeshakeClientOnly: true,
        typescriptBundlerResolution: true,
        viewTransition: true,
        // watcher: "parcel",
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
        "@hebilicious/vue-query-nuxt",
        "@nuxt/image",
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

        ["@nuxtjs/web-vitals", {
            debug: isDebug(),
            provider: "log",
        }],

        ["@vexip-ui/nuxt", {
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
                "src/stores/**",
            ],
        }],
    ],

    nitro: {
        esbuild: {
            options: {
                color: true,
                format: "esm",
                minifyIdentifiers: true,
                minifySyntax: true,
                minifyWhitespace: true,
                target: "esnext",
                treeShaking: true,
            },
        },
        experimental: {
            asyncContext: true,
            typescriptBundlerResolution: true,
        },
        logLevel: isDevelopment() ? +999 : 3,
        timing: isDevelopment(),
    },

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
        build: {
            cssCodeSplit: true,
            cssMinify: "esbuild", // todo: "lightningcss",
            minify: "esbuild",
            modulePreload: true,
        },
        css: {
            // todo:
            // lightningcss: {
            //     target: browserslistToTargets(browserslist(">= 0.25%")),
            // },
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
                                    .replace("@use './design' as *;", "@use \"@/assets/styles/vexip-ui/variables.scss\" as *;")
                                    .replace("@use './design/variables.scss' as *;", "@use \"@/assets/styles/vexip-ui/variables.scss\" as *;")
                                    .replace("@use '../design/variables.scss' as *;", "@use \"@/assets/styles/vexip-ui/variables.scss\" as *;")
                                    .replace("@forward './variables.scss';", "@use \"@/assets/styles/vexip-ui/variables.scss\";")
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
            // todo:
            // transformer: "lightningcss",
        },
        devBundler: "vite-node",
        esbuild: {
            color: true,
            format: "esm",
            minifyIdentifiers: true,
            minifySyntax: true,
            minifyWhitespace: true,
            target: "esnext",
            treeShaking: true,
            tsconfigRaw: {
                compilerOptions: {
                    experimentalDecorators: true,
                    strict: true,
                },
            },
        },
        // experimental: {
        //     hmrPartialAccept: isDevelopment(),
        //     importGlobRestoreExtension: true,
        // },
        plugins: [
            dynamicImport(),
            inheritAttrs(),
            injectReflectMetadata(),
        ],
        server: {
            preTransformRequests: true,
        },
        vue: {
            isProduction: isProduction(),
        },
        warmupEntry: true,
    },

    vue: {
        defineModel: true,
        propsDestructure: true,
        runtimeCompiler: true,
    },
}

if (isProduction())
    nuxtConfig.modules!.push(
        ["@nuxtjs/partytown", {
            debug: isDebug(),
        }],
    )

export default defineNuxtConfig(nuxtConfig)
