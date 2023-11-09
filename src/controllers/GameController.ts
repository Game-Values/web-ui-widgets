import type { StoreClient } from "#build/clients"
import type { GameRaw } from "~/mocks/types"
import type { GameService } from "~/services"

export class GameController {
    public constructor(
        private _gameService: GameService,
        private _storeClient: StoreClient,
    ) {}

    public async fetchGames(): Promise<void> {
        let gamesRaw: GameRaw[] = await this._gameService.fetchGames()

        console.log(this._storeClient.gamesStore.setGamesRaw)
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }
}
