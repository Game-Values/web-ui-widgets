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
                <v-row>
                    <v-column>
                        <app-router-tabs
                            :routes="[
                                routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_PRIVACY),
                                routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_LICENSE),
                                routerClient.getRoute(routerClient.routeNames.PUBLIC_POLICY_AGREEMENT),
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
                        <slot />
                    </v-column>
                </v-row>
            </v-column>
        </v-row>
    </ui-content>
</widget-layout-app>
</template>
