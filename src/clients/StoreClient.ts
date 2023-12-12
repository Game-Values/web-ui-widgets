import type {
    GamesStore,
    GameStore,
    ItemsStore,
    ItemStore,
    OrderStore,
    SellStore,
    SeoStore,
    SettingsStore,
    UserStore,
    WithdrawStore,
} from "~/types"

// todo: stores typing
export class StoreClient {
    @Memoize()
    public get gamesStore(): GamesStore.Store {
        return useGamesStore()
    }

    // todo: factory (?)
    @Memoize()
    public get gameStore(): GameStore.Store {
        return useGameStore()
    }

    // todo: factory
    @Memoize()
    public get itemsStore(): ItemsStore.Store {
        return useItemsStore()
    }

    // todo: factory
    @Memoize()
    public get itemStore(): ItemStore.Store {
        return useItemStore()
    }

    @Memoize()
    public get orderStore(): OrderStore.Store {
        return useOrderStore()
    }

    @Memoize()
    public get sellStore(): SellStore.Store {
        return useSellStore()
    }

    @Memoize()
    public get seoStore(): SeoStore.Store {
        return useSeoStore()
    }

    @Memoize()
    public get settingsStore(): SettingsStore.Store {
        return useSettingsStore()
    }

    // todo: factory from userStore
    @Memoize()
    public get userMeStore(): UserStore.Store {
        return useUserStore("userMeStore")
    }

    // todo: factory
    @Memoize()
    public get userStore(): UserStore.Store {
        return useUserStore()
    }

    @Memoize()
    public get withdrawStore(): WithdrawStore.Store {
        return useWithdrawStore()
    }
}
