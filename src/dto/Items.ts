import type { ItemRaw } from "#schema/data-contracts"
import type { LotsTable } from "~/types"

import { CollectionAbstract } from "~/abstract"
import { Item } from "~/dto/Item"
import { createCollection } from "~/factories"

export class Items extends CollectionAbstract<Item, ItemRaw> {
    protected get __Model(): typeof Item {
        return Item
    }

    public get groupedLots(): Map<string, Items> {
        let sortedItems: Item[] = useSortBy(this, ["name"])!

        return useReduce(sortedItems, (result: Map<string, Items>, item: Item): Map<string, Items> => {
            if (!result.get(item.gid))
                result.set(item.gid, createCollection(Items))

            result.get(item.gid)!.push(item)

            return result
        }, new Map())
    }

    public get lotsTableData(): LotsTable[] {
        return useMap<Item, LotsTable>(this, (item: Item): LotsTable => {
            let deepKeys: string[] = useMap(useKeys(item.attributes), (
                (key: string): string => `attributes.${key}`
            ))

            return assignDeepKeysAsCamelCase(item, ...deepKeys)
        })
    }
}
