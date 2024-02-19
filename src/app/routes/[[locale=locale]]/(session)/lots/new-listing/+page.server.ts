import type { IGame } from "$schema/api"
import type { IRouteQuery } from "$types"
import type { ILotNewListingPageData } from "~/pages/lot"

export function load({ locals, url }): ILotNewListingPageData {
    let { gameId }: IRouteQuery = url.searchParams.toJSON()

    let gamePromise: Promise<IGame | undefined> = (
        gameId
            ? locals.api.readGameApiV1GamesGameIdGet(gameId)
            : Promise.resolve(undefined)
    )

    return {
        pagePromise: Promise.all([gamePromise]),
    }
}
