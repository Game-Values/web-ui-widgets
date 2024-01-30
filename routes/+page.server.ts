import type { IGamesListPageData } from "~/pages/games-list"

export function load({ locals }): IGamesListPageData {
    return {
        gamesPromise: locals.api.readAllGamesApiV1GamesGet({ page: 0 }),
    }
}
