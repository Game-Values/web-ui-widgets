import type { CreateOrderApiV1OrderPostDataRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { GameSection, OrderStep } from "~/enums"
import { createStore } from "~/factories"

export namespace OrderStore {
    export type Id = "orderStore"

    export type State = {
        gameSection: GameSection // todo
        orderRaw: CreateOrderApiV1OrderPostDataRaw
        orderStep: OrderStep
        orderSteps: OrderStep[]
    }

    export type Getters = {
        orderStepIndex: () => number
    }

    export type Actions = {
        nextOrderStep: () => void
        prevOrderStep: () => void
        setOrderRaw: (orderRaw: CreateOrderApiV1OrderPostDataRaw) => void
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

        setOrderRaw(orderRaw: CreateOrderApiV1OrderPostDataRaw): void {
            this.orderRaw = orderRaw
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
        gameSection: GameSection.ACCOUNTS,
        orderRaw: {},
        orderStep: OrderStep.CHOOSE_DEAL,
        orderSteps: [
            OrderStep.CHOOSE_DEAL,
            OrderStep.CONFIRM_ORDER,
            OrderStep.CONFIRM_RECEIPT,
        ],
    }),
})
