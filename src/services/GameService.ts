import type { ApiAdapter } from "~/adapters"
import type { DTOClient } from "~/clients"
import type { GameRaw } from "~/mocks/types"

import { Games } from "~/dto"

export class GameService {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _dtoAdapter: DTOClient,
    ) {}

    public async fetchGames(): Promise<Games> {
        let games: GameRaw[] = await this._apiAdapter.fetchMockJSON("games")

        return this._dtoAdapter.createCollection<Games, GameRaw>(Games, games)
    }
}
