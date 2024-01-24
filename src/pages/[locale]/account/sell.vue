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
                Sell Item
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
        <v-column
            :lg="14"
            :md="12"
            :xs="24"
        >
            <faq-collapse>
                <entity-sell-faq />
            </faq-collapse>
        </v-column>

        <v-column
            :lg="10"
            :md="12"
            :xs="24"
        >
            <faq-form
                class="
                    bg-[url(/images/faq.png)]
                    bg-no-repeat
                "
                style="
                    background-position: center 25%;
                "
                :height="575"
            />
        </v-column>
    </v-row>
</ui-page>
</template>
