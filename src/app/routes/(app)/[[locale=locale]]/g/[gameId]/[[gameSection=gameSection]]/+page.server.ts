import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"
import type { IGameDetailsPageData } from "~/pages/game"

import { useGame } from "~/entities/game"

export function load({ locals, params }): IGameDetailsPageData {
    let gamePromise: Promise<IGame> = locals.api.readGameApiV1GamesGameIdGet(params.gameId)
    let gameSectionsPromise: Promise<IGameSections> = (
        gamePromise.then((game: IGame): Promise<IGameSections> => (
            useGame(game).fetchGameSections()
        ))
    )

    return {
        pagePromise: Promise.all([gamePromise, gameSectionsPromise]),
    }
}
