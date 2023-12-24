import type { _ActionsTree, _GettersTree, Store as _Store, StateTree } from "pinia"

export type DefineStore<
    Id extends string,
    State extends StateTree,
    Getters extends _GettersTree<State>,
    Actions extends _ActionsTree,
> = _Store<
    Id,
    State,
    Getters,
    Actions
>
