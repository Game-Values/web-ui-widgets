import type { IGame } from "$schema/api"
import type { ILotCreatePageData } from "~/pages/lot"

import { sortGames } from "~/entities/game"

export async function load({ locals }): Promise<ILotCreatePageData> {
    let gamesPromise: Promise<IGame[]> = (
        locals.api.readAllGamesApiV1GamesGet({ page: 0 }).then(sortGames)
    )

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
