<script lang="ts" setup>
import type { AsyncComponent } from "~/types"
import type { Component } from "vue"

import { OrderStep } from "~/enums"

let { storeClient } = useClients()

let { orderStep } = storeToRefs(storeClient.orderStore)

let orderViews = computed((): Record<OrderStep, AsyncComponent> => (
    {
        [OrderStep.CHOOSE_DEAL]: defineAsyncComponent((): Component => import("~/views/order-create-form/ChooseDeal.vue")),
        [OrderStep.CONFIRM_ORDER]: defineAsyncComponent((): Component => import("~/views/order-create-form/ConfirmOrder.vue")),
        [OrderStep.CONFIRM_RECEIPT]: defineAsyncComponent((): Component => import("~/views/order-create-form/ConfirmReceipt.vue")),
    }
))

let orderView = computed((): AsyncComponent => (
    useGet(
        getRef(orderViews),
        getRef(orderStep),
    )
))
</script>

<template>
<component :is="orderView" />
</template>
