import type { IGame, TGroupedGames } from "~/entities/lot"

export function groupGames(games: IGame[]): TGroupedGames {
    let sortedGames: IGame[] = useSortBy(games, "name")

    return useReduce(sortedGames, (result: TGroupedGames, game: IGame): TGroupedGames => {
        let firstChar: string = game.name.charAt(0)

        if (!result.get(firstChar))
            result.set(firstChar, [])

        result.get(firstChar)!.push(game)

        return result
    }, new Map())
}
