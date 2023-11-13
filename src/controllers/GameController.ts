import type { StoreClient } from "#build/clients"
import type { Game } from "~/types"
import type { GameRaw } from "~/mocks/types"
import type { GameService } from "~/services"

import { promiseTimeout } from "@vueuse/core"

export class GameController {
    public constructor(
        private _gameService: GameService,
        private _storeClient: StoreClient,
    ) {}

    public async fetchGames(): Promise<void> {
        let gamesRaw: GameRaw[] = await this._gameService.fetchGames()
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }

    public async likeGame(game: Game): Promise<void> {
        await promiseTimeout(500)
        await this.fetchGames()
    }
}
