<script lang="ts" setup>
import type { IGame } from "~/entities/game"

import { GameCardWidget } from "~/widgets/game"

defineProps<{
    games: IGame[]
}>()
</script>

<template>
<v-row>
    <v-col
        v-for="game in games"
        :key="game.id"
        lg="3"
    >
        <game-card-widget :game="game" />
    </v-col>
</v-row>
</template>
