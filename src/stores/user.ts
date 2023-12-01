import type { UserRaw } from "#schema/data-contracts"
import type { UserStore } from "~/types"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useUserStore: () => UserStore.Store = createStore<
    UserStore.Id,
    UserStore.State,
    UserStore.Getters,
    UserStore.Actions
>("userStore", {
    actions: {
        setUserRaw(userRaw: UserRaw): void {
            this.userRaw = userRaw
        },
    },

    getters: {
        user(): User {
            return createModel(User, this.userRaw)
        },
    },

    state: (): UserStore.State => ({
        userRaw: {},
    }),
})
