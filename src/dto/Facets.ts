import type { FacetedSearchApiV1ItemsSearchGameIdPostDataRaw } from "#schema/data-contracts"

import { ItemType } from "~/enums"

export class Facets implements FacetedSearchApiV1ItemsSearchGameIdPostDataRaw {
    @Expose()
    declare public [ItemType.ACCOUNTS]: number

    @Expose()
    declare public [ItemType.GOLD]: number

    @Expose()
    declare public [ItemType.ITEMS]: number

    @Expose()
    declare public [ItemType.SERVICES]: number
}
