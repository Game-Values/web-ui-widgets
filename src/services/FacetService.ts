import type {
    FacetedSearchApiV1ItemsSearchPostDataRaw,
    FacetedSearchApiV1ItemsSearchPostPayloadRaw,
} from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"
import type { FacetQuery, FacetResult } from "~/types"

export class FacetService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async search<T>(payload: Partial<FacetQuery>): Promise<FacetResult<T>> {
        let { data }: HttpResponse<FacetResult<T>> = await (
            this._apiAdapter.facetedSearchApiV1ItemsSearchPost(payload as FacetedSearchApiV1ItemsSearchPostPayloadRaw)
        )

        return data
    }
}
