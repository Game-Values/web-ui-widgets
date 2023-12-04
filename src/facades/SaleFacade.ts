import type { FacadeAbstract } from "~/abstract"
import type { StoreClient } from "~/clients"
import type { GameController, SaleController } from "~/controllers"

export class SaleFacade implements FacadeAbstract {
    public constructor(
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _saleController: SaleController,
    ) {}

    public async bootstrap(): Promise<void> {
        await this._saleController.fetchSaleItem()
        await Promise.all([
            this._gameController.fetchGames(),
            this._saleController.fetchSaleGame(),
        ])
    }

    public async dispose(): Promise<void> {
        await Promise.all([
            this._storeClient.gameStore.$dispose(),
            this._storeClient.gamesStore.$dispose(),
            this._storeClient.itemStore.$dispose(),
            this._storeClient.saleStore.$dispose(),
        ])
    }
}
