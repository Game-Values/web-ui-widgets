import type { GameSection } from "~/entities/game"
import type { IGameRaw } from "~/shared/api"

export type TGroupedGames = Map<string, IGame[]>

export interface IGame extends Required<IGameRaw> {
    attributes: IGameAttributes
}

export interface IGameAttributes {
    description: string
    sections: IGameSection[]
}

export interface IGameSection {
    count: number
    name: GameSection
}
