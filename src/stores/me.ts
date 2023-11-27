import type { UserStore } from "~/stores"
import type { DefineStore } from "~/types"
import type { ComputedRef } from "vue"

import { useUserStore } from "~/stores"

export namespace MeStore {
    export type Id = "meStore"

    export type State = UserStore.State

    export type Getters = UserStore.Getters & {
        authenticated: boolean
    }

    export type Actions = UserStore.Actions

    export type Store = DefineStore<Id, State, Getters, Actions>
}

export let useMeStore: MeStore.Store = (): MeStore.Store => {
    let userStore: UserStore.Store = useUserStore("meStore")
    let authenticated: ComputedRef<boolean> = computed((): boolean => Boolean(useGet(userStore.user, "id")))

    return useAssign(userStore, {
        authenticated,
    })
}
