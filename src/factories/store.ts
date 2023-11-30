import type { Callable, DefineStore, MaybeCallable } from "~/types"
import type { _ActionsTree, _GettersTree, StateTree, StoreDefinition } from "pinia"

export function createStore<
    Id extends string,
    State extends StateTree,
    Getters extends _GettersTree<State>,
    Actions extends _ActionsTree,
>(
    defaultStoreId: string,
    storeDefinition: MaybeCallable<any>,
): Callable<
    DefineStore<
        Id,
        State,
        Getters,
        Actions
    >
> {
    return function (
        storeId: string = defaultStoreId,
    ): DefineStore<
        Id,
        State,
        Getters,
        Actions
    > {
        let useStore: StoreDefinition<
            Id,
            State,
            Getters,
            Actions
        > = defineStore(storeId, storeDefinition) as StoreDefinition<
            Id,
            State,
            Getters,
            Actions
        >

        if (import.meta.hot)
            import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))

        return useStore()
    }
}
