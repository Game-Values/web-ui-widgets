import type { FullRequestParams } from "#schema/http-client"
import type { HttpAdapter } from "~/adapters"
import type { AsyncData } from "nuxt/dist/app"

export class HttpClient {
    public constructor(
        private _httpAdapter: HttpAdapter,
    ) {}

    public async request<T, E>(requestParams: FullRequestParams): Promise<E | T> {
        let asyncData: AsyncData<T, E> = await this._httpAdapter.fetch<T, E>(requestParams)

        return useMerge(asyncData, {
            data: getRef(asyncData.data),
            error: getRef(asyncData.error),
        })
    }
}
