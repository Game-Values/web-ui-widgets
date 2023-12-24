<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { routerClient } = useClients()
let { userMeFacade } = useFacades()

await userMeFacade.bootstrap()
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
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_BALANCE),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SALES),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_PURCHASES),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_ITEMS),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_REVIEWS),
                    routerClient.getRoute(routerClient.routeNames.ACCOUNT_SUBSCRIPTION),
                ]"
            />
        </v-column>

        <v-column>
            <nuxt-page />
        </v-column>
    </v-row>
</ui-page>
</template>
