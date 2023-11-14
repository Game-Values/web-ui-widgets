<script lang="ts" setup>
import type { Games } from "~/dto"

import { Breakpoint } from "~/enums"

defineProps<{
    games: Games
}>()

let breakpoint = useBreakpoint()

let gridColumns = computed((): number => (
    useGet({
        [Breakpoint.LG]: 4,
        [Breakpoint.MD]: 3,
        [Breakpoint.SM]: 2,
        [Breakpoint.XS]: 1,
    }, getRef(breakpoint))
))
</script>

<template>
<ui-layout-grid :columns="gridColumns">
    <ui-layout-cell
        v-for="game in games.items"
        :key="game.name"
        :width="1"
    >
        <game-card :game="game" />
    </ui-layout-cell>
</ui-layout-grid>
</template>
