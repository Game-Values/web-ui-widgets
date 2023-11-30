import type { OrderStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { ItemType, OrderStep } from "~/enums"
import { createStore } from "~/factories"

export let useOrderStore: OrderStore.Store = createStore<
    OrderStore.Id,
    OrderStore.State,
    OrderStore.Getters,
    OrderStore.Actions
>("orderStore", (): OrderStore.Store => {
    let orderSteps: OrderStep[] = reactive([
        OrderStep.CHOOSE_DEAL,
        OrderStep.CONFIRM_ORDER,
        OrderStep.CONFIRM_RECEIPT,
    ])

    let orderType: Ref<ItemType> = ref(ItemType.GOLD)
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

    function setOrderType(_orderType: ItemType): void {
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
