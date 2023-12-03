import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { GameController, ItemController } from "~/controllers"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async bootstrap(): Promise<void> {
        let gameId: string = this._routerClient.getRouteParam("gameId")

        this._storeClient.gameStore.$dispose()
        this._storeClient.itemsStore.$dispose()

        await Promise.all([
            this._gameController.fetchGame(gameId),
            this._itemController.fetchGameItems(gameId),
        ])
    }
}
