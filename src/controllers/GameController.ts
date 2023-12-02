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
        // todo: (?)
        let gamesRawPromise: GameRaw[][] = await Promise.all([
            this._gameService.fetchGames({ page: 0 }),
            this._gameService.fetchGames({ page: 1 }),
        ])

        let gamesRaw: GameRaw[] = useFlatten(gamesRawPromise)
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }
}
