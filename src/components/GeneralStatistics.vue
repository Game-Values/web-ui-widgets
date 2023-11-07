<script setup lang="ts">
import StoreFrontIcon from "@heroicons/vue/24/solid/esm/BuildingStorefrontIcon"
import CreditCardIcon from "@heroicons/vue/24/solid/esm/CreditCardIcon"
import UserIcon from "@heroicons/vue/24/solid/esm/UserIcon"
import UsersIcon from "@heroicons/vue/24/solid/esm/UsersIcon"

import InfoList from "~/components/parts/InfoList.vue"
import InfoListItem from "~/components/parts/InfoListItem.vue"
import { formatNumbers } from "~/utils/format"

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
            <store-front-icon/>
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.deals')" :value="formatNumbers(deals)">
        <template #icon>
            <credit-card-icon/>
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.online')" :value="formatNumbers(online)">
        <template #icon>
            <user-icon/>
        </template>
    </info-list-item>
    <info-list-item :label="$t('comp.GeneralStatistics.users')" :value="formatNumbers(users)">
        <template #icon>
            <users-icon/>
        </template>
    </info-list-item>
</info-list>
</template>

<style scoped>

</style>
