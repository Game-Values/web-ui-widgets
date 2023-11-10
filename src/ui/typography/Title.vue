<script lang="ts" setup>
import type { TitleProps } from "vexip-ui"

type Props = TitleProps

interface Slots {
    default: () => any
}

withDefaults(defineProps<Props>(), useUiProps<TitleProps>())

defineSlots<Slots>()
</script>

<template>
<v-title v-bind="$props">
    <slot />
</v-title>
</template>

<style lang="sass" scoped>
.vxp-title-vars
    --vxp-title-font-size-level-1: #{$font-size-level-1}
    --vxp-title-font-size-level-2: #{$font-size-level-2}
    --vxp-title-font-size-level-3: #{$font-size-level-3}
    --vxp-title-font-size-level-4: #{$font-size-level-4}
    --vxp-title-font-size-level-5: #{$font-size-level-5}
    --vxp-title-font-size-level-6: #{$font-size-level-6}
    --vxp-title-font-weight: 700

.vxp-title
    @apply m-0
    @apply leading-normal

h5,
h6
    --vxp-title-font-weight: 600
</style>
