<script lang="ts" setup>
import { useGamesModel, groupGames } from "~/entities/lot"
import { UiTitle } from "~/shared/chat-send-hub-message-form"
import { GameListWidget } from "~/widgets/lot"

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
