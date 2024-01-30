import type { IGame } from "$api"

import { sortBy } from "lodash-es"

type TGamesGroup = Map<string, IGame[]>

export function groupGames(games: IGame[]): TGamesGroup {
    let sortedGames: IGame[] = sortBy(games, "name")

    return sortedGames.reduce((result: TGamesGroup, game: IGame): TGamesGroup => {
        let firstChar: string = game.name!.charAt(0)

        if (!result.get(firstChar))
            result.set(firstChar, [])

        result.get(firstChar)!.push(game)

        return result
    }, new Map<string, IGame[]>())
}
