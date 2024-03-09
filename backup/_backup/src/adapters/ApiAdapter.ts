import type { HttpClient } from "~/clients"
import type { Module } from "~/types"

import { Api } from "#schema/Api"

export class ApiAdapter extends Api {
    public constructor(
        private _httpClient: HttpClient,
    ) {
        super(_httpClient as never)
    }

    public async fetchJSON<T>(filename: string): Promise<T> {
        let { default: json }: Module<T> = await import(`~/json/${filename}.json`)

        return json
    }
}
