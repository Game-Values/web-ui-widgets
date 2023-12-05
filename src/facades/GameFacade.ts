import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { GameController, ItemController } from "~/controllers"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGame(this._routerClient.getRouteParam("gameId")),
            this._itemController.fetchGameItems(this._routerClient.getRouteParam("gameId")),
        ])
    }
}
