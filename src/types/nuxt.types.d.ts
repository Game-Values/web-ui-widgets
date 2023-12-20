import type { Theme } from "@unocss/preset-uno"
import type { H3Error } from "h3"
import type { Ref } from "vue"
import type { RouteMeta } from "vue-router"

import "@nuxt/schema"

export interface NuxtError<T = any> extends H3Error {
    data: T
    description: string
    message: string
    statusCode: number
    statusMessage: string
    url: string
}

declare module "@nuxt/schema" {
    export interface RuntimeConfig {
        public: PublicRuntimeConfig
    }

    export interface PublicRuntimeConfig {
        apiURL: string
        baseURL: string
        matrixChatGuestName: string
        matrixChatGuestToken: string
        matrixChatName: string
        matrixMainRoomId: string
        matrixURL: string
        theme: Theme
    }
}

declare module "nuxt/dist/pages/runtime/composables" {
    export type PageMeta = RouteMeta

    export let useError: () => Ref<NuxtError>

    export { NuxtError }
}
