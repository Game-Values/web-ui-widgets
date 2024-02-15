import type { FacetedSearchApiV1ItemsSearchGameIdPostDataRaw } from "#schema/data-contracts"

import { GameSection } from "~/enums"

export class Facets implements FacetedSearchApiV1ItemsSearchGameIdPostDataRaw {
    @Expose()
    declare public [GameSection.ACCOUNTS]: number

    @Expose()
    declare public [GameSection.ACHIEVEMENTS]: number

    @Expose()
    declare public [GameSection.BOOSTING]: number

    @Expose()
    declare public [GameSection.COACHING]: number

    @Expose()
    declare public [GameSection.COINS]: number

    @Expose()
    declare public [GameSection.OTHER]: number

    @Expose()
    declare public [GameSection.PRIME_GAMING]: number

    @Expose()
    declare public [GameSection.TOP_UP]: number

    @Expose()
    declare public [GameSection.TWITCH_DROPS]: number
}
