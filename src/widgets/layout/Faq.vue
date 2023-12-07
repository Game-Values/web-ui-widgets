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
                    FAQ
                </v-title>
            </v-column>

            <v-column>
                <app-router-navs
                    :routes="[
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_GENERAL), {
                            heroicons: 'currency-dollar-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_SELLERS), {
                            heroicons: 'chat-bubble-oval-left-ellipsis-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_TECHNICAL), {
                            heroicons: 'cog-8-tooth-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_PAYMENT), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_SECURITY), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_DELIVERY), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_RATING), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_AFFILIATE), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_AI), {
                            heroicons: 'information-circle-solid',
                        }),
                        useAssign(routerClient.getRoute(routerClient.routeNames.PUBLIC_FAQ_ACCOUNT), {
                            heroicons: 'information-circle-solid',
                        }),
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
