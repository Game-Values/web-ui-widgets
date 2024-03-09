import type { IGame } from "$schema/api"
import type { IGamesFavoritesPageData } from "~/pages/game"

import { sortGames } from "~/entities/game"

export function load({ locals }): IGamesFavoritesPageData {
    let gamesPromise: Promise<IGame[]> = (
        locals.api.readAllGamesApiV1GamesGet({ page: 0 }).then(sortGames)
    )

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
