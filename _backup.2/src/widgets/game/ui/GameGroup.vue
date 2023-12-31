<script lang="ts" setup>
import { useGamesModel, groupGames } from "~/entities/game"
import { UiTitle } from "~/shared/ui"
import { GameListWidget } from "~/widgets/game"

let gamesModel = useGamesModel()

let gamesGroup = computed(() => groupGames(gamesModel.games))
</script>

<template>
<v-row
    v-for="[firstChar, games] in gamesGroup"
    :key="firstChar"
>
    <v-col cols="12">
        <ui-title level="3">
            {{ firstChar }}
        </ui-title>
    </v-col>

    <v-col>
        <game-list-widget :games="games" />
    </v-col>
</v-row>
</template>
