import type { ItemRaw } from "#schema/data-contracts"
import type { StoreClient } from "~/clients"
import type { FacetService } from "~/services"
import type { FacetQuery, FacetResult } from "~/types"

export class FacetController {
    public constructor(
        private _facetService: FacetService,
        private _storeClient: StoreClient,
    ) {}

    public async search(payload: FacetQuery = {}): Promise<void> {
        let { results }: FacetResult<ItemRaw[]> = await this._facetService.search<ItemRaw[]>(payload)
        this._storeClient.itemsStore.setItemsRaw(results)
    }
}
