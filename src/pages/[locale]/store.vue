<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { routerClient } = useClients()
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                Store
            </v-title>
        </v-column>

        <v-column>
            <app-router-tabs
                :routes="[
                    routerClient.getRoute(routerClient.routeNames.STORE_SALES),
                    routerClient.getRoute(routerClient.routeNames.STORE_PURCHASES),
                ]"
            />
        </v-column>

        <v-column>
            <nuxt-page />
        </v-column>
    </v-row>
</ui-page>
</template>
