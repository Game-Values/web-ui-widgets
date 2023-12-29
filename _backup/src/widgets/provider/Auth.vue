<script lang="ts" setup>
let { cookieClient } = useClients()
let { authController, userController } = useControllers()

if (cookieClient.accessToken)
    try {
        await userController.fetchMe()

        setRef(useAuth(), true)
    } catch {
        await authController.logout()
    }
</script>

<template>
<slot />
</template>
