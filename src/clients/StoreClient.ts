import type {
    GamesStore,
    GameStore,
    MeStore,
    OrderStore,
    SaleStore,
    UserStore,
} from "~/types"

// todo: stores typing
export class StoreClient {
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
