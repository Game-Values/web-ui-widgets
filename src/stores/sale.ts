import type { ItemRaw } from "#schema/data-contracts"
import type { SaleStore } from "~/types"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useSaleStore: (storeId?: string) => SaleStore.Store = createStore<
    SaleStore.Id,
    SaleStore.State,
    SaleStore.Getters,
    SaleStore.Actions
>("saleStore", {
    actions: {
        setSaleItemRaw(saleItemRaw: ItemRaw): void {
            this.saleItemRaw = saleItemRaw
        },

        updateSaleItemRaw(saleItemRaw: ItemRaw): void {
            useMerge(this.saleItemRaw, saleItemRaw)
        },
    },

    getters: {
        saleItem(): Item {
            return createModel(Item, this.saleItemRaw)
        },
    },

    state: (): SaleStore.State => ({
        saleItemRaw: {
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
