import type { FacadeAbstract } from "~/abstract"
import type { GameController, SaleController } from "~/controllers"

export class SaleFacade implements FacadeAbstract {
    public constructor(
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
}
