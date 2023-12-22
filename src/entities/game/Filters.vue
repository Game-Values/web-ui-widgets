<script lang="ts" setup>
import { Facet, FilterType } from "~/enums"

let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
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

        <entity-game-filter
            v-if="game.attributes.servers.length"
            :facet="Facet.SERVER"
            :filter="FilterType.RADIO"
            :items="game.attributes.servers"
        />
    </v-space>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-bg-color: theme("colors.white-02")
    --vxp-card-body-v-padding: theme("spacing.9")
    --vxp-card-body-h-padding: theme("spacing.9")
</style>
