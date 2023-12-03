import type { ItemRaw } from "#schema/data-contracts"
import type { ItemAttributes } from "~/dto/ItemAttributes"
import type { CombineKeys, ValueOf } from "~/types"

import { CollectionAbstract } from "~/abstract"
import { Item } from "~/dto/Item"

type LotsTableData = (
    Omit<Item, "attributes"> &
    Record<
        CombineKeys<"attributes", keyof ItemAttributes>,
        ValueOf<ItemAttributes>
    >
)

export class Items extends CollectionAbstract<Item, ItemRaw> {
    protected __Model: typeof Item = Item

    public get lotsTableData(): LotsTableData[] {
        return useMap<Item, LotsTableData>(this.items, (item: Item): LotsTableData => {
            let deepKeys: string[] = useMap(useKeys(item.attributes), (
                (key: string): string => `attributes.${key}`
            ))

            return assignDeepKeysAsCamelCase(item, ...deepKeys)
        })
    }
}
