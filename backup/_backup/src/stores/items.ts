import type { ItemRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Items } from "~/dto"
import { createCollection, createStore } from "~/factories"

export namespace ItemsStore {
    export type Id = "itemsStore"

    export type State = {
        itemsRaw: ItemRaw[]
    }

    export type Getters = {
        items: () => Items
    }

    export type Actions = {
        setItemsRaw: (itemsRaw: ItemRaw[]) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
