<script setup lang="ts">
import type { Game } from "~/dto"
import type { OrderType } from "~/enums"
import type { UnwrapRef } from "vue"

// todo: mv to dto & sale store
interface Sale {
    gameId: string
    gameItem: string
    gameServer: string // todo: or serverId (?)
    orderDescription: string
    orderPrice: number
    orderType: OrderType
}

let { storeClient } = useClients()

let { games } = storeToRefs(storeClient.gamesStore)

let formModel: UnwrapRef<Partial<Sale>> = ({
    gameId: useGet(useRoute().query, "gameId", ""),
    orderType: useGet(useRoute().query, "orderType", ""),
})

let game = computed((): Game | undefined => (
    getRef(games).getById(formModel.gameId!)
))
</script>

<template>
<v-form :model="formModel">
    <template v-if="game">
        <v-form-item
            label="Game"
            prop="gameId"
        >
            <v-select
                :key-config="{
                    label: 'name',
                    value: 'id',
                }"
                :options="games.items"
            />
        </v-form-item>

        <v-form-item
            label="Order type"
            prop="orderType"
        >
            <v-select
                :key-config="{
                    label: 'name',
                    value: 'name',
                }"
                :options="game.attributes.sections.items"
            />
        </v-form-item>

        <v-form-item
            label="Server"
            prop="gameServer"
        >
            <v-select
                :options="game.attributes.servers"
            />
        </v-form-item>

        <v-form-item
            label="Item name"
            prop="gameItem"
        >
            <v-input />
        </v-form-item>

        <v-form-item
            label="Order description"
            prop="orderDescription"
        >
            <v-textarea />
        </v-form-item>

        <v-form-item
            label="Item name"
            prop="gameItem"
        >
            <v-number-input>
                <template #suffix>
                    $
                </template>
            </v-number-input>
        </v-form-item>

        <v-form-item>
            <v-form-submit block>
                Sell
            </v-form-submit>
        </v-form-item>
    </template>
</v-form>
</template>
