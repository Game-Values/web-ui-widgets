import type { IGame } from "~/entities/game"
import type { IMainPageData } from "~/pages/main"

import { fetchGames } from "~/entities/game"

export async function load(): Promise<IMainPageData> {
    let games: IGame[] = await fetchGames()

    return {
        games,
    }
}
