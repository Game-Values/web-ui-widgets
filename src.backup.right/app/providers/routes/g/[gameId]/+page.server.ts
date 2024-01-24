import type { IGameDetailsPageData } from "~/pages/game-details"
import type { IGame } from "~/shared/model"

import { getGameById } from "~/entities/game"

export async function load({ params }): Promise<IGameDetailsPageData> {
    let game: IGame = await getGameById(params.gameId)

    return {
        game,
    }
}
