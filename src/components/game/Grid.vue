<script lang="ts" setup>
import type { Games } from "~/dto"

defineProps<{
    games: Games
}>()
</script>

<template>
<ui-layout-grid :columns="4">
    <ui-layout-cell
        v-for="game in games.items"
        :key="game.name"
        :width="1"
    >
        <game-card :game="game" />
    </ui-layout-cell>
</ui-layout-grid>
</template>
