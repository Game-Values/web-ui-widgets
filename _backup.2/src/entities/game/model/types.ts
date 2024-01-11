import type { IGameRaw } from "@/schema/data-contracts"

export type TGroupedGames = Map<string, IGame[]>

export interface IGame extends Required<IGameRaw> {
    attributes: IGameAttributes
}

export interface IGameAttributes {
    description: string
}
