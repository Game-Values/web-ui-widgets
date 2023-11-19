<script lang="ts" setup>
import type { AsyncComponent } from "~/types"

import { OrderStep } from "~/enums"

let { storeClient } = useClients()

let { orderStep } = storeToRefs(storeClient.orderStore)

let orderViews = computed((): Record<OrderStep, AsyncComponent> => (
    {
        [OrderStep.CHOOSE_DEAL]: defineAsyncComponent((): Promise<AsyncComponent> => (
            import("~/views/order/ChooseDeal.vue")
        )),
        [OrderStep.CONFIRM_ORDER]: defineAsyncComponent((): AsyncComponent => (
            import("~/views/order/ConfirmOrder.vue")
        )),
        [OrderStep.CONFIRM_RECEIPT]: defineAsyncComponent((): AsyncComponent => (
            import("~/views/order/ConfirmReceipt.vue")
        )),
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
