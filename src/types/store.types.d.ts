import type { DefineStoreOptions, StoreActions, StoreGeneric, StoreGetters, StoreState } from "pinia"

export type DefineStore<
    Id extends string,
    State extends StoreState<any>,
    Getters extends StoreGetters<any>,
    Actions extends StoreActions<any>,
> = (
    Omit<
        DefineStoreOptions<
            Id,
            State,
            Getters,
            Actions
        >,

        "id"
    > |

    StoreGeneric<
        Id,
        State,
        Getters,
        Actions,
    >
)
