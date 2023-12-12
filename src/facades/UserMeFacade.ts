import type { FacadeAbstract } from "~/abstract"
import type { StoreClient } from "~/clients"
import type { GameController, ItemController, UserController } from "~/controllers"

export class UserMeFacade implements FacadeAbstract {
    public constructor(
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
        private _userController: UserController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGames(),
            this._itemController.fetchItems({
                owner: this._storeClient.userMeStore.user.id,
            }),
            this._userController.fetchUser(this._storeClient.userMeStore.user.id),
        ])
    }
}
