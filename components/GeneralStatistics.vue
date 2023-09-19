<script setup lang="ts">

import InfoList from "~/components/parts/InfoList.vue"
import InfoListItem from "~/components/parts/InfoListItem.vue"

import StoreFrontIcon from "@heroicons/vue/24/solid/esm/BuildingStorefrontIcon"
import CreditCardIcon from "@heroicons/vue/24/solid/esm/CreditCardIcon"
import UserIcon from "@heroicons/vue/24/solid/esm/UserIcon"
import UsersIcon from "@heroicons/vue/24/solid/esm/UsersIcon"

import { formatNumbers } from "~/utils/format"

interface Created {
  goods: number,
  deals: number,
  online: number,
  users: number
}

const { goods, deals, online, users } = defineProps<Created>()

</script>

<template>
  <InfoList>
    <InfoListItem :label="$t('comp.GeneralStatistics.goods')" :value="formatNumbers(goods)">
      <template #icon>
        <StoreFrontIcon />
      </template>
    </InfoListItem>
    <InfoListItem :label="$t('comp.GeneralStatistics.deals')" :value="formatNumbers(deals)">
      <template #icon>
        <CreditCardIcon />
      </template>
    </InfoListItem>
    <InfoListItem :label="$t('comp.GeneralStatistics.online')" :value="formatNumbers(online)">
      <template #icon>
        <UserIcon />
      </template>
    </InfoListItem>
    <InfoListItem :label="$t('comp.GeneralStatistics.users')" :value="formatNumbers(users)">
      <template #icon>
        <UsersIcon />
      </template>
    </InfoListItem>
  </InfoList>
</template>

<style scoped>

</style>
