import type { RouterClient, StoreClient } from "#build/clients"
import type { ItemRaw } from "#schema/data-contracts"
import type { GameController, ItemController } from "~/controllers"
import type { ItemService } from "~/services"

export class SellController {
    public constructor(
        private _itemService: ItemService,
        private _routerClient: RouterClient,
        private _storeClient: StoreClient,
        private _gameController: GameController,
        private _itemController: ItemController,
    ) {}

    public async createSellItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._itemService.createItem(this._storeClient.sellStore.sellItem)
        this._storeClient.sellStore.setSellItemRaw(itemRaw)
    }

    public async deleteSellItem(): Promise<void> {
        await this._itemService.deleteItem(this._routerClient.getRouteParam("itemId"))
        this._storeClient.sellStore.$dispose()
    }

    public async editSellItem(): Promise<void> {
        let itemRaw: ItemRaw = await this._itemService.editItem(
            this._routerClient.getRouteParam("itemId"),
            this._storeClient.sellStore.sellItem,
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
                type: this._routerClient.getRouteParam("itemType"),
            },
        })
    }
}
