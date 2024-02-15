import type { IGame } from "$schema/api"

export function mapGamesIds(games: IGame[]): string[] {
    return games.map((game: IGame): string => (game.gid || game.id)!)
}
