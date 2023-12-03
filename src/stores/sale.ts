import type { SaleStore } from "~/types"
import type { UnwrapRef } from "vue"
import type { ComputedRef, LocationQuery } from "vue-router"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useSaleStore: (storeId?: string) => SaleStore.Store = createStore<
    SaleStore.Id,
    SaleStore.State,
    SaleStore.Getters,
    SaleStore.Actions
>("saleStore", {
    getters: {
        sale(): Item {
            return createModel(Item, this.saleRaw)
        },
    },

    state: (): SaleStore.State => ({
        saleRaw: {
            attributes: {
                description: "",
                price: 0,
                server: "",
                type: "",
            },
            gid: "",
            name: "",
        }
    }),
})
