import type { IGameRaw, IReadAllGamesApiV1GamesGetParamsRaw } from "~/shared/api"
import type { IGame } from "~/entities/game"
import type { Writable } from "svelte/store"

import { get, writable } from "svelte/store"

import { api } from "~/shared/api"

export let games: Writable<IGame[]> = writable([])

export async function fetchGames(payload: IReadAllGamesApiV1GamesGetParamsRaw = { page: 0 }): Promise<IGame[]> {
    let gamesRaw: IGameRaw[] = await api.readAllGamesApiV1GamesGet(payload)
    games.set(gamesRaw as IGame[])

    return get<IGame[]>(games)
}
