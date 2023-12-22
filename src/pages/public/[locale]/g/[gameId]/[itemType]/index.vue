<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.GAME,
})

let { gameFacade } = useFacades()

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
            <entity-game-filters />
        </v-column>

        <v-column
            :lg="18"
            :md="24"
        >
            <entity-game-lots />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="14"
            :md="12"
            :xs="24"
        >
            <faq-collapse>
                <entity-game-faq />
            </faq-collapse>
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <faq-form :height="575" />
        </v-column>
    </v-row>
</ui-page>
</template>
