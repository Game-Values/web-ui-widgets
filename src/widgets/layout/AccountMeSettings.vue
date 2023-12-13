<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { routerClient } = useClients()
</script>

<template>
<widget-layout-app>
    <ui-content>
        <v-row>
            <v-column>
                <v-title :level="1">
                    Settings
                </v-title>
            </v-column>

            <v-column>
                <app-router-tabs
                    :routes="[
                        routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_BASIC),
                        routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_NOTIFICATIONS),
                        routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_REFERRAL),
                        routerClient.getRoute(routerClient.routeNames.PRIVATE_ACCOUNT_SETTINGS_SECURITY),
                    ]"
                />
            </v-column>

            <v-column>
                <slot />
            </v-column>
        </v-row>
    </ui-content>
</widget-layout-app>
</template>
