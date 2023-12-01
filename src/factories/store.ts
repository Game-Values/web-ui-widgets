import type {
    _ActionsTree,
    _GettersTree,
    Store as _Store,
    _StoreWithState,
    DefineStoreOptions,
    StateTree,
    StoreDefinition,
} from "pinia"

export function createStore<
    Id extends string,
    State extends StateTree,
    Getters extends _GettersTree<State>,
    Actions extends _ActionsTree,
>(
    defaultStoreId: string,
    storeOptions: Omit<
        DefineStoreOptions<
            Id,
            State,
            Getters,
            Actions
        >,
        "id"
    >,
): () => _StoreWithState<
    Id,
    State,
    Getters,
    Actions
> {
    return function (
        storeId: string = defaultStoreId,
    ): _Store<
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
        > = defineStore(storeId, storeOptions) as StoreDefinition<
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
