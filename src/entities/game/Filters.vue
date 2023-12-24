<script lang="ts" setup>
import { Facet, FilterType } from "~/enums"

let { routerClient, storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)

async function resetFilters(): Promise<void> {
    await navigateTo(
        {
            query: useOmit(routerClient.route.query, useKeys(useFacetQuery())),
        },
        {
            replace: true,
        },
    )
}
</script>

<template>
<v-card>
    <v-space
        size="large"
        vertical
    >
        <v-title :level="4">
            Filters
        </v-title>

        <v-form
            :gap="[
                remToNumber(useTheme('spacing.9')),
                remToNumber(useTheme('spacing.9')),
            ]"
        >
            <v-form-item>
                <v-space
                    size="large"
                    vertical
                >
                    <v-title
                        :level="6"
                        class="capitalize"
                    >
                        {{ Facet.SERVER }}
                    </v-title>

                    <entity-game-filter
                        v-if="game.attributes.servers?.length"
                        :facet="Facet.SERVER"
                        :filter="FilterType.RADIO"
                        :items="game.attributes.servers"
                    />
                </v-space>
            </v-form-item>

            <v-form-item>
                <v-space
                    size="large"
                    vertical
                >
                    <v-title
                        :level="6"
                        class="capitalize"
                    >
                        {{ Facet.PRICE }}
                    </v-title>

                    <entity-game-filter
                        :facet="[
                            Facet.PRICE_FROM,
                            Facet.PRICE_TILL,
                        ]"
                        :filter="FilterType.SLIDER"
                        :max="10000"
                        :min="0"
                    />
                </v-space>
            </v-form-item>

            <v-form-item>
                <v-form-reset
                    block
                    @reset="resetFilters()"
                >
                    Reset
                </v-form-reset>
            </v-form-item>
        </v-form>
    </v-space>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-bg-color: theme("colors.white-02")
    --vxp-card-body-v-padding: theme("spacing.9")
    --vxp-card-body-h-padding: theme("spacing.9")
</style>
