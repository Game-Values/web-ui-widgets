import type { GamesStore } from "~/stores"
import type { Store } from "pinia"

import { useGamesStore } from "~/stores"

// todo: stores typing
export class StoreClient {
    public disposeStore(store: Store): void {
        store.$dispose()
    }

    public resetStore(store: Store): void {
        store.$reset()
    }

    @Memoize()
    public get gamesStore(): GamesStore.Store {
        return useGamesStore()
    }
}
