import type { DefineStore } from "~/types"

import { GameSection, OrderStep } from "~/enums"
import { createStore } from "~/factories"

export namespace OrderStore {
    export type Id = "orderStore"

    export type State = {
        gameSection: GameSection // todo
        orderStep: OrderStep
        orderSteps: OrderStep[]
    }

    export type Getters = {
        orderStepIndex: () => number
    }

    export type Actions = {
        nextOrderStep: () => void
        prevOrderStep: () => void
        setOrderStep: (orderStep: OrderStep) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
        gameSection: GameSection.GOLD,
        orderStep: OrderStep.CHOOSE_DEAL,
        orderSteps: [
            OrderStep.CHOOSE_DEAL,
            OrderStep.CONFIRM_ORDER,
            OrderStep.CONFIRM_RECEIPT,
        ],
    }),
})
