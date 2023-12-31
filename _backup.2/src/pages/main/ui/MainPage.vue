<script lang="ts" setup>
import { useGamesModel } from "~/entities/game"
import { GameGroupWidget } from "~/widgets/game"

let gamesModel = useGamesModel()

await gamesModel.fetchGames({
    page: 0,
})
</script>

<template>
<v-container>
    <v-row>
        <v-col lg="8">
            <game-group-widget />
        </v-col>

        <v-col lg="4">
            // chat
        </v-col>
    </v-row>
</v-container>
</template>
