<script lang="ts" setup>
import type { Game } from "~/dto"

defineProps<{
    game: Game
    lots: any[]
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
            id-key="Server"
            name="Server"
        />

        <v-table-column
            id-key="Description"
            name="Description"
        />

        <v-table-column
            id-key="Amount"
            name="Amount"
            sorter
        />

        <v-table-column
            id-key="Price"
            name="Price"
            sorter
        />
    </v-table>
</v-collapse-panel>
</template>
