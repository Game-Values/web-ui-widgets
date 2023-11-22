import type { Callable, DefineStore, MaybeCallable } from "~/types"
import type { Store, StoreActions, StoreDefinition, StoreGetters, StoreState } from "pinia"

export function createStore<
    Id extends string,
    State extends StoreState<any>,
    Getters extends StoreGetters<any>,
    Actions extends StoreActions<any>,
>(
    defaultStoreId: string,
    storeDefinition: MaybeCallable<
        DefineStore<
            Id,
            State,
            Getters,
            Actions
        >
    >,
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
            Store.Id,
            Store.State,
            Store.Getters,
            Store.Actions
        > = defineStore(storeId, storeDefinition)

        // if (import.meta.hot)
        //     import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))

        return useStore()
    }
}
