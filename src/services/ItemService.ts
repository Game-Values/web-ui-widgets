import type { ItemCreateRaw, ItemRaw, ReadAllItemsApiV1ItemsAllGetParamsRaw } from "#schema/data-contracts"
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

    // public async fetchItem(payload: ReadAllItemsApiV1ItemsAllGetParamsRaw): Promise<ItemRaw[]> {
    //     // let { data }: HttpResponse<ItemRaw[]> = await this._apiAdapter
    //     //
    //     // return data
    // }

    public async fetchItems(payload: ReadAllItemsApiV1ItemsAllGetParamsRaw): Promise<ItemRaw[]> {
        let { data }: HttpResponse<ItemRaw[]> = await this._apiAdapter.readAllItemsApiV1ItemsAllGet(payload)

        return data
    }
}
