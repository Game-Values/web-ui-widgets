<script lang="ts" setup>
import { HttpStatus } from "~/enums"

let { cookieClient, routerClient } = useClients()
let { authController, userController } = useControllers()

if (cookieClient.accessToken)
    try {
        await authController.refreshToken()
        await userController.fetchMe()

        setRef(useAuth(), true)
    } catch {
        await authController.logout()
    }

if (
    isServer() &&
    routerClient.getRouteMeta("auth") &&
    isUnauthenticated()
)
    throw createError({
        statusCode: HttpStatus.FORBIDDEN,
    })
</script>

<template>
<slot />
</template>
