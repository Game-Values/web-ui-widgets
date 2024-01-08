import type { StoreClient } from "~/clients"
import type { GameRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { GameSectionsRaw } from "~/types"

export class GameController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async fetchGame(gameId: string): Promise<void> {
        let gameRaw: GameRaw = await this._apiAdapter.readGameApiV1GamesGameIdGet(gameId)
        this._storeClient.gameStore.setGameRaw(gameRaw)
    }

    public async fetchGames(): Promise<void> {
        let gamesRaw: GameRaw[] = await this._apiAdapter.readAllGamesApiV1GamesGet({
            page: 0, // todo:
        })
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }

    public async fetchGameSections(): Promise<void> {
        let sectionsRaw: GameSectionsRaw = (
            await this._apiAdapter.fetchJSON<GameSectionsRaw>(this._storeClient.gameStore.game.jsonFilename)
        )
        this._storeClient.gameStore.setGameSectionsRaw(sectionsRaw)
    }
}
