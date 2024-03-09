import type { IGame, TGroupedGames } from "~/entities/game"

import { reduce, sortBy } from "lodash-es"

export function groupGames(games: IGame[]): TGroupedGames {
    let sortedGames: IGame[] = sortBy(games, "name")

    return reduce(sortedGames, (result: TGroupedGames, game: IGame): TGroupedGames => {
        let firstChar: string = game.name.charAt(0)

        if (!result.get(firstChar))
            result.set(firstChar, [])

        result.get(firstChar)!.push(game)

        return result
    }, new Map())
}
