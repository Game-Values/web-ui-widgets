import type { ApiAdapter } from "~/adapters"
import type { GameRaw } from "~/mocks/types"

export class GameService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async fetchGames(): Promise<GameRaw[]> {
        let gamesRaw: GameRaw[] = await this._apiAdapter.fetchMockJSON("games")

        return gamesRaw
    }
}
