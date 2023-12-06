import type { ItemRaw } from "#schema/data-contracts"
import type { SellStore } from "~/types"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useSellStore: (storeId?: string) => SellStore.Store = createStore<
    SellStore.Id,
    SellStore.State,
    SellStore.Getters,
    SellStore.Actions
>("sellStore", {
    actions: {
        setSellItemRaw(sellItemRaw: ItemRaw): void {
            this.sellItemRaw = sellItemRaw
        },

        updateSellItemRaw(sellItemRaw: ItemRaw): void {
            useMerge(this.sellItemRaw, sellItemRaw)
        },
    },

    getters: {
        sellItem(): Item {
            return createModel(Item, this.sellItemRaw)
        },
    },

    state: (): SellStore.State => ({
        sellItemRaw: {
            attributes: {
                description: "",
                price: "",
                server: "",
                type: "",
            },
            gid: "",
            name: "",
        },
    }),
})
