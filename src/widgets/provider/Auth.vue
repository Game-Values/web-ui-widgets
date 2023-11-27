<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { cookieClient } = useClients()
let { userController } = useControllers()

if (cookieClient.accessToken)
    await userController.fetchUser()
</script>

<template>
<slot />
</template>
