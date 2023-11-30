<script setup lang="ts">
let { storeClient } = useClients()
let { itemController } = useControllers()

let { game } = storeToRefs(storeClient.gameStore)
let { games } = storeToRefs(storeClient.gamesStore)
</script>

<template>
<v-form :model="storeClient.saleStore.saleForm">
    <template v-if="game">
        <v-form-item
            label="Game"
            prop="gid"
        >
            <v-select
                :key-config="{
                    label: 'name',
                    value: 'id',
                }"
                :options="games.items"
                @select="(
                    useRouter().push(
                        useSaleRoute({
                            gameId: $event,
                        }),
                    )
                )"
            />
        </v-form-item>

        <v-form-item
            label="Item type"
            prop="attributes.type"
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
            prop="attributes.server"
        >
            <v-select
                :options="game.attributes.servers"
            />
        </v-form-item>

        <v-form-item
            label="Item name"
            prop="name"
        >
            <v-input />
        </v-form-item>

        <v-form-item
            label="Item description"
            prop="attributes.description"
        >
            <v-textarea />
        </v-form-item>

        <v-form-item
            label="Item price"
            prop="attributes.price"
        >
            <v-number-input>
                <template #suffix>
                    $
                </template>
            </v-number-input>
        </v-form-item>

        <v-form-item>
            <v-form-submit
                block
                @submit="itemController.createItem()"
            >
                Sell
            </v-form-submit>
        </v-form-item>
    </template>
</v-form>
</template>
