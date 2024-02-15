<script lang="ts" setup>
let { routerClient, storeClient } = useClients()
let { userFacade } = useFacades()

await userFacade.bootstrap()

let { user } = storeToRefs(storeClient.userStore)
</script>

<template>
<ui-page>
    <v-row>
        <v-column :lg="18">
            <v-row>
                <v-column>
                    <user-card :user="user" />
                </v-column>

                <v-column>
                    <app-router-tabs
                        :routes="[
                            routerClient.getRoute(routerClient.routeNames.USER_STOREFRONT),
                            routerClient.getRoute(routerClient.routeNames.USER_REVIEWS),
                        ]"
                    />
                </v-column>

                <v-column>
                    <nuxt-page />
                </v-column>
            </v-row>
        </v-column>

        <v-column :lg="6">
            <entity-account-statistic />
        </v-column>
    </v-row>
</ui-page>
</template>
