<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { favoritesFacade } = useFacades()

await favoritesFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Favorites
            </v-title>
        </v-column>

        <v-column
            :lg="18"
            :span="24"
        >
            <entity-favorites-games />
        </v-column>
    </v-row>

    <v-row>
        <v-column
            :lg="14"
            :md="12"
            :xs="24"
        >
            <faq-collapse>
                <entity-favorites-faq />
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
