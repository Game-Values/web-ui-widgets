import type { IGameRaw } from "~/shared/api"

export type TGroupedGames = Map<string, IGame[]>

export interface IGame extends Required<IGameRaw> {
    attributes: IGameAttributes
}

export interface IGameAttributes {
    // todo
}
