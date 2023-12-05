import type { StoreClient } from "#build/clients"
import type { GameRaw } from "#schema/data-contracts"
import type { GameService } from "~/services"

export class GameController {
    public constructor(
        private _gameService: GameService,
        private _storeClient: StoreClient,
    ) {}

    public async fetchGame(gameId: string): Promise<void> {
        let gameRaw: GameRaw = await this._gameService.fetchGame(gameId)
        this._storeClient.gameStore.setGameRaw(gameRaw)
    }

    public async fetchGames(): Promise<void> {
        let gamesRaw: GameRaw[] = await this._gameService.fetchGames()
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }
}
