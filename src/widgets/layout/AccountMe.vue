<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { routerClient, storeClient } = useClients()

let { user } = storeToRefs(storeClient.userMeStore)
</script>

<template>
<widget-layout-app>
    <ui-content>
        <v-row>
            <v-column :lg="18">
                <v-row>
                    <v-column>
                        <user-card :user="user" />
                    </v-column>

                    <v-column>
                        <app-router-tabs
                            :routes="[
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_BALANCE),
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SALES),
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_PURCHASES),
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_ITEMS),
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_REVIEWS),
                                routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SUBSCRIPTION),
                            ]"
                        />
                    </v-column>

                    <v-column>
                        <slot />
                    </v-column>
                </v-row>
            </v-column>

            <v-column :lg="6">
                <entity-account-statistic />
            </v-column>
        </v-row>
    </ui-content>
</widget-layout-app>
</template>
