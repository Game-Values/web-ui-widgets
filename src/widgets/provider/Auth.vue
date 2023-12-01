<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { cookieClient, storeClient } = useClients()
let { authController, userController } = useControllers()

if (cookieClient.accessToken)
    await userController.fetchUser()

// todo
if (!storeClient.meStore.authenticated)
    await authController.logout()
</script>

<template>
<slot />
</template>
