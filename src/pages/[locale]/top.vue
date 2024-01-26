<script lang="ts" setup>
import PremiumPlayersSwitch from "~/entities/game/PremiumPlayersSwitch.vue";

let { routerClient } = useClients()
</script>

<template>
<ui-overlay
    :style="{
        position: 'absolute',
        top: '-7rem',
    }"
    height="500"
>
    <ui-image src="/images/top-10-cover.png" />

    <template #overlay>
        <div
            class="
                fit
                bg-gradient-to-b
                from-black
                from-0%
            "
        />
    </template>
</ui-overlay>

<ui-page>
    <v-card>
        <v-row>
            <v-column>
                <v-title :level="1">
                    TOP-10
                </v-title>
            </v-column>

            <v-column>
                <v-row align="middle">
                    <v-column
                        :lg="6"
                        :md="6"
                        :sm="12"
                        :xs="24"
                    >
                        <v-select
                            :options="[]"
                            placeholder="All games"
                        />
                    </v-column>

                    <v-column
                        :lg="6"
                        :md="6"
                        :sm="12"
                        :xs="24"
                    >
                        <premium-players-switch />
                    </v-column>
                </v-row>
            </v-column>

            <v-column
                :lg="12"
                :md="12"
                :sm="24"
                :xs="24"
            >
                <app-router-tabs
                    :routes="[
                        routerClient.getRoute(routerClient.routeNames.TOP_BUYERS),
                        routerClient.getRoute(routerClient.routeNames.TOP_SELLERS),
                    ]"
                />
            </v-column>

            <v-column>
                <nuxt-page />
            </v-column>
        </v-row>
    </v-card>

    <v-row>
        <v-column>
            <faq-form
                class="
                    bg-[url(/images/faq.png)]
                    bg-no-repeat
                    bg-right-center
                "
            />
        </v-column>
    </v-row>
</ui-page>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-v-padding: theme("spacing.12")
    --vxp-card-body-h-padding: theme("spacing.10")

:deep(.vxp-table-vars)
    --vxp-table-cell-v-padding: theme("spacing.4")
    --vxp-table-cell-h-padding: theme("spacing.4")
    --vxp-table-row-bg-color: transparent
    --vxp-table-cell-bg-color: transparent

.vxp-card
    @apply border-solid-secondary rounded-5
    @apply backdrop-blur-16

:deep(.vxp-avatar--premium)
    @apply border-1

:deep(.vxp-table),
:deep(.vxp-table__cell)
    @apply border-0

:deep(.vxp-table .vxp-table__body .vxp-table__group:nth-child(1))
    border-radius: 8px
    border: 1px solid rgba(255, 149, 0, 0.19)
    background: rgba(255, 149, 0, 0.02)

:deep(.vxp-table .vxp-table__group:nth-child(2))
    border-radius: 8px
    border: 1px solid rgba(61, 152, 255, 0.20)
    background: rgba(13, 105, 255, 0.01)

:deep(.vxp-table .vxp-table__group:nth-child(3))
    border-radius: 8px
    border: 1px solid rgba(21, 154, 90, 0.20)
    background: rgba(59, 207, 94, 0.01)
</style>
