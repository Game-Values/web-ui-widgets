<script setup lang="ts">
import type { AsyncComponent } from "~/types"
import type { Component } from "vue"

import { ACCOUNT_TABS } from "~/consts"
import { AccountTab } from "~/enums"

let accountTab = ref(AccountTab.BALANCE)

let accountViews = computed((): Record<AccountTab, AsyncComponent> => (
    {
        [AccountTab.BALANCE]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Balance.vue")),
        [AccountTab.ITEMS]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Items.vue")),
        [AccountTab.PURCHASES]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Purchases.vue")),
        [AccountTab.REVIEWS]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Reviews.vue")),
        [AccountTab.SALES]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Sales.vue")),
        [AccountTab.SUBSCRIPTION]: defineAsyncComponent((): Promise<Component> => import("~/views/account/Subscription.vue")),
    }
))

let accountView = computed((): AsyncComponent => (
    useGet(
        getRef(accountViews),
        getRef(accountTab),
    )
))
</script>

<template>
<app-tabs
    v-model="accountTab"
    :tabs="ACCOUNT_TABS"
>
    <template #tab>
        <component :is="accountView" />
    </template>
</app-tabs>
</template>
