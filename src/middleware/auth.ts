import type { RouteLocationNormalized } from "vue-router"

import { HttpStatus } from "~/enums"

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized): Promise<void> => {
    if (
        isClient() &&
        to.meta.auth &&
        isUnauthenticated()
    )
        throw abortNavigation({
            fatal: true,
            statusCode: HttpStatus.FORBIDDEN,
        })
})
