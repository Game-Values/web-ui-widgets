import type { ItemStore, SaleStore } from "~/types"

import { createStore } from "~/factories"
import { Item } from "~/dto";

export let useSaleStore: SaleStore.Store = createStore<
    SaleStore.Id,
    SaleStore.State,
    SaleStore.Getters,
    SaleStore.Actions
>("saleStore", (): SaleStore.Store => {
    let itemStore: ItemStore.Store = useItemStore("itemSaleStore")
    let saleForm: SaleStore.State["saleForm"] = reactive({
        attributes: {
            description: "",
            price: 0,
            server: "",
            type: useGet(useRoute().query, "itemType", ""),
        },
        gid: useGet(useRoute().query, "gameId", ""),
        name: "",
    })

    // todo: нужен ли item?
    watch(saleForm, (): void => (
        itemStore.setItemRaw(
            useMerge(
                itemStore.item,
                saleForm,
            ),
        )
    ), { deep: true, immediate: true })

    return mergeStores(itemStore, {
        saleForm,
    })
})
