import type { ApiAdapter } from "~/adapters"

export class OrderService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}
}
