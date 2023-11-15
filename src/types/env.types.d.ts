import type { NodeEnv } from "~/enums"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL: string
            DEPLOY_TARGET: string
            NODE_ENV: NodeEnv
            NUXT_APP_BASE_URL: string
            NUXT_APP_BUILD_ASSETS_DIR: string
            OPENAPI_URL: string
        }
    }
}
