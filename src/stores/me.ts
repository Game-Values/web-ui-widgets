import type { MeStore, UserStore } from "~/types"
import type { ComputedRef } from "vue"

export let useMeStore: MeStore.Store = (): MeStore.Store => {
    let userStore: UserStore.Store = useUserStore("meStore")
    let authenticated: ComputedRef<boolean> = computed((): boolean => Boolean(useGet(userStore.user, "id")))

    return useAssign(userStore, {
        authenticated,
    })
}
