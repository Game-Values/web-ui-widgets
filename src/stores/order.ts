import type { OrderInDBRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Order } from "~/dto"
import { GameSection, OrderStep } from "~/enums"
import { createModel, createStore } from "~/factories"

export namespace OrderStore {
    export type Id = "orderStore"

    export type State = {
        gameSection: GameSection // todo
        orderRaw: OrderInDBRaw
        orderStep: OrderStep
        orderSteps: OrderStep[]
    }

    export type Getters = {
        order: () => Order
        orderStepIndex: () => number
    }

    export type Actions = {
        nextOrderStep: () => void
        prevOrderStep: () => void
        setOrderRaw: (orderRaw: OrderInDBRaw) => void
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

        setOrderRaw(orderRaw: OrderInDBRaw): void {
            this.orderRaw = orderRaw
        },

        setOrderStep(orderStep: OrderStep): void {
            this.orderStep = orderStep
        },
    },

    getters: {
        order(): Order {
            return createModel(Order, this.orderRaw)
        },

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
