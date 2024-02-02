<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})
</script>

<template>
<ui-page>
    <v-row
        :gap="0"
        class="border border-solid border-white/2 rounded-5"
    >
        <v-column
            :lg="10"
            :md="10"
        >
            <entity-messages-list class="h-85rem max-h-[calc(100vh-20rem)]" />
        </v-column>

        <v-column
            :lg="14"
            :md="14"
        >
            <entity-messages-chat class="h-85rem max-h-[calc(100vh-20rem)]" />
        </v-column>
    </v-row>
</ui-page>
</template>
