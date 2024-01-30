import type { IGame } from "$api"

export type IGamesListPageData = {
    gamesPromise: Promise<IGame[]>
}
