import type { ItemRaw } from "#schema/data-contracts"
import type { ItemsStore } from "~/types"

import { Items } from "~/dto"
import { createCollection, createStore } from "~/factories"

export let useItemsStore: (storeId?: string) => ItemsStore.Store = createStore<
    ItemsStore.Id,
    ItemsStore.State,
    ItemsStore.Getters,
    ItemsStore.Actions
>("itemsStore", {
    actions: {
        setItemsRaw(itemsRaw: ItemRaw[]): void {
            this.itemsRaw = itemsRaw
        },
    },

    getters: {
        items(): Items {
            return createCollection(Items, this.itemsRaw)
        },
    },

    state: (): ItemsStore.State => ({
        itemsRaw: [],
    }),
})
