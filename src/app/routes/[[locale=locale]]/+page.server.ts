import type { IGame } from "$schema/api"
import type { IGamesListPageData } from "~/pages/game"

export function load({ locals }): IGamesListPageData {
    let gamesPromise: Promise<IGame[]> = locals.api.readAllGamesApiV1GamesGet({ page: 0 })

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
