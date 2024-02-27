import type { IGame } from "$schema/api"
import type { IGamesListPageData } from "~/pages/game"

import { sortGames } from "~/entities/game"

import { useApi } from "$api"

export function load({ fetch }): IGamesListPageData {
    let { readAllGamesApiV1GamesGet } = useApi({ customFetch: fetch })

    let gamesPromise: Promise<IGame[]> = readAllGamesApiV1GamesGet({ page: 0 }).then(sortGames)

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
