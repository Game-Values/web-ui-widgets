import type { IReadAllGamesApiV1GamesGetParamsRaw } from "~/shared/api"
import type { IGame } from "~/entities/game"

import { api } from "~/shared/api"

export function fetchGame(gameId: string): Promise<IGame> {
    return api.readGameApiV1GamesGameIdGet(gameId) as Promise<IGame>
}

export function fetchGames(payload: IReadAllGamesApiV1GamesGetParamsRaw = { page: 0 }): Promise<IGame[]> {
    return api.readAllGamesApiV1GamesGet(payload) as Promise<IGame[]>
}
