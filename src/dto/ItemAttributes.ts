import { ItemType } from "~/enums"

export class ItemAttributes {
    @Expose()
    declare public count: number

    @Expose()
    declare public description: string

    @Expose()
    declare public price: number

    @Expose()
    declare public server: string

    @Expose()
    @Type((): typeof ItemType => ItemType)
    declare public type: ItemType
}
