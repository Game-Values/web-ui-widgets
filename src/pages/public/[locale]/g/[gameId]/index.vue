<script lang="ts" setup>
import { Layout } from "~/enums"

// todo: typing
definePageMeta({
    layout: Layout.GAME,
})

let { storeClient } = useClients()
let { gameFacade } = useFacades()

storeClient.gameStore.$dispose()

await gameFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row align="middle">
        <v-column>
            <entity-game-info />
        </v-column>

        <v-column :lg="12">
            <entity-game-search />
        </v-column>

        <v-column :lg="12">
            <entity-game-online-players-switch />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="6"
            :md="12"
        >
            // todo: filters
        </v-column>

        <v-column
            :lg="18"
            :md="24"
        >
            <entity-game-lots />
        </v-column>
    </v-row>
</ui-page>
</template>
