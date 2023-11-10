import type { GameRaw } from "~/mocks/types"

import { CollectionAbstract } from "~/abstract"
import { Game } from "~/dto/Game"

export class Games extends CollectionAbstract<Game, GameRaw> {
    protected __Model: typeof Game = Game

    // Sort games based on their names
    private get _sortedItems(): Game[] {
        return this.items.sort((a: Game, b: Game): number => (
            a.name.localeCompare(b.name)
        ))
    }

    // Group games by the first character of their names
    public get groupedGames(): Map<string, Games> {
        let groupedGames: Map<string, Games> = new Map()

        this._sortedItems.forEach((game: Game): void => {
            let firstChar: string = game.name.charAt(0)

            if (!groupedGames.has(firstChar))
                groupedGames.set(firstChar, new Games([]))

            groupedGames.get(firstChar)!.add(game)
        })

        return groupedGames
    }
}
