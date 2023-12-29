import type { OrderInDBRaw } from "#schema/data-contracts"

import { ItemAttributes } from "~/dto/ItemAttributes"

export class Order implements OrderInDBRaw {
    @Expose()
    @Type((): typeof ItemAttributes => ItemAttributes)
    declare public attributes: ItemAttributes

    @Expose()
    declare public created: string

    @Expose()
    declare public game_id: string

    @Expose()
    declare public id: string

    @Expose()
    declare public owner_id: string
}
