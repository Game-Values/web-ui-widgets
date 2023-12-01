import type {
    GamesStore,
    GameStore,
    MeStore,
    OrderStore,
    SaleStore,
    UserStore,
} from "~/types"
// import type { Store } from "pinia"

// todo: stores typing
export class StoreClient {
    // todo: stores clear (?)
    // private _disposeStore(store: Store): void {
    //     store.$dispose()
    // }
    //
    // private _resetStore(store: Store): void {
    //     store.$reset()
    // }

    @Memoize()
    public get gamesStore(): GamesStore.Store {
        return useGamesStore()
    }

    @Memoize()
    public get gameStore(): GameStore.Store {
        return useGameStore()
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
    public get saleStore(): SaleStore.Store {
        return useSaleStore()
    }

    @Memoize()
    public get userStore(): UserStore.Store {
        return useUserStore()
    }
}
