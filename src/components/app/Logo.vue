<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

let { routerClient } = useClients()

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()
</script>

<template>
<ui-link
    :to="routerClient.getRoute(routerClient.routeNames.PUBLIC_MAIN)"
    class="relative bottom-0.5rem"
>
    <slot>
        <ui-icon
            custom="logo"
            height="40"
            width="158"
        />
    </slot>
</ui-link>
</template>
