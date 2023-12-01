import type { FacadeAbstract } from "~/abstract"
import type { StoreClient } from "~/clients"
import type { GameController } from "~/controllers"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
        private _storeClient: StoreClient,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.gameStore.$dispose()

        await this._gameController.fetchGame(useRoute().params.gameId)
    }
}
