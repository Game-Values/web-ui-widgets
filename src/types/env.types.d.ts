import type { NodeEnv } from "~/enums"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: NodeEnv
            NUXT_APP_BASE_URL: string
            NUXT_APP_BUILD_ASSETS_DIR: string
            API_URL: string
            OPENAPI_URL: string
        }
    }
}
