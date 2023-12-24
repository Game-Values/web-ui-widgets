import type {
    FacetedSearchApiV1ItemsSearchGameIdPostDataRaw,
    FacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw,
    ItemRaw,
} from "#schema/data-contracts"
import type { ApiAdapter } from "~/adapters"
import type { StoreClient } from "~/clients"
import type { FacetQuery, FacetResult } from "~/types"

export class FacetController {
    public constructor(
        private _apiAdapter: ApiAdapter,
        private _storeClient: StoreClient,
    ) {}

    public async fetchFacets(gameId: string): Promise<void> {
        let facetsRaw: FacetedSearchApiV1ItemsSearchGameIdPostDataRaw = (
            await this._apiAdapter.getAvailableFacetsApiV1ItemsFacetsGameIdGet(gameId)
        )
        this._storeClient.facetsStore.setFacetsRaw(facetsRaw)
    }

    public async searchFacets(gameId: string, payload: FacetQuery = {}): Promise<void> {
        let searchRaw: FacetResult<ItemRaw[]> = (
            await this._apiAdapter.facetedSearchApiV1ItemsSearchGameIdPost(
                gameId,
                payload as FacetedSearchApiV1ItemsSearchGameIdPostPayloadRaw,
            )
        ) as FacetResult<ItemRaw[]>
        this._storeClient.facetsStore.setSearchRaw(searchRaw)
    }
}
