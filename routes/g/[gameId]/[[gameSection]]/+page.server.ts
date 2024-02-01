import type { IGameDetailPageData } from "~/pages/game-details"

export function load({ locals, params }): IGameDetailPageData {
    return {
        gamePromise: locals.api.readGameApiV1GamesGameIdGet(params.gameId),
    }
}
