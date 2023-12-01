<script lang="ts" setup>
import type { Games, LikedGames } from "~/dto"

import { Breakpoint } from "~/enums"

defineProps<{
    games: Games
    likedGames: LikedGames
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
<v-grid
    :columns="gridColumns"
    class="flex-1"
>
    <v-cell
        v-for="game in games.items"
        :key="game.name"
        :width="1"
    >
        <game-card
            :game="game"
            :liked="likedGames.likedIds.includes(game.id)"
        />
    </v-cell>
</v-grid>
</template>
