<script lang="ts" setup>
useI18n()

interface Statistic {
    count: number
    icon: string
    label: string
}

let statistics: Statistic[] = [
    {
        count: 6_748,
        icon: "inbox-stack",
        label: "lots",
    },
    {
        count: 398_053,
        icon: "credit-card",
        label: "deals",
    },
    {
        count: 246_761,
        icon: "user",
        label: "online",
    },
    {
        count: 1_758_904,
        icon: "users",
        label: "users",
    },
]
</script>

<template>
<v-row>
    <v-column
        v-for="statistic in statistics"
        :key="statistic.label"
        :lg="24"
        :sm="6"
        :xs="12"
    >
        <v-space
            align="center"
            size="large"
            no-wrap
        >
            <ui-icon
                :heroicons="statistic.icon"
                color="primary"
                size="40"
            />

            <v-space
                size="small"
                vertical
            >
                <v-title :level="6">
                    {{ formatNumbers(statistic.count) }}
                </v-title>

                <v-text
                    :size="useFirst(useTheme('fontSize.sm'))"
                    class="whitespace-nowrap"
                    disabled
                >
                    <i18n-t :keypath="statistic.label" />
                </v-text>
            </v-space>
        </v-space>
    </v-column>
</v-row>
</template>

<i18n lang="yaml">
de:
    lots: Anzahl von Waren
    deals: Anzahl von Geschäften
    online: online
    users: alle
en:
    lots: number of lots
    deals: amount of deals
    online: online
    users: all
</i18n>
