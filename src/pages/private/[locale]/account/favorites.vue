<script lang="ts" setup>
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

        <v-column>
            <app-faq />
        </v-column>
    </v-row>
</ui-page>
</template>
