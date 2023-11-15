<script lang="ts" setup>
import type { DrawerProps } from "vexip-ui"
import type { VNode } from "vue"

withDefaults(defineProps<DrawerProps>(), {
    undivided: true,
})

defineSlots<{
    default: () => VNode
    close: () => VNode
    title: () => VNode
}>()
</script>

<template>
<v-drawer v-bind="$props">
    <slot />

    <template #close>
        <slot name="close">
            <ui-base-icon size="24">
                <i class="i-heroicons:x-mark" />
            </ui-base-icon>
        </slot>
    </template>

    <template
        v-if="$slots.title"
        #title
    >
        <slot name="title" />
    </template>
</v-drawer>
</template>

<style lang="scss">
@forward "vexip-ui/style/drawer" with (
    $drawer: (
        header-v-padding: theme("spacing.8"),
        header-h-padding: theme("spacing.8"),
        close-color: theme("colors.white"),
    ),
);
</style>

<style lang="sass" scoped>
.vxp-drawer :deep(.vxp-drawer__content)
    @apply p-8
    @apply hidden
</style>
