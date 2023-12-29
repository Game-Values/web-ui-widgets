import type { FacadeAbstract } from "~/abstract"
import type { StoreClient } from "~/clients"
import type { GameController, SellController } from "~/controllers"

export class SellFacade implements FacadeAbstract {
    public constructor(
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _sellController: SellController,
    ) {}

    public async bootstrap(): Promise<void> {
        this._storeClient.sellStore.$reset()

        await this._sellController.fetchSellItem()
        await Promise.all([
            this._gameController.fetchGames(),
            this._sellController.fetchSaleGame(),
        ])
    }
}
