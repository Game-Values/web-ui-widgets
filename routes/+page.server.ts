export async function load({ locals }) {
    return {
        games: locals.api.readAllGamesApiV1GamesGet({
            page: 0,
        }),
    }
}
