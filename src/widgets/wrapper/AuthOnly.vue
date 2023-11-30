<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { storeClient } = useClients()

let { authenticated } = storeToRefs(storeClient.meStore)
</script>

<template>
<template v-if="authenticated">
    <slot />
</template>
</template>
