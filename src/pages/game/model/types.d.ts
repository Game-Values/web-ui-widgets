import type { IGame } from "$schema/api"

export interface IGamesListPageData {
    gamesPromise: Promise<IGame[]>
}

export interface IGameDetailsPageData {
    gamePromise: Promise<IGame>
}
