import type { HttpClient } from "~/clients"

import { Api } from "#schema/Api"

export class ApiAdapter extends Api {
    public constructor(
        private _httpClient: HttpClient,
    ) {
        super(_httpClient as never)
    }
}
