<script lang="ts" setup>
import type { ScopedProps } from "~/types"
import type { VNode } from "vue"

defineSlots<{
    default: (scopedProps: ScopedProps) => VNode
}>()

let { routerClient } = useClients()
</script>

<template>
<ui-page>
    <v-row>
        <v-column>
            <v-title :level="1">
                FAQ
            </v-title>
        </v-column>

        <v-column>
            <app-router-navs
                :routes="[
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_GENERAL), {
                        heroicons: 'chat-bubble-oval-left-ellipsis-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_SELLERS), {
                        heroicons: 'currency-dollar-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_TECHNICAL), {
                        heroicons: 'cog-8-tooth-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_PAYMENT), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_SECURITY), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_DELIVERY), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_RATING), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_AFFILIATE), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_AI), {
                        heroicons: 'information-circle-solid',
                    }),
                    useAssign(routerClient.getRoute(routerClient.routeNames.FAQ_ACCOUNT), {
                        heroicons: 'information-circle-solid',
                    }),
                ]"
            />
        </v-column>

    </v-row>

    <v-row>
        <v-column
            :lg="16"
            :md="12"
            :xs="24"
        >
            <nuxt-page />
        </v-column>

        <v-column
            :lg="8"
            :md="12"
            :xs="24"
        >
            <entity-faq-form />
        </v-column>
    </v-row>
</ui-page>
</template>
