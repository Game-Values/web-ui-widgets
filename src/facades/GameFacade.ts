import type { FacadeAbstract } from "~/abstract"
import type { GameController, ItemController } from "~/controllers"

export class GameFacade implements FacadeAbstract {
    public constructor(
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async bootstrap(): Promise<void> {
        await Promise.all([
            this._gameController.fetchGame(useRoute().params.gameId),
            this._itemController.fetchGameItems(useRoute().params.gameId),
        ])
    }
}
