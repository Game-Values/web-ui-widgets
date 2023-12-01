import type { FullRequestParams } from "#schema/http-client"
import type { HttpAdapter } from "~/adapters"
import type { AsyncData } from "nuxt/dist/app"

import { default as hash } from "hash-sum"

export class HttpClient {
    public constructor(
        private _httpAdapter: HttpAdapter,
    ) {}

    public async request<T, E>(requestParams: FullRequestParams): Promise<{
        data: AsyncData<T, E>,
        error: AsyncData<T, E>,
    }> {
        let { data, error }: AsyncData<T, E> = await useAsyncData<T, E>(hash(requestParams), (
            (): Promise<T> => this._httpAdapter.request<T, E>(requestParams)
        ))

        return {
            data: getRef(data),
            error: getRef(error),
        }
    }
}
