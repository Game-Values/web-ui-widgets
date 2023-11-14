<script lang="ts" setup>
import type { VNode } from "vue"

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<section
    class="
        [&>*]:(lg:(py-18))
        [&>*]:(md:(py-14))
        [&>*]:(sm:(py-10))
        [&>*]:(xs:(py-6))
    "
>
    <slot />
</section>
</template>
