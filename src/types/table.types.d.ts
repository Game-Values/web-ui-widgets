import type { Item, ItemAttributes } from "~/dto"
import type { CombineKeys, ValueOf } from "~/types"

export type LotsTable = (
    Omit<Item, "attributes"> &
    Record<
        CombineKeys<"attributes", keyof ItemAttributes>,
        ValueOf<ItemAttributes>
    >
)

export type OrdersTable = (
    Omit<Item, "attributes"> &
    Record<
        CombineKeys<"attributes", keyof ItemAttributes>,
        ValueOf<ItemAttributes>
    >
)
