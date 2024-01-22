import type { IGameRaw, IReadAllGamesApiV1GamesGetParamsRaw } from "@/schema/data-contracts"
import type { IGame } from "~/entities/lot"
import type { UnwrapRef } from "vue"

import { api } from "~/shared/httpInstance"
import { refreshArray } from "~/shared/lib"

export let useGamesModel = defineStore("gamesModel", () => {
    let games: UnwrapRef<IGame[]> = reactive([])

    async function fetchGames(payload: IReadAllGamesApiV1GamesGetParamsRaw): Promise<void> {
        let gamesRaw: IGameRaw[] = await api.readAllGamesApiV1GamesGet(payload)
        refreshArray<IGameRaw[]>(games, gamesRaw)
    }

    return {
        fetchGames,
        games,
    }
})