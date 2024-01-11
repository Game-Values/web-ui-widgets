import type { IGameRaw } from "~/shared/api"
import type { IGame } from "~/entities/game"
import type { Writable } from "svelte/store"

import { get, writable } from "svelte/store"

import { api } from "~/shared/api"

export let game: Writable<IGame> = writable(Object.create(null))

export async function fetchGame(gameId: string): Promise<IGame> {
    let gameRaw: IGameRaw = await api.readGameApiV1GamesGameIdGet(gameId)
    game.set(gameRaw as IGame)

    return get<IGame>(game)
}
