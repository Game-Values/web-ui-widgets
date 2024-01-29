export async function load({ locals }) {
    return {
        gamesPromise: locals.api.readAllGamesApiV1GamesGet({ page: 0 }),
    }
}
