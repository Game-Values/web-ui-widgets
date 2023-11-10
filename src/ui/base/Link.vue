<script lang="ts" setup>
import type { LinkerProps } from "vexip-ui"

interface Props extends LinkerProps {
    href?: string
}

interface Slots {
    default: () => any
}

let props = withDefaults(defineProps<Props>(), (
    useUiProps<LinkerProps>({
        href: "javascript:void(0)",
    })
))

defineSlots<Slots>()

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
