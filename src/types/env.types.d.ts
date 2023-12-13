import type { NodeEnv } from "~/enums"

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            API_URL: string
            MATRIX_URL: string
            NODE_ENV: NodeEnv
            OPENAPI_URL: string
        }
    }
}
