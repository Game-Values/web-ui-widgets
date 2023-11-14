<script lang="tsx" setup>
import type { Component } from "vue"

useI18n()

interface Statistic {
    label: string
    count: number
    icon: Component
}

let statistics: Statistic[] = [
    {
        label: "goods",
        count: 123456,
        icon: (
            <ui-base-icon>
                <i class="i-heroicons:inbox-stack" />
            </ui-base-icon>
        ),
    },
    {
        label: "deals",
        count: 123456,
        icon: (
            <ui-base-icon>
                <i class="i-heroicons:credit-card" />
            </ui-base-icon>
        ),
    },
    {
        label: "online",
        count: 123456,
        icon: (
            <ui-base-icon>
                <i class="i-heroicons:user" />
            </ui-base-icon>
        ),
    },
    {
        label: "users",
        count: 123456,
        icon: (
            <ui-base-icon>
                <i class="i-heroicons:users" />
            </ui-base-icon>
        ),
    },
]
</script>

<template>
<ui-layout-row>
    <ui-layout-col
        v-for="statistic in statistics"
        :key="statistic.label"
        :lg="24"
        :sm="6"
        :xs="12"
    >
        <ui-layout-space
            :size="remToNumber(useThemeSpace(7))"
            align="center"
            no-wrap
        >
            <component
                :is="statistic.icon"
                color="primary"
                size="40"
            />

            <ui-layout-space
                :size="0"
                vertical
            >
                <ui-typography-title :level="6">
                    {{ formatNumbers(statistic.count) }}
                </ui-typography-title>

                <ui-typography-text :style="{ fontSize: useThemeFontSize('sm') }">
                    <i18n-t :keypath="statistic.label" />
                </ui-typography-text>
            </ui-layout-space>


        </ui-layout-space>
    </ui-layout-col>
</ui-layout-row>
</template>

<i18n lang="yaml">
de:
    goods: Anzahl von Waren
    deals: Anzahl von Geschäften
    online: online
    users: alle
en:
    goods: number of goods
    deals: amount of deals
    online: online
    users: all
</i18n>
