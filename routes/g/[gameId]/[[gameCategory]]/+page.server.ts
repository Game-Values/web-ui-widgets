import type { IGameDetailPageData } from "../../../src/pages/game-details"

export function load({ locals, params }): IGameDetailPageData {
    return {
        gamePromise: locals.api.readGameApiV1GamesGameIdGet(params.gameId),
    }
}
