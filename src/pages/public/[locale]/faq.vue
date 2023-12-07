<script lang="ts" setup>
import { RouteLayout } from "~/enums"

definePageMeta({
    layout: RouteLayout.FAQ,
})
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :lg="16"
            :md="12"
            :xs="24"
        >
            <app-router-view />
        </v-column>

        <v-column
            :lg="8"
            :md="12"
            :xs="24"
        >
            <entity-faq-form />
        </v-column>
    </v-row>
</ui-page>
</template>
