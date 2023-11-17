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
<ui-form-card>
    <ui-layout-row
        :gap="[
            remToNumber(useTheme('spacing.11')),
            remToNumber(useTheme('spacing.11')),
        ]"
    >
        <ui-layout-col
            :use-flex="{
                justify: 'space-between',
            }"
        >
            <ui-typography-title :level="1">
                {{ game.title }}
            </ui-typography-title>

            <widget-action-like-game :game="game" />
        </ui-layout-col>

        <ui-layout-col>
            <ui-typography-text :size="useFirst(useTheme('fontSize.lg'))">
                {{ game.description }}
            </ui-typography-text>
        </ui-layout-col>

        <ui-layout-col
            :md="18"
        >
            <game-categories :categories-mock="game.categories" />
        </ui-layout-col>

        <ui-layout-col
            :md="6"
        >
            <ui-layout-space
                class="flex-1"
                vertical
            >
                <ui-base-button
                    block
                >
                    <i18n-t keypath="Add Section" />
                </ui-base-button>

                <ui-base-button
                    type="primary"
                    block
                >
                    <i18n-t keypath="Sell" />
                </ui-base-button>
            </ui-layout-space>
        </ui-layout-col>
    </ui-layout-row>
</ui-form-card>
</template>

<style lang="sass" scoped>
:deep(.vxp-card__content)
    --vxp-card-body-v-padding: 4rem
    --vxp-card-body-h-padding: 3rem

    @apply border-solid-secondary rounded-5
    @apply backdrop-blur-[5rem]
</style>

<i18n lang="yaml">
de:
    Sell: Verkaufen
    Add Section: +Abschnitt hinzufügen
en:
    Sell: Sell
    Add Section: +Add Section
</i18n>
