import { FilterType, GameSection, GameSubsection } from "~/enums"

export type GameSectionsRaw = Record<GameSection, GameSubsectionsRaw>

export type GameSubsectionsRaw = Record<GameSubsection, GameSubsectionRaw>

export interface GameSubsectionRaw {
    buckets: string[]
    children: GameSubsectionRaw[]
    section: `${GameSubsection}.${string}`
    type: FilterType
}
