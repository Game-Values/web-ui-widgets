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
        group-hover:(border-solid border-[rgba(52,95,246,0.65)] shadow-[0_0.4rem_3.4rem_0_rgba(61,152,255,0.30)])
        group-[.liked]:(bg-accent-medium)
        group-[.liked:hover]:(bg-gradient-to-b from-accent-medium from-0% to-accent-medium-light to-100%)
        hover-group-[.liked]:(bg-accent-medium)
    "
>
    <ui-icon :custom="useKebabCase(game.name)" />
</ui-mouse-light>
</template>

<style lang="sass" scoped>
.vxp-icon
    --vpx-icon-width: 100%
    --vpx-icon-height: 100%
</style>
