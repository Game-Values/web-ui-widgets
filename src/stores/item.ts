import type { ItemRaw } from "#schema/data-contracts"
import type { ItemStore } from "~/types"
import type { ComputedRef, Ref } from "vue"

import { Item } from "~/dto"
import { createModel, createStore } from "~/factories"

export let useItemStore: ItemStore.Store = createStore<
    ItemStore.Id,
    ItemStore.State,
    ItemStore.Getters,
    ItemStore.Actions
>("itemStore", (): ItemStore.Store => {
    let itemRaw: Ref<ItemRaw> = ref({})
    let item: ComputedRef<Item> = computed((): Item => createModel(Item, getRef(itemRaw)))

    function setItemRaw(raw: ItemRaw): void {
        setRef(itemRaw, raw)
    }

    return {
        item,
        setItemRaw,
    }
})
