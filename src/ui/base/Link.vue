<script lang="ts" setup>
import type { LinkerProps } from "vexip-ui"
import type { VNode } from "vue"

let props = withDefaults(defineProps<LinkerProps & {
    href?: string
}>(), {
    href: "javascript:void(0)",
})

defineSlots<{
    default: () => VNode
}>()

function beforeNavigate(e: Event): void {
    if (props.to) {
        e.preventDefault()
        navigateTo(props.to)
    }
}
</script>

<template>
<v-linker
    v-if="href"
    v-bind="props"
    :href="to || href"
    @click="beforeNavigate"
>
    <slot />
</v-linker>
</template>
