<script lang="ts" setup>
import type { ConfigProviderProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<ConfigProviderProps>()

defineSlots<{
    default: () => VNode
}>()

</script>

<template>
<v-config-provider v-bind="$props">
    <slot />
</v-config-provider>
</template>
