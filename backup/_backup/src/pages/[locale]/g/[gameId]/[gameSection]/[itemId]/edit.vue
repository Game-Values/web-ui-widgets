<script setup lang="ts">
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

// todo: view

let { sellFacade } = useFacades()

await sellFacade.bootstrap()
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
            <entity-sell-form />
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <entity-sell-upload />
        </v-column>
    </v-row>

    <v-row>
        <v-column>
            <faq-form
                class="
                    bg-[url(/images/faq.png)]
                    bg-no-repeat
                    bg-right-center
                "
            />
        </v-column>
    </v-row>
</ui-page>
</template>
