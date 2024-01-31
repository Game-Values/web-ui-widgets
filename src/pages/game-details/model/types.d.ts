import type { IGame } from "$api"

export type IGameDetailPageData = {
    gamePromise: Promise<IGame>
}
