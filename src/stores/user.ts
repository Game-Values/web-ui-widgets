import type { UserRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"
import type { StoreState } from "pinia"
import type { ComputedRef, Ref } from "vue"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace UserStore {
    export type Id = "userStore"

    export type State = StoreState<Getters>

    export type Getters = {
        user: () => User
    }

    export type Actions = {
        setUserRaw: (userRaw: UserRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useUserStore: UserStore.Store = createStore<
    UserStore.Id,
    UserStore.State,
    UserStore.Getters,
    UserStore.Actions
>("userStore", (): UserStore.Store => {
    let userRaw: Ref<UserRaw> = ref({})
    let user: ComputedRef<User> = computed((): User => createModel(User, getRef(userRaw)))

    function setUserRaw(raw: UserRaw): void {
        setRef(userRaw, raw)
    }

    return {
        setUserRaw,
        user,
    }
})
