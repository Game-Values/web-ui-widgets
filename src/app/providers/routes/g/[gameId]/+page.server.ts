import type { IGame } from "~/entities/game"
import type { IGamePageData } from "~/pages/game"

import { fetchGame } from "~/entities/game"

export async function load({ params }): Promise<IGamePageData> {
    let game: IGame = await fetchGame(params.gameId)

    return {
        game,
    }
}
