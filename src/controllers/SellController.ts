import type { RouterClient, StoreClient } from "~/clients"
import type { ItemRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { GameController, ItemController } from "~/controllers"

export class SellController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async createSellItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._apiAdapter.createItemApiV1ItemsItemPost(this._storeClient.sellStore.sellItem as never)
        this._storeClient.sellStore.setSellItemRaw(itemRaw)
    }

    public async deleteSellItem(): Promise<void> {
        await this._apiAdapter.deleteItemApiV1ItemsItemItemIdDelete(this._routerClient.getRouteParam("itemId"))
        this._storeClient.sellStore.$dispose()
    }

    public async editSellItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._apiAdapter.updateItemApiV1ItemsItemItemIdPut(
            this._routerClient.getRouteParam("itemId"),
            this._storeClient.sellStore.sellItem as never,
        )
        this._storeClient.sellStore.setSellItemRaw(itemRaw)
    }

    public async fetchSaleGame(): Promise<void> {
        await this._gameController.fetchGame(this._routerClient.getRouteParam("gameId"))
        this._storeClient.sellStore.updateSellItemRaw({
            gid: this._storeClient.gameStore.game.id,
        })
    }

    public async fetchSellItem(): Promise<void> {
        let itemId: string = this._routerClient.getRouteParam("itemId")
        if (itemId)
            await this._itemController.fetchItem(itemId)

        this._storeClient.sellStore.updateSellItemRaw({
            attributes: {
                type: this._routerClient.getRouteParam("gameSection"),
            },
        })
    }
}
