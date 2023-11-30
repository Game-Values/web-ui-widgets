import type { GameRaw, ReadAllGamesApiV1GamesGetParamsRaw } from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class GameService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async fetchGame(gameId: string): Promise<GameRaw> {
        let { data }: HttpResponse<GameRaw> = await this._apiAdapter.readGameApiV1GamesGameIdGet(gameId)

        return data
    }

    public async fetchGames(payload: ReadAllGamesApiV1GamesGetParamsRaw = { page: 0 }): Promise<GameRaw[]> {
        let { data }: HttpResponse<GameRaw[]> = await this._apiAdapter.readAllGamesApiV1GamesGet(payload)

        return data
    }
}
