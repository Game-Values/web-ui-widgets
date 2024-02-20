import type { IGame } from "$schema/api"
import type { ILotNewListingPageData } from "~/pages/lot"

export function load({ locals }): ILotNewListingPageData {
    let gamesPromise: Promise<IGame[]> = locals.api.readAllGamesApiV1GamesGet({ page: 0 })

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
