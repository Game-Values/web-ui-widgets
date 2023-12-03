import type { RouterClient, StoreClient } from "#build/clients"
import type { ItemRaw } from "#schema/data-contracts"
import type { GameController, ItemController } from "~/controllers"
import type { ItemService } from "~/services"

export class SaleController {
    public constructor(
        private _itemService: ItemService,
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async createSaleItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._itemService.createItem(this._storeClient.saleStore.saleItem)
        this._storeClient.saleStore.setSaleItemRaw(itemRaw)
    }

    public async deleteSaleItem(): Promise<void> {
        await this._itemService.deleteItem(this._routerClient.getRouteParam("itemId"))
        this._storeClient.saleStore.$dispose()
    }

    public async editSaleItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._itemService.editItem(
            this._routerClient.getRouteParam("itemId"),
            this._storeClient.saleStore.saleItem,
        )
        this._storeClient.saleStore.setSaleItemRaw(itemRaw)
    }

    public async fetchSaleGame(): Promise<void> {
        let gameId: string = (
            this._storeClient.saleStore.saleItem.gid ||
            this._routerClient.getRouteQuery("gameId")
        )
        if (gameId)
            await this._gameController.fetchGame(gameId)

        this._storeClient.saleStore.updateSaleItemRaw({
            gid: (
                this._storeClient.gameStore.game.id ||
                gameId
            ),
        })
    }

    public async fetchSaleItem(): Promise<void> {
        let itemId: string = this._routerClient.getRouteParam("itemId")
        if (itemId)
            await this._itemController.fetchItem(itemId)

        this._storeClient.saleStore.setSaleItemRaw(this._storeClient.itemStore.itemRaw)
    }
}
