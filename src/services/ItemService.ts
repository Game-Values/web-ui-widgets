import type { ItemCreateRaw, ItemRaw } from "#schema/data-contracts"
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
}
