import type { StoreClient } from "#build/clients"
import type { GameRaw } from "#schema/data-contracts"
import type { Game } from "~/dto"
import type { GameService } from "~/services"

import { promiseTimeout } from "@vueuse/core"

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
        let gamesRaw: GameRaw[] = await this._gameService.fetchGames({ page: 0 })
        this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }

    // todo: mv to service
    public async likeGame(game: Game): Promise<void> {
        // await promiseTimeout(500)
        //
        // let gamesRaw: GameRaw[] = this._storeClient.gamesStore.games.items.map((item: Game) => {
        //     if (game.slug === item.slug)
        //         return useAssign(item, {
        //             liked: !item.liked,
        //         })
        //
        //     return item
        // })
        //
        // this._storeClient.gamesStore.setGamesRaw(gamesRaw)
    }
}
