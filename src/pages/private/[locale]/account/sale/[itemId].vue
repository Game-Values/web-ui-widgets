<script setup lang="ts">
// todo: view
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Edit Item
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

    <v-row>
        <v-column>
            <app-faq />
        </v-column>
    </v-row>
</ui-page>
</template>
