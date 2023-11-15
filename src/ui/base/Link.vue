<script lang="ts" setup>
import type { LinkerProps } from "vexip-ui"
import type { VNode } from "vue"

defineProps<LinkerProps & {
    href?: string
}>()

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<nuxt-link
    v-if="to"
    v-bind="$props"
    class="vxp-linker vxp-linker-vars"
>
    <slot />
</nuxt-link>

<v-linker
    v-else
    v-bind="$props"
    :to="href || 'javascript:void(0)'"
>
    <slot />
</v-linker>
</template>

<style lang="scss">
@forward "vexip-ui/style/linker" with (
    $linker: (
        series-span: 0,
    ),
);
</style>
