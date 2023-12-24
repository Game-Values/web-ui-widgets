import type { ItemRaw } from "#schema/data-contracts"
import type { DefineStore } from "~/types"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export namespace ItemStore {
    export type Id = "itemStore"

    export type State = {
        itemRaw: ItemRaw
    }

    export type Getters = {
        item: () => Item
    }

    export type Actions = {
        setItemRaw: (itemRaw: ItemRaw) => void
    }

    export type Store = DefineStore<Id, State, Getters, Actions>
}

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
