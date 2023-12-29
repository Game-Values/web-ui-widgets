import type { OrderCurrencyRaw } from "#schema/data-contracts"
import type { GameSection } from "~/enums"

export class ItemAttributes {
    @Expose()
    declare public amount: number

    @Expose()
    declare public currency: OrderCurrencyRaw

    @Expose()
    declare public description: string

    @Expose()
    declare public price: number

    @Expose()
    declare public server: string

    @Expose()
    declare public type: GameSection
}
