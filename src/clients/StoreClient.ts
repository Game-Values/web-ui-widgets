import type { GamesStore, OrderStore } from "~/stores"
import type { Store } from "pinia"

import { useGamesStore, useOrderStore } from "~/stores"

// todo: stores typing
export class StoreClient {
    private _disposeStore(store: Store): void {
        store.$dispose()
    }

    private _resetStore(store: Store): void {
        store.$reset()
    }

    @Memoize()
    public get gamesStore(): GamesStore.Store {
        return useGamesStore()
    }

    @Memoize()
    public get orderStore(): OrderStore.Store {
        return useOrderStore()
    }
}
