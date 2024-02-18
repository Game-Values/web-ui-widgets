import type { IGame } from "$schema/api"
import type { IGameDetailsPageData } from "~/pages/game"

export function load({ locals, params }): IGameDetailsPageData {
    let gamePromise: Promise<IGame> = locals.api.readGameApiV1GamesGameIdGet(params.gameId)

    return {
        pagePromise: Promise.all([gamePromise]),
    }
}
