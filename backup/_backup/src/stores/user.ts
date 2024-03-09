import type { OrderInDBRaw, UserRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Orders, User } from "~/dto"
import { createCollection, createModel, createStore } from "~/factories"

export namespace UserStore {
    export type Id = "userStore"

    export type State = {
        userOrdersRaw: OrderInDBRaw[]
        userRaw: UserRaw
    }

    export type Getters = {
        user: () => User
        userOrders: () => Orders
    }

    export type Actions = {
        setUserOrdersRaw: (ordersRaw: OrderInDBRaw[]) => void
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
        setUserOrdersRaw(userOrdersRaw: OrderInDBRaw[]): void {
            this.userOrdersRaw = userOrdersRaw
        },

        setUserRaw(userRaw: UserRaw): void {
            this.userRaw = userRaw
        },
    },

    getters: {
        user(): User {
            return createModel(User, this.userRaw)
        },

        userOrders(): Orders {
            return createCollection(Orders, this.userOrdersRaw)
        },
    },

    state: (): UserStore.State => ({
        userOrdersRaw: [],
        userRaw: {},
    }),
})
