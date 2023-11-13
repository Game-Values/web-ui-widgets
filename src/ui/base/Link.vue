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

let href = computed((): string | undefined => (
    props.to
        ? useGet<string>(useRouter().resolve(props.to), "fullPath")
        : props.href
))

function beforeNavigate(e: Event): void {
    if (props.to)
        e.preventDefault()
}
</script>

<template>
<v-linker
    v-bind="$props"
    :href="href"
    @click="beforeNavigate"
>
    <slot />
</v-linker>
</template>
