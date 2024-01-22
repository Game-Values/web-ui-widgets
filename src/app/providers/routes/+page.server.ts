import type { IGamesListPageData } from "~/pages/games-list"
import type { IGame } from "~/shared/model"

import { getGamesList } from "~/entities/game"

export async function load(): Promise<IGamesListPageData> {
    let games: IGame[] = await getGamesList()

    return {
        games,
    }
}
