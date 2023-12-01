import type { UserRaw } from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class UserService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async dislikeGame(payload: string): Promise<void> {
        await this._apiAdapter.dislikeGameEndpointApiV1UsersDislikeGamePost(payload)
    }

    public async fetchUser(): Promise<UserRaw> {
        let { data }: HttpResponse<UserRaw> = await this._apiAdapter.readUserApiV1UsersGet()

        return data
    }

    public async likeGame(payload: string): Promise<void> {
        await this._apiAdapter.likeGameEndpointApiV1UsersLikeGamePost(payload)
    }

    // public async updateUser(payload: UserUpdateRaw): Promise<UserRaw> {
    //     let { data }: HttpResponse<UserRaw> = await this._apiAdapter.updateUserApiV1UsersPut(payload)
    //
    //     return data
    // }
}
