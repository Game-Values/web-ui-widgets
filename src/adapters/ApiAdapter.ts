import type { HttpClient } from "~/clients"
import type { MockName } from "~/mocks/types"
import type { Module } from "~/types"

import { Api } from "#schema/Api"

export class ApiAdapter extends Api {
    public constructor(httpClient: HttpClient) {
        super(httpClient)
    }

    public fetchMockJSON<T extends object>(mockName: MockName): Promise<T> {
        return import(`~/mocks/json/${mockName}.json`)
            .then((module: Module<T>): T => module.default)
    }
}
