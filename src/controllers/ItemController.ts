import type { StoreClient } from "#build/clients"
import type { ItemRaw } from "#schema/data-contracts"
import type { ItemService } from "~/services"

export class ItemController {
    public constructor(
        private _itemService: ItemService,
        private _storeClient: StoreClient,
    ) {}

    public async createItem(): Promise<void> {
        await this._itemService.createItem(
            this._storeClient.saleStore.saleItem,
        )
    }

    public async fetchGameItems(gameId: string): Promise<void> {
        let itemsRaw: ItemRaw[] = await this._itemService.fetchItems({ gid: gameId })
        this._storeClient.itemsGameStore.setItemsRaw(itemsRaw)
    }
}
