import type { FacadeAbstract } from "~/abstract"
import type { RouterClient, StoreClient } from "~/clients"
import type { GameController, ItemController } from "~/controllers"

export class BuyFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.itemStore.$reset()
        this._storeClient.orderStore.$reset()

        await Promise.all([
            this._gameController.fetchGame(this._routerClient.getRouteParam("gameId")),
            this._itemController.fetchItem(this._routerClient.getRouteParam("itemId")),
        ])
    }
}
