<script lang="ts" setup>
useI18n()

let { storeClient } = useClients()

let { game } = storeToRefs(storeClient.gameStore)
</script>

<template>
<v-card>
    <v-row
        :gap="[
            remToNumber(useTheme('spacing.11')),
            remToNumber(useTheme('spacing.11')),
        ]"
    >
        <v-column
            :use-flex="{
                justify: 'space-between',
            }"
        >
            <v-title :level="1">
                {{ game.name }}
            </v-title>

            <widget-action-like-game
                v-if="isAuthenticated()"
                :game="game"
            />
        </v-column>

        <v-column class="text-lg">
            <v-text v-html="game.attributes.description" />
        </v-column>

        <v-column
            :md="18"
        >
            <entity-game-sections />
        </v-column>

        <v-column
            v-if="isAuthenticated()"
            :md="6"
        >
            <v-space vertical>
                <v-button
                    block
                >
                    <i18n-t keypath="Add Section" />
                </v-button>

                <ui-link-button
                    :to="game.attributes.sections.active?.sellRoute"
                    type="primary"
                    block
                >
                    <i18n-t keypath="Sell" />
                </ui-link-button>
            </v-space>
        </v-column>
    </v-row>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card-vars
    --vxp-card-body-v-padding: theme("spacing.12")
    --vxp-card-body-h-padding: theme("spacing.10")

.vxp-card
    @apply border-solid-secondary rounded-5
    @apply backdrop-blur-16
</style>

<i18n lang="yaml">
de:
    Sell: Verkaufen
    Add Section: +Abschnitt hinzufügen
en:
    Sell: Sell
    Add Section: +Add Section
</i18n>
