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
                Settings
            </v-title>
        </v-column>

        <v-column>
            <app-router-tabs
                :routes="[
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SETTINGS_BASIC),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SETTINGS_NOTIFICATIONS),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SETTINGS_REFERRAL),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SETTINGS_SECURITY),
                ]"
            />
        </v-column>

        <v-column>
            <nuxt-page />
        </v-column>
    </v-row>
</ui-page>
</template>
