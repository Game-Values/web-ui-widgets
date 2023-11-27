import type { NodeEnv } from "~/enums"

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            API_URL: string
            NODE_ENV: NodeEnv
            OPENAPI_URL: string
        }
    }
}
