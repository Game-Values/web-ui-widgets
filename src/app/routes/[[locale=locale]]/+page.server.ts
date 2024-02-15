import type { IGamesListPageData } from "~/pages/game"

export function load({ locals }): IGamesListPageData {
    return {
        gamesPromise: locals.api.readAllGamesApiV1GamesGet({ page: 0 }),
    }
}
