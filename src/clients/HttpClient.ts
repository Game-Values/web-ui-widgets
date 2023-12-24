import type { FullRequestParams } from "#schema/http-client"
import type { HttpAdapter } from "~/adapters"
import type { Lazy } from "~/types"
import type { AsyncData } from "nuxt/dist/app"
import type { FetchError } from "ofetch"

import { default as hash } from "hash-sum"

export class HttpClient {
    public constructor(
        private _httpAdapter: HttpAdapter,
    ) {}

    private _resolveRequestParams(requestParams: FullRequestParams): FullRequestParams {
        if (isObject(requestParams.body))
            requestParams.body = cleanObject(requestParams.body)

        return requestParams
    }

    public async request<T, E extends FetchError>(requestParams: FullRequestParams): Promise<{
        data: AsyncData<T, E>,
        error: AsyncData<T, E>,
    }> {
        let key: string = hash(requestParams)
        let request: Lazy<T> = (
            (): Promise<T> => this._httpAdapter.request<T, E>(
                this._resolveRequestParams(requestParams),
            )
        )

        // todo: vue-query with progress
        let { data, error }: AsyncData<T, E> = await useAsyncData<T, E>(key, request)

        return (
            getRef(error)
                ? Promise.reject(getRef(error))
                : Promise.resolve(getRef(data))
        )
    }
}
