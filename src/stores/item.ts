import type { ItemRaw } from "#schema/data-contracts"
import type { ItemStore } from "~/types"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useItemStore: (storeId?: string) => ItemStore.Store = createStore<
    ItemStore.Id,
    ItemStore.State,
    ItemStore.Getters,
    ItemStore.Actions
>("itemStore", {
    actions: {
        setItemRaw(itemRaw: ItemRaw): void {
            this.itemRaw = itemRaw
        },
    },

    getters: {
        item(): Item {
            return createModel(Item, this.itemRaw)
        },
    },

    state: (): ItemStore.State => ({
        itemRaw: {},
    }),
})
