import type { GamesStore, MeStore, OrderStore, UserStore } from "~/stores"
import type { Store } from "pinia"

import { useGamesStore, useMeStore, useOrderStore, useUserStore } from "~/stores"

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
    public get meStore(): MeStore.Store {
        return useMeStore()
    }

    @Memoize()
    public get orderStore(): OrderStore.Store {
        return useOrderStore()
    }

    @Memoize()
    public get userStore(): UserStore.Store {
        return useUserStore()
    }
}
