import type { StoreClient } from "#.build/clients"
import type { ItemRaw, ReadAllItemsApiV1ItemsAllGetParamsRaw } from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"

export class ItemController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async fetchItem(itemId: string): Promise<void> {
        let itemRaw: ItemRaw = await this._apiAdapter.readItemApiV1ItemsItemsItemIdGet(itemId)
        this._storeClient.itemStore.setItemRaw(itemRaw)
    }

    public async fetchItems(payload: ReadAllItemsApiV1ItemsAllGetParamsRaw): Promise<void> {
        let itemsRaw: ItemRaw[] = await this._apiAdapter.readAllItemsApiV1ItemsAllGet(payload)
        this._storeClient.itemsStore.setItemsRaw(itemsRaw)
    }
}
