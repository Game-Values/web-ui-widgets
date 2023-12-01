import type { UserRaw } from "#schema/data-contracts"
import type { MeStore } from "~/types"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

// todo: composable store
export let useMeStore: () => MeStore.Store = createStore<
    MeStore.Id,
    MeStore.State,
    MeStore.Getters,
    MeStore.Actions
>("meStore", {
    actions: {
        setMeRaw(meRaw: UserRaw): void {
            this.meRaw = meRaw
        },
    },

    getters: {
        authenticated(): boolean {
            return !isNil(
                useGet(this.me, "id"),
            )
        },

        me(): User {
            return createModel(User, this.meRaw)
        },
    },

    state: (): MeStore.State => ({
        meRaw: {},
    }),
})
