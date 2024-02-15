import type { IGameDetailsPageData } from "~/pages/game"

export function load({ locals, params }): IGameDetailsPageData {
    return {
        gamePromise: locals.api.readGameApiV1GamesGameIdGet(params.gameId),
    }
}
