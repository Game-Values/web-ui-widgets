import type { StoreClient } from "#build/clients"
import type { ItemService } from "~/services"

export class ItemController {
    public constructor(
        private _itemService: ItemService,
        private _storeClient: StoreClient,
    ) {}

    public async createItem(): Promise<void> {
        await this._itemService.createItem(
            this._storeClient.saleStore.item,
        )
    }
}
