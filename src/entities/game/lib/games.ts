import type { IGame } from "$schema/api"

import { sortBy } from "lodash-es"

type TGamesGroup = Map<string, IGame[]>

export function findGameById(games: IGame[], gameId: string): IGame | undefined {
    return games.find((game: IGame): boolean => game.id === gameId)
}

export function mapGamesIds(games: IGame[]): string[] {
    return games.map((game: IGame): string => (game.gid || game.id)!)
}

export function groupGames(games: IGame[]): TGamesGroup {
    let gamesWithFiltersAneSections: string[] = [
        "Apex Legends",
    ]

    return games.reduce((result: TGamesGroup, game: IGame): TGamesGroup => {
        // TODO:
        if (!gamesWithFiltersAneSections.includes(game.name!))
            return result

        let firstChar: string = game.name!.charAt(0)

        if (!result.get(firstChar))
            result.set(firstChar, [])

        result.get(firstChar)!.push(game)

        return result
    }, new Map<string, IGame[]>())
}

export function sortGames(games: IGame[]): IGame[] {
    return sortBy(games, "name")
}
