import type { IGame } from "$schema/api"
import type { IGameSections } from "~/entities/game"
import type { IGameDetailsPageData } from "~/pages/game"

import { useGame } from "~/entities/game"

import { useApi } from "$api"

export function load({ fetch, params }): IGameDetailsPageData {
    let { readGameApiV1GamesGameIdGet } = useApi({ customFetch: fetch })

    let gamePromise: Promise<IGame> = readGameApiV1GamesGameIdGet(params.gameId)
    let gameSectionsPromise: Promise<IGameSections> = (
        gamePromise.then((game: IGame): Promise<IGameSections> => (
            useGame(game).fetchGameSections()
        ))
    )

    return {
        pagePromise: Promise.all([gamePromise, gameSectionsPromise]),
    }
}
