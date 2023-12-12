import type { StoreClient } from "#build/clients"
import type { ItemRaw, ReadAllItemsApiV1ItemsAllGetParamsRaw } from "#schema/data-contracts"
import type { ItemService } from "~/services"

export class ItemController {
    public constructor(
        private _itemService: ItemService,
        private _storeClient: StoreClient,
    ) {}

    public async fetchItem(itemId: string): Promise<void> {
        let itemRaw: ItemRaw = await this._itemService.fetchItem(itemId)
        this._storeClient.itemStore.setItemRaw(itemRaw)
    }

    public async fetchItems(payload: ReadAllItemsApiV1ItemsAllGetParamsRaw): Promise<void> {
        let itemsRaw: ItemRaw[] = await this._itemService.fetchItems(payload)
        this._storeClient.itemsStore.setItemsRaw(itemsRaw)
    }
}
