<script lang="ts" setup>
import type { Games, Items } from "~/dto"

defineProps<{
    games: Games
    items: Items
}>()
</script>

<template>
<game-collapse>
    <template v-if="items.groupedLots.size">
        <game-collapse-lot
            v-for="[gameId, lots] in items.groupedLots"
            :key="gameId"
            :game="games.getById(gameId)"
            :lots="lots.tableData"
        />
    </template>

    <v-text v-else>
        No lots
    </v-text>
</game-collapse>
</template>
