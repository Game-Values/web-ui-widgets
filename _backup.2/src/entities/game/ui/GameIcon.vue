<script lang="ts" setup>
import type { IGame } from "~/entities/game"

defineProps<{
    game: IGame,
    width?: number | string
    height?: number | string
}>()
</script>

<template>
<v-icon
    :icon="`i-game:${useKebabCase(game.name)}`"
    :style="{
        width: (
            width
                ? `${width}px`
                : '100%'
        ),
        height: (
            height
                ? `${height}px`
                : '100%'
        ),
    }"
/>
</template>
