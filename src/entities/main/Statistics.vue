<script lang="ts" setup>
useI18n()

interface Statistic {
    label: string
    count: number
    icon: string
}

let statistics: Statistic[] = [
    {
        label: "goods",
        count: 123456,
        icon: "i-heroicons:inbox-stack",
    },
    {
        label: "deals",
        count: 123456,
        icon: "i-heroicons:credit-card",
    },
    {
        label: "online",
        count: 123456,
        icon: "i-heroicons:user",
    },
    {
        label: "users",
        count: 123456,
        icon: "i-heroicons:users",
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
            align="center"
            size="large"
            no-wrap
        >
            <component
                :is="statistic.icon"
                color="primary"
                size="40"
            />

            <ui-base-icon
                color="primary"
                size="40"
            >
                <i :class="statistic.icon" />
            </ui-base-icon>

            <ui-layout-space
                size="small"
                vertical
            >
                <ui-typography-title :level="6">
                    {{ formatNumbers(statistic.count) }}
                </ui-typography-title>

                <ui-typography-text :size="useFirst(useTheme('fontSize.sm'))">
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
