<script lang="ts" setup>
let { routerClient } = useClients()
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <app-router-tabs
                :routes="[
                    routerClient.getRoute(routerClient.routeNames.POLICY_PRIVACY),
                    routerClient.getRoute(routerClient.routeNames.POLICY_LICENSE),
                    routerClient.getRoute(routerClient.routeNames.POLICY_AGREEMENT),
                ]"
            />
        </v-column>

        <v-column>
            <v-space
                align="center"
                justify="space-between"
            >
                <v-title :level="1">
                    {{ useGet(routerClient.getRouteMeta("seo"), "title") }}
                </v-title>

                <widget-action-save-policy-pdf />
            </v-space>
        </v-column>

        <v-column>
            <nuxt-page />
        </v-column>
    </v-row>
</ui-page>
</template>
