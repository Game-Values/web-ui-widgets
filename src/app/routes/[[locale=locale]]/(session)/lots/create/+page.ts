import type { IGame } from "$schema/api"
import type { ILotCreatePageData } from "~/pages/lot"

import { sortGames } from "~/entities/game"

import { useApi } from "$api"

export async function load({ fetch, parent }): Promise<ILotCreatePageData> {
    await parent()

    let { readAllGamesApiV1GamesGet } = useApi({ customFetch: fetch })

    let gamesPromise: Promise<IGame[]> = readAllGamesApiV1GamesGet({ page: 0 }).then(sortGames)

    return {
        pagePromise: Promise.all([gamesPromise]),
    }
}
