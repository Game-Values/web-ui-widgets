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
        sale(): Item {
            return createModel(Item, this.saleRaw)
        },
    },

    state: (): SaleStore.State => {
        let { routerClient } = useClients()

        return {
            saleRaw: {
                attributes: {
                    description: "",
                    price: 0,
                    server: "",
                    type: routerClient.getRouteQuery("itemType"),
                },
                gid: routerClient.getRouteQuery("gameId"),
                name: "",
            },
        }
    },
})
