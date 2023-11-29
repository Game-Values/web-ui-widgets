import type { UserRaw } from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class UserService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async fetchUser(): Promise<UserRaw> {
        let { data }: HttpResponse<UserRaw> = await this._apiAdapter.readUserApiV1UsersGet()

        return data
    }
}
