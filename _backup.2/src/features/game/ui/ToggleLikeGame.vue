<script lang="ts" setup>
import type { IGame } from "~/entities/game"

import { useGameModel } from "~/entities/game"

let props = defineProps<{
    game: IGame
}>()

let gamesModel = useGameModel()

async function handleToggleLikeGame() {

}
</script>

<template>
<v-btn
    icon="i-heroicon:heart"
    size="x-small"
    variant="text"
    @click="handleToggleLikeGame"
/>
</template>
