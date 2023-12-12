import type { WithdrawStore } from "~/types"

import { createStore } from "~/factories"

export let useWithdrawStore: (storeId?: string) => WithdrawStore.Store = createStore<
    WithdrawStore.Id,
    WithdrawStore.State,
    WithdrawStore.Getters,
    WithdrawStore.Actions
>("withdrawStore", {
    state: (): WithdrawStore.State => ({
        withdrawRaw: {
            amount: 0,
            type: null,
        },
    }),
})
