<script lang="ts" setup>
import { RouteMiddleware } from "~/enums"

definePageMeta({
    middleware: RouteMiddleware.AUTH,
})

let { routerClient, storeClient } = useClients()
let { userMeFacade } = useFacades()

let { user } = storeToRefs(storeClient.userMeStore)

await userMeFacade.bootstrap()
</script>

<template>
<ui-page>
    <v-row>
        <v-column
            :lg="18"
            :md="16"
        >
            <v-row>
                <v-column>
                    <user-card :user="user" />
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
        </v-column>

        <v-column
            :lg="6"
            :md="8"
        >
            <entity-account-statistic />
        </v-column>
    </v-row>
</ui-page>
</template>
