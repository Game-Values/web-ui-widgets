import type {
    GamesStore,
    GameStore,
    ItemsStore,
    OrderStore,
    SaleStore,
    SettingsStore,
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
    public get itemsStore(): ItemsStore.Store {
        return useItemsStore()
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
    public get settingsStore(): SettingsStore.Store {
        return useSettingsStore()
    }

    @Memoize()
    public get userMeStore(): UserStore.Store {
        return useUserStore("userMeStore")
    }

    @Memoize()
    public get userStore(): UserStore.Store {
        return useUserStore()
    }
}
