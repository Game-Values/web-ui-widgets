import type { UserRaw } from "#schema/data-contracts"
import type { UserStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { User } from "~/dto"
import { createModel, createStore } from "~/factories"

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
