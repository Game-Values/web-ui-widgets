<script setup lang="ts">
import InfoList from "~/components/parts/InfoList.vue"
import InfoListItem from "~/components/parts/InfoListItem.vue"

interface Created {
    deals: string,
    goods: string,
    online: string,
    users: string
}

defineProps<Created>()
</script>

<template>
<info-list>
    <info-list-item :label="$t('comp.GeneralStatistics.goods')" :value="formatNumbers(goods)">
        <template #icon>
            <ui-icon-store-front size="40" />
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.deals')" :value="formatNumbers(deals)">
        <template #icon>
            <ui-icon-credit-card size="40" />
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.online')" :value="formatNumbers(online)">
        <template #icon>
            <ui-icon-user size="40" />
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.users')" :value="formatNumbers(users)">
        <template #icon>
            <ui-icon-users size="40" />
        </template>
    </info-list-item>
</info-list>
</template>
