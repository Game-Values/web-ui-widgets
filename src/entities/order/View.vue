<script lang="ts" setup>
import type { AsyncComponent } from "~/types"

import { OrderStep } from "~/enums"

let { storeClient } = useClients()

let { orderStep } = storeToRefs(storeClient.orderStore)

let orderViews = computed((): Record<OrderStep, AsyncComponent> => (
    {
        [OrderStep.CHOOSE_DEAL]: resolveAsyncComponent("views/order/ChooseDeal.vue"),
        [OrderStep.CONFIRM_ORDER]: resolveAsyncComponent("views/order/ConfirmOrder.vue"),
        [OrderStep.CONFIRM_RECEIPT]: resolveAsyncComponent("views/order/ConfirmReceipt.vue"),
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
