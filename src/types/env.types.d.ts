import type { NodeEnv } from "~/enums"

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            API_URL: string
            MATRIX_CHAT_NAME: string
            MATRIX_MAIN_ROOM_ID: string
            MATRIX_URL: string
            NODE_ENV: NodeEnv
            OPENAPI_URL: string
        }
    }
}
