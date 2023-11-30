<script setup lang="ts">
let { saleFacade } = useFacades()

await saleFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Sale
            </v-title>
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <entity-sale-form />
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <entity-sale-upload />
        </v-column>
    </v-row>
</ui-page>
</template>
