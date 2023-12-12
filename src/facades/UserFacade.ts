import type { FacadeAbstract } from "~/abstract"
import type { RouterClient } from "~/clients"
import type { GameController, ItemController, UserController } from "~/controllers"

export class UserFacade implements FacadeAbstract {
    public constructor(
        private _routerClient: RouterClient,
        private _gameController: GameController,
        private _itemController: ItemController,
        private _userController: UserController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGames(),
            this._itemController.fetchItems({
                owner: this._routerClient.getRouteParam("userId"),
            }),
            this._userController.fetchUser(this._routerClient.getRouteParam("userId")),
        ])
    }
}
