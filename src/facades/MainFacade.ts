import type { FacadeAbstract } from "~/abstract"
import type { StoreClient } from "~/clients"
import type { GameController } from "~/controllers"

export class MainFacade implements FacadeAbstract {
    public constructor(
        private _storeClient: StoreClient,
        private _gameController: GameController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGames(),
        ])
    }

    public async dispose(): Promise<void> {
        await Promise.all([
            this._storeClient.gamesStore.$dispose(),
        ])
    }
}
