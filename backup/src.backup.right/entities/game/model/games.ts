import type { IGame, IReadAllGamesApiV1GamesGetParams } from "~/shared/lib"

import { api } from "~/shared/api"

export function getGamesList(
    params: IReadAllGamesApiV1GamesGetParams = {
        page: 0,
    },
): Promise<IGame[]> {
    return api.readAllGamesApiV1GamesGet(params)
}
