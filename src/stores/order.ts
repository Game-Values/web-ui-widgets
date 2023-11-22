// import type { DefineStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { OrderStep, OrderType } from "~/enums"
import { createStore } from "~/factories"

// export namespace OrderStore {
//     export type Id = "orderStore"
//
//     export type State = {
//         orderStep: OrderStep
//         orderSteps: OrderStep[]
//         orderType: OrderType
//     }
//
//     export type Getters = {
//         orderStepIndex: () => number
//     }
//
//     export type Actions = {
//         nextOrderStep: () => void
//         prevOrderStep: () => void
//         setOrderStep: (orderStep: OrderStep) => void
//     }
//
//     export type Store = DefineStore<Id, State, Getters, Actions>
// }

export let useOrderStore = createStore("orderStore", () => {
    let orderSteps: OrderStep[] = reactive([
        OrderStep.CHOOSE_DEAL,
        OrderStep.CONFIRM_ORDER,
        OrderStep.CONFIRM_RECEIPT,
    ])

    let orderType: Ref<OrderType> = ref(OrderType.GOLD)
    let orderStep: Ref<OrderStep> = ref(OrderStep.CHOOSE_DEAL)

    let orderStepIndex: ComputedRef<number> = computed((): number => (
        getRef(orderSteps).indexOf(getRef(orderStep))
    ))

    function nextOrderStep(): void {
        let _orderStepIndex: number = getRef(orderStepIndex)
        if (~_orderStepIndex)
            setOrderStep(useGet(getRef(orderSteps), _orderStepIndex + 1))
    }

    function prevOrderStep(): void {
        let _orderStepIndex: number = getRef(orderStepIndex)
        if (_orderStepIndex > 0)
            setOrderStep(useGet(getRef(orderSteps), _orderStepIndex - 1))
    }

    function setOrderType(_orderType: OrderType): void {
        setRef(orderType, _orderType)
    }

    function setOrderStep(_orderStep: OrderStep): void {
        setRef(orderStep, _orderStep)
    }

    return {
        nextOrderStep,
        orderStep,
        orderStepIndex,
        orderSteps,
        orderType,
        prevOrderStep,
        setOrderStep,
        setOrderType,
    }
})
