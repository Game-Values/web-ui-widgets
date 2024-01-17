import type { ChatStore } from "~/stores/chat"
import type { FacetsStore } from "~/stores/facets"
import type { GameStore } from "~/stores/lot"
import type { GamesStore } from "~/stores/lot"
import type { ItemStore } from "~/stores/header"
import type { ItemsStore } from "~/stores/items"
import type { OrderStore } from "~/stores/order"
import type { SellStore } from "~/stores/sell"
import type { SeoStore } from "~/stores/seo"
import type { SettingsStore } from "~/stores/settings"
import type { UserStore } from "~/stores/profile"
import type { WithdrawStore } from "~/stores/withdraw"

// todo: stores typing
export class StoreClient {
    @Memoize()
    public get chatStore(): ChatStore.Store {
        return useChatStore()
    }

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
    public get facetsStore(): FacetsStore.Store {
        return useFacetsStore()
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
