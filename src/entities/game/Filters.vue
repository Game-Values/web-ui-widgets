<script lang="ts" setup>
import type { GameSection, GameSubsection } from "~/enums"
import type { GameSubsectionRaw } from "~/types"
import type { ComputedRef } from "vue"

import { GameSubsections } from "~/dto"
import { createCollection } from "~/factories"

let { routerClient, storeClient } = useClients()

let { gameSectionsRaw } = storeToRefs(storeClient.gameStore)

let gameSubsections: ComputedRef<GameSubsections> = computed((): GameSubsections => {
    return createCollection(GameSubsections, (
        useMap(
            useEntries(
                getRef(gameSectionsRaw, routerClient.getRouteParam("gameSection") as GameSection),
            ),
            ([key, val]: [key: string, val: GameSubsectionRaw]): GameSubsectionRaw => (
                useAssign(val, {
                    name: key,
                })
            ),
        )
    ))
})

function isShowSubsectionChild(section: `${GameSubsection}.${string}`): boolean {
    let [key, val]: string[] = section.split(".")

    return routerClient.getRouteQuery(key).includes(val)
}
</script>

<template>
<v-card>
    <v-space
        :size="remToNumber(useTheme('spacing.9'))"
        vertical
    >
        <v-title :level="4">
            Filters
        </v-title>

        <v-space
            v-for="gameSubsection in gameSubsections"
            :key="gameSubsection.name"
            size="large"
            vertical
        >
            <template
                v-if="(
                    gameSubsection.section &&
                    isShowSubsectionChild(gameSubsection.section)
                )"
            >
                <v-title
                    :level="6"
                    class="capitalize"
                >
                    {{ gameSubsection.name }}
                </v-title>

                <!-- todo: recursive component -->
                <v-space
                    v-for="gameSubsectionChild in gameSubsection.children"
                    :key="gameSubsectionChild.name"
                    size="large"
                    vertical
                >
                    <entity-game-filter
                        :facet="gameSubsection.name"
                        :subsection="gameSubsectionChild"
                    />
                </v-space>
            </template>

            <template v-if="!gameSubsection.section">
                <v-title
                    :level="6"
                    class="capitalize"
                >
                    {{ gameSubsection.name }}
                </v-title>

                <entity-game-filter
                    :facet="gameSubsection.name"
                    :subsection="gameSubsection"
                />
            </template>
        </v-space>
    </v-space>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-bg-color: theme("colors.white-02")
    --vxp-card-body-v-padding: theme("spacing.9")
    --vxp-card-body-h-padding: theme("spacing.9")
</style>
