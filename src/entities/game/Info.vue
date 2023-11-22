<script lang="ts" setup>
// todo: from api

useI18n()

let game = {
    categories: [
        { count: 10, label: "Accounts" },
        { count: 11, label: "Items" },
        { count: 12, label: "Other" },
        { count: 7, label: "Gold" },
        { count: 9, label: "Services" },
    ],
    description: "We offer to buy ArcheAge Unchained gold (EU and NA) on Game Values. Sellers are real players, and transactions are made without intermediaries and are protected by a security guarantee system (sellers are paid only after orders are completed).",
    id: 1,
    liked: false,
    title: "ArcheAge: Unchained",
}
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
                {{ game.title }}
            </v-title>

            <widget-action-like-game :game="game" />
        </v-column>

        <v-column>
            <v-text :size="useFirst(useTheme('fontSize.lg'))">
                {{ game.description }}
            </v-text>
        </v-column>

        <v-column
            :md="18"
        >
            <game-categories :categories-mock="game.categories" />
        </v-column>

        <v-column
            :md="6"
        >
            <v-space vertical>
                <v-button
                    block
                >
                    <i18n-t keypath="Add Section" />
                </v-button>

                <v-button
                    type="primary"
                    block
                >
                    <i18n-t keypath="Sell" />
                </v-button>
            </v-space>
        </v-column>
    </v-row>
</v-card>
</template>

<style lang="sass" scoped>
.vxp-card
    --vxp-card-body-v-padding: theme("spacing.12")
    --vxp-card-body-h-padding: theme("spacing.10")

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
