<script lang="ts" setup>
import type { TitleProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<TitleProps>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-title v-bind="$props">
    <slot />
</v-title>
</template>

<style lang="sass" scoped>
.vxp-title-vars
    // --vxp-title-font-size-level-1: theme("fontSize.level-1")
    // --vxp-title-font-size-level-2: theme("fontSize.level-2")
    // --vxp-title-font-size-level-3: theme("fontSize.level-3")
    // --vxp-title-font-size-level-4: theme("fontSize.level-4")
    // --vxp-title-font-size-level-5: theme("fontSize.level-5")
    // --vxp-title-font-size-level-6: theme("fontSize.level-6")
    --vxp-title-font-weight: 700

.vxp-title
    @apply m-0
    @apply leading-normal

h5,
h6
    --vxp-title-font-weight: 600
</style>
