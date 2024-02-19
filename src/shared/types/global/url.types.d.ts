import type { IRouteQuery } from "$types"

declare global {
    interface URLSearchParams {
        toJSON(): IRouteQuery
    }
}

export {}
