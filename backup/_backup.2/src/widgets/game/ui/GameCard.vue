<script lang="ts" setup>
import type { IGame } from "~/entities/lot"

import { GameCardEntity, GameIconEntity, GameTitleEntity } from "~/entities/lot"
import { ToggleLikeGameFeature } from "~/features/lot"

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
