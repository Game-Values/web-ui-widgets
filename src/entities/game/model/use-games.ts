import type { IGame, IReadAllGamesApiV1GamesGetParams } from "$schema/api"

import { sortGames } from "~/entities/game"

import { useApi } from "$api"

type IUseGames = {
    fetchGames(payload?: IReadAllGamesApiV1GamesGetParams): Promise<IGame[]>
}

export function useGames(): IUseGames {
    let { readAllGamesApiV1GamesGet } = useApi()

    return {
        fetchGames: async (payload: IReadAllGamesApiV1GamesGetParams = { page: 0 }): Promise<IGame[]> => (
            readAllGamesApiV1GamesGet(payload).then(sortGames)
        ),
    }
}
