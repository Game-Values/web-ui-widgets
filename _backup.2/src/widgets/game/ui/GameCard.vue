<script lang="ts" setup>
import type { IGame } from "~/entities/game"

import { GameCardEntity, GameIconEntity, GameTitleEntity } from "~/entities/game"
import { ToggleLikeGameFeature } from "~/features/game"

defineProps<{
    game: IGame
}>()
</script>

<template>
<game-card-entity :game="game">
    <template #image>
        <game-icon-entity
            :game="game"
            :height="140"
        />
    </template>

    <template #title>
        <game-title-entity :game="game" />
    </template>

    <template #like>
        <toggle-like-game-feature :game="game" />
    </template>
</game-card-entity>
</template>
