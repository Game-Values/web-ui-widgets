<script lang="ts" setup>
import type { AvatarProps } from "vexip-ui"

withDefaults(defineProps<AvatarProps>(), {
    circle: true,
})

defineSlots<{
    default: () => VNode
}>()
</script>

<template>
<v-avatar v-bind="$props">
    <ui-base-icon :size="size">
        <i class="i-heroicons:user" />
    </ui-base-icon>
</v-avatar>
</template>

<style lang="scss">
@forward "vexip-ui/style/avatar" with (
    $avatar: (
        size: theme("width.avatar"),
    ),
);
</style>
