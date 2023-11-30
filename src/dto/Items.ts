import type { ItemRaw } from "#schema/data-contracts"

import { CollectionAbstract } from "~/abstract"
import { Item } from "~/dto/Item"

export class Items extends CollectionAbstract<Item, ItemRaw> {
    protected __Model: typeof Item = Item
}
