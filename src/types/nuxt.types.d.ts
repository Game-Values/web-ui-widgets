import type { Theme } from "@unocss/preset-uno"
import type { RouteMeta } from "vue-router"

import "@nuxt/schema"

declare module "@nuxt/schema" {
    interface RuntimeConfig {
        public: PublicRuntimeConfig
    }

    interface PublicRuntimeConfig {
        apiURL: string
        baseURL: string
        theme: Theme
    }
}

declare module "nuxt/dist/pages/runtime/composables" {
    type PageMeta = RouteMeta
}
