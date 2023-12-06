import type { Lazy } from "~/types"
import type { RouteLocationNormalized } from "vue-router"

import { HttpStatus } from "~/enums"

let auth: Lazy<boolean> = onceClientOnly(async (): Promise<boolean> => {
    let { cookieClient, storeClient } = useClients()
    let { authController, userController } = useControllers()

    if (cookieClient.accessToken) {
        // todo:
        if (isClient())
            await authController.refreshToken()
        await userController.fetchMe()
    }

    // todo:
    if (!storeClient.userMeStore.authenticated)
        await authController.logout()

    return storeClient.userMeStore.authenticated
})

export default defineNuxtRouteMiddleware(async (to: RouteLocationNormalized): Promise<void> => {
    let authenticated: boolean = await auth()

    if (to.meta.auth && !authenticated)
        throw abortNavigation({
            statusCode: HttpStatus.NOT_FOUND,
        })
})
