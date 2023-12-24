import type { DefineStore, WithdrawRaw } from "~/types"

import { createStore } from "~/factories"

export namespace WithdrawStore {
    export type Id = "withdrawStore"

    export type State = {
        withdrawRaw: WithdrawRaw
    }

    export type Getters = {
        // todo:
    }

    export type Actions = {
        // todo:
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
