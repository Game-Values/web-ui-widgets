import type { GameSubsection as _GameSubsection, FilterType } from "~/enums"
import type { GameSubsections } from "~/types"

export class GameSubsection implements GameSubsections {
    @Expose()
    declare public buckets: string[]

    @Expose()
    declare public children: GameSubsections[]

    @Expose()
    declare public section: `${_GameSubsection}.${string}`

    @Expose()
    declare public type: FilterType
}
