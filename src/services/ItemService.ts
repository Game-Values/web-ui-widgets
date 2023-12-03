import type {
    ItemCreateRaw,
    ItemRaw,
    ItemUpdateRaw,
    MsgRaw,
    ReadAllItemsApiV1ItemsAllGetParamsRaw,
} from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class ItemService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async createItem(payload: ItemCreateRaw): Promise<ItemRaw> {
        let { data }: HttpResponse<ItemRaw> = await this._apiAdapter.createItemApiV1ItemsItemPost(payload)

        return data
    }

    public async deleteItem(itemId: string): Promise<MsgRaw> {
        let { data }: HttpResponse<MsgRaw> = (
            await this._apiAdapter.deleteItemApiV1ItemsItemItemIdDelete(itemId)
        )

        return data
    }

    public async editItem(itemId: string, payload: ItemUpdateRaw): Promise<ItemRaw> {
        let { data }: HttpResponse<ItemRaw> = (
            await this._apiAdapter.updateItemApiV1ItemsItemItemIdPut(itemId, payload)
        )

        return data
    }

    public async fetchItem(itemId: string): Promise<ItemRaw> {
        let { data }: HttpResponse<ItemRaw> = await this._apiAdapter.readItemApiV1ItemsItemsItemIdGet(itemId)

        return data
    }

    public async fetchItems(payload: ReadAllItemsApiV1ItemsAllGetParamsRaw): Promise<ItemRaw[]> {
        let { data }: HttpResponse<ItemRaw[]> = await this._apiAdapter.readAllItemsApiV1ItemsAllGet(payload)

        return data
    }
}
