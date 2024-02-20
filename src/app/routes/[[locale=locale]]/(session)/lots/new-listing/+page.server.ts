import type { IGame } from "$schema/api"
import type { ILotNewListingPageData } from "~/pages/lot"

import { sortGames } from "~/entities/game"

export function load({ locals }): ILotNewListingPageData {
    let gamesPromise: Promise<IGame[]> = locals.api.readAllGamesApiV1GamesGet({ page: 0 }).then(sortGames)

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
