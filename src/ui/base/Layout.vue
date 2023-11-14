<script lang="ts" setup>
import type { LayoutProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<LayoutProps>(), {
    footer: true,
    headerFixed: true,
    noAside: true,
})

defineSlots<{
    default: () => VNode
    logo: () => VNode
}>()
</script>
<template>
<v-layout v-bind="$props">
    <template #header-left>
        <slot name="logo">
            <ui-base-link :to="useMainRoute().fullPath">
                <ui-base-icon
                    custom="logo"
                    height="40"
                    width="158"
                />
            </ui-base-link>
        </slot>
    </template>

    <template #main>
        <slot />
    </template>
</v-layout>
</template>

<style lang="scss">
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
.vxp-layout-vars
    @screen lg
        --vxp-layout-header-height: theme("height.header-lg")
        --vxp-layout-footer-height: theme("height.footer-lg")

    @screen md
        --vxp-layout-header-height: theme("height.header-md")
        --vxp-layout-footer-height: theme("height.footer-md")

    @screen sm
        --vxp-layout-header-height: theme("height.header-sm")
        --vxp-layout-footer-height: theme("height.footer-sm")

    @screen xs
        --vxp-layout-header-height: theme("height.header-xs")
        --vxp-layout-footer-height: theme("height.footer-xs")

:deep(.vxp-layout__header),
:deep(.vxp-layout__main),
:deep(.vxp-layout__footer)
    @apply content
    @apply px-9

// todo: (?)
:deep(.vxp-layout__user)
    @apply hidden

// :deep(.vxp-layout__scrollbar)
//     @apply top-0
</style>
