import { FilterType, GameSection, GameSubsection } from "~/enums"

export type GameSectionsRaw = Record<GameSection, GameSubsectionsRaw>

export type GameSubsectionsRaw = Record<GameSubsection, GameSubsections>

export interface GameSubsections {
    buckets: string[]
    children: GameSubsections[]
    section: `${GameSubsection}.${string}`
    type: FilterType
}
