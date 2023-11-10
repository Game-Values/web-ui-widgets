<script lang="ts" setup>
import type { Games } from "~/dto"

interface Props {
    games: Games
}

defineProps<Props>()
</script>

<template>
<ui-layout-grid :columns="24">
    <ui-layout-cell
        v-for="game in games.items"
        :key="game.name"
        :width="24 / 4"
    >
        <game-card :game="game" />
    </ui-layout-cell>
</ui-layout-grid>
</template>
