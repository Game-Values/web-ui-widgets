import type { UserRaw } from "#schema/data-contracts"
import type { MeStore } from "~/types"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useMeStore: () => MeStore.Store = createStore<
    MeStore.Id,
    MeStore.State,
    MeStore.Getters,
    MeStore.Actions
>("userStore", {
    actions: {
        setMeRaw(meRaw: UserRaw): void {
            this.meRaw = meRaw
        },
    },

    getters: {
        authenticated(): boolean {
            return !isNil(this.me.id)
        },

        me(): User {
            return createModel(User, this.meRaw)
        },
    },

    state: (): MeStore.State => ({
        meRaw: {},
    }),
})
