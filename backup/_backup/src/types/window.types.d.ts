import type { Context } from "~/types"

declare global {
    export interface Window {
        context: Context
    }
}
