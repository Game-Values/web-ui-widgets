import type { OrderStore } from "~/types"

import { ItemType, OrderStep } from "~/enums"
import { createStore } from "~/factories"

export let useOrderStore: (storeId?: string) => OrderStore.Store = createStore<
    OrderStore.Id,
    OrderStore.State,
    OrderStore.Getters,
    OrderStore.Actions
>("orderStore", {
    actions: {
        nextOrderStep(): void {
            if (~this.orderStepIndex)
                this.orderStep = useGet(this.orderSteps, this.orderStepIndex + 1)
        },

        prevOrderStep(): void {
            if (this.orderStepIndex > 0)
                this.orderStep = useGet(this.orderSteps, this.orderStepIndex - 1)
        },

        setOrderStep(orderStep: OrderStep): void {
            this.orderStep = orderStep
        },
    },

    getters: {
        orderStepIndex(): number {
            return this.orderSteps.indexOf(this.orderStep)
        },
    },

    state: (): OrderStore.State => ({
        orderStep: OrderStep.CHOOSE_DEAL,
        orderSteps: [
            OrderStep.CHOOSE_DEAL,
            OrderStep.CONFIRM_ORDER,
            OrderStep.CONFIRM_RECEIPT,
        ],
        itemType: ItemType.GOLD,
    }),
})
