<script lang="ts" setup>
import type { Game, Item } from "~/dto"
import type { LotsTable } from "~/types"

defineProps<{
    game: Game
    lots: LotsTable[]
}>()

useI18n()
</script>

<template>
<v-collapse-panel>
    <template #title>
        <v-space
            align="center"
            size="large"
        >
            <game-icon
                :game="game"
                size="80"
            />

            <v-space
                size="small"
                vertical
            >
                <v-title :level="4">
                    {{ game.name }}
                </v-title>

                <v-text>
                    <i18n-t
                        :plural="lots.length"
                        keypath="plural.lots"
                        scope="global"
                    >
                        <template #n>
                            {{ lots.length }}
                        </template>
                    </i18n-t>
                </v-text>
            </v-space>
        </v-space>
    </template>

    <!-- todo: component (?) -->
    <v-table :data="lots">
        <v-table-column
            id-key="attributesServer"
            name="Server"
        />

        <v-table-column
            v-slot="{ row }: { row: Item }"
            id-key="name"
            name="Item"
        >
            <v-space
                size="small"
                vertical
            >
                <ui-link
                    :to="
                        row.isUserMeItem
                            ? row.editRoute
                            : row.buyRoute
                    "
                    type="primary"
                >
                    <v-title :level="6">
                        {{ row.name }}
                    </v-title>
                </ui-link>

                <v-text disabled>
                    {{ row.attributesDescription }}
                </v-text>
            </v-space>
        </v-table-column>

        <v-table-column
            :width="150"
            id-key="attributesAmount"
            name="In Stock"
            sorter
        />

        <v-table-column
            :formatter="formatPrice"
            :width="150"
            id-key="attributesPrice"
            name="Price"
            sorter
        />
    </v-table>
</v-collapse-panel>
</template>
