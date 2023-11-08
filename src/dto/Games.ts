import type { GameRaw } from "~/mocks/types"

import { CollectionAbstract } from "~/abstract"
import { Game } from "~/dto/Game"

export class Games extends CollectionAbstract<Game, GameRaw> {
    protected __Model: typeof Game = Game
}
