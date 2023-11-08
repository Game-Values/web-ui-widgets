import { env } from "node:process"

import { default as dynamicImport } from "vite-plugin-dynamic-import"
import { default as inheritAttrs } from "vite-plugin-vue-setup-inherit-attrs"

import { default as uno } from "./uno.config"

import { BREAKPOINTS } from "./common/consts"
import { Locale, LocaleISO } from "./common/enums"
import { getLocale, isDebug, isDevelopment, isProduction } from "./common/utils"
import { name } from "./package.json"

export default defineNuxtConfig({
    app: {
        baseURL: env.NUXT_APP_BASE_URL,
        buildAssetsDir: env.NUXT_APP_BUILD_ASSETS_DIR,
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
        },
        keepalive: true,
        layoutTransition: true,
        pageTransition: true,
        rootId: name,
    },

    appConfig: {
        build: {
            analyze: true,
        },
    },

    components: [
        "~/components",

        {
            path: "~/ui",
            prefix: "ui",
        },
        {
            path: "~/widgets",
            prefix: "widget",
        },
    ],

    css: [
        "~/assets/styles/index.sass",
    ],

    debug: isDebug(),

    devServer: {
        host: "127.0.0.1",
        port: 3000,
    },

    devtools: {
        enabled: isDevelopment(),
        timeline: {
            enabled: isDevelopment(),
        },
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
        watcher: "parcel",
    },

    imports: {
        dirs: [
            "../common/composables",
        ],
        presets: [
            {
                from: "@vueuse/core",
                imports: [
                    "useDebounceFn",
                    "useMutationObserver",
                    "useResizeObserver",
                ],
            },
        ],
    },

    modules: ((): any[] => {
        // todo: typing
        let modules: any[] = [
            "@hebilicious/vue-query-nuxt",
            "@nuxt/image",
            "@unocss/nuxt",

            "nuxt-lazy-load",

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
                langDir: "locales/i18n",
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
                strategy: "prefix_except_default",
                vueI18n: "i18n.config.ts",
            }],

            ["@nuxtjs/web-vitals", {
                debug: isDebug(),
                provider: "log",
            }],

            ["@vexip-ui/nuxt", {
                importStyle: "sass",
                resolveIcon: false,
            }],

            ["@vueuse/nuxt", {
                ssrHandlers: true,
            }],

            ["nuxt-delay-hydration", {
                debug: isDebug(),
                mode: "mount",
            }],

            ["nuxt-headlessui", {
                prefix: "ui-headless",
            }],

            ["nuxt-seo-experiments", {
                debug: isDebug(),
            }],

            ["nuxt-swiper", {
                styleLang: "scss",
            }],

            ["nuxt-viewport", {
                breakpoints: BREAKPOINTS,
            }],
        ]

        if (isProduction())
            modules.push(
                ["@nuxtjs/partytown", {
                    debug: isDebug(),
                }],
            )

        return modules
    })(),

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

    runtimeConfig: {
        public: {
            baseURL: env.NUXT_APP_BASE_URL,
            theme: uno.theme,
        },
    },

    serverDir: "server",

    srcDir: "src",

    vite: {
        build: {
            cssCodeSplit: true,
            cssMinify: "esbuild",
            minify: "esbuild",
            modulePreload: true,
        },
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: `
                        @use "~/assets/styles/helpers/mixins" as *

                        @use "~/assets/styles/vars/breakpoints" as *
                        @use "~/assets/styles/vars/colors" as *
                        @use "~/assets/styles/vars/radius" as *
                        @use "~/assets/styles/vars/sizes" as *
                        @use "~/assets/styles/vars/spaces" as *
                        @use "~/assets/styles/vars/typography" as *
                    `,
                },

                scss: {
                    additionalData: (code: string, path: string): string => {
                        if (/vexip-ui\/style(?:\/dark)?\/((?!shared).).*.scss/.test(path))
                            return (
                                code
                                    .replace("@use './design' as *;", "@use '~/assets/styles/vexip-ui.scss' as *;")
                                    .replace("@use './design/variables.scss' as *;", "@use '~/assets/styles/vexip-ui.scss' as *;")
                                    .replace("@use '../design/variables.scss' as *;", "@use '~/assets/styles/vexip-ui.scss' as *;")
                                    .replace("@forward './variables.scss';", "@forward '~/assets/styles/vexip-ui.scss';")
                            )

                        return `
                            @use "~/assets/styles/helpers/mixins" as *;

                            @use "~/assets/styles/vars/breakpoints" as *;
                            @use "~/assets/styles/vars/colors" as *;
                            @use "~/assets/styles/vars/radius" as *;
                            @use "~/assets/styles/vars/sizes" as *;
                            @use "~/assets/styles/vars/spaces" as *;
                            @use "~/assets/styles/vars/typography" as *;
                        `
                    },
                },
            },
            transformer: "postcss",
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
                    alwaysStrict: true,
                    experimentalDecorators: true,
                },
            },
        },
        experimental: {
            hmrPartialAccept: isDevelopment(),
            importGlobRestoreExtension: true,
        },
        plugins: [
            dynamicImport(),
            inheritAttrs(),
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
})
