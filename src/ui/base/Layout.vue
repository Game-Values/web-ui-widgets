<script lang="ts" setup>
import type { LayoutProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<LayoutProps>(), {
    footer: true,
    noAside: true,
})

defineSlots<{
    header: () => VNode
    main: () => VNode
    footer: () => VNode
}>()
</script>

<template>
<v-layout v-bind="$props">
    <template #header>
        <slot name="header" />
    </template>

    <template #main>
        <slot name="main" />
    </template>

    <template #footer>
        <slot name="footer" />
    </template>
</v-layout>
</template>

<style lang="scss">
@forward "vexip-ui/style/native-scroll";
@forward "vexip-ui/style/scrollbar";

@forward "vexip-ui/style/layout" with (
    $layout: (
        header-height: theme("height.header-lg"),
        header-bg-color: theme("colors.grey-dark"),
        header-b-color: theme("colors.grey-dark"),
        main-bg-color: transparent,
        footer-bg-color: transparent,
    ),
);
</style>

<style lang="sass" scoped>
.vxp-layout
    @apply screen
</style>
