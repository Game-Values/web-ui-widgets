import type { GameSubsection as _GameSubsection, FilterType } from "~/enums"
import type { GameSubsectionRaw } from "~/types"

export class GameSubsection implements GameSubsectionRaw {
    @Expose()
    declare public buckets: string[]

    @Expose()
    declare public children: GameSubsectionRaw[]

    @Expose()
    declare public name: _GameSubsection

    @Expose()
    declare public section: `${_GameSubsection}.${string}`

    @Expose()
    declare public type: FilterType
}
