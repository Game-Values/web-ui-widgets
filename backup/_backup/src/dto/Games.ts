import type { GameRaw } from "#schema/data-contracts"

import { CollectionAbstract } from "~/abstract"
import { Game } from "~/dto/Game"
import { createCollection } from "~/factories"

export class Games extends CollectionAbstract<Game, GameRaw> {
    protected get __Model(): typeof Game {
        return Game
    }

    public get groupedGames(): Map<string, Games> {
        let sortedGames: Game[] = useSortBy(this, ["name"])!

        return useReduce(sortedGames, (result: Map<string, Games>, game: Game): Map<string, Games> => {
            let firstChar: string = game.name.charAt(0)

            if (!result.get(firstChar))
                result.set(firstChar, createCollection(Games))

            result.get(firstChar)!.push(game)

            return result
        }, new Map())
    }
}
