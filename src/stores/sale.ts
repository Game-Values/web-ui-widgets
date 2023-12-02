import type { SaleStore } from "~/types"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useSaleStore: (storeId?: string) => SaleStore.Store = createStore<
    SaleStore.Id,
    SaleStore.State,
    SaleStore.Getters,
    SaleStore.Actions
>("saleStore", {
    getters: {
        saleItem(): Item {
            return createModel(Item, this.saleForm)
        },
    },

    state: (): SaleStore.State => ({
        saleForm: {
            attributes: {
                description: "",
                price: 0,
                server: "",
                type: useGet(useRoute().query, "itemType", ""),
            },
            gid: useGet(useRoute().query, "gameId", ""),
            name: "",
        },
    }),
})
