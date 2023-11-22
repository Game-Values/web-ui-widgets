<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
    height?: number | string
    size?: number | string
    width?: number | string
}>()
</script>

<template>
<ui-mouse-light
    :style="{
        // todo: mv to composables or utils
        height: (height || size) ? pxToRem(height || size) : '100%',
        width: (width || size) ? pxToRem(width || size) : '100%',
    }"
    class="
        border-solid-secondary
        rounded-3
        transition-colors
        group-hover:(bg-secondary)
        group-[.liked]:(bg-gradient-to-b from-accent-medium from-0% to-accent-medium-light to-100%)
        hover-group-[.liked]:(bg-accent-medium)!
    "
>
    <ui-icon :custom="game.icon" />
</ui-mouse-light>
</template>

<style lang="sass" scoped>
.vxp-icon
    --vpx-icon-width: 100%
    --vpx-icon-height: 100%
</style>
