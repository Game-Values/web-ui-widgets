import type { UserRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace UserStore {
    export type Id = "userStore"

    export type State = {
        userRaw: UserRaw
    }

    export type Getters = {
        user: () => User
    }

    export type Actions = {
        setUserRaw: (userRaw: UserRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

// todo: composable store
export let useUserStore: (storeId?: string) => UserStore.Store = createStore<
    UserStore.Id,
    UserStore.State,
    UserStore.Getters,
    UserStore.Actions
>("UserStore", {
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
