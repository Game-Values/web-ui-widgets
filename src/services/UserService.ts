import type { UserRaw, UserUpdateRaw } from "#schema/data-contracts"
import type { HttpResponse } from "#schema/http-client"
import type { ApiAdapter } from "~/adapters"

export class UserService {
    public constructor(
        private _apiAdapter: ApiAdapter,
    ) {}

    public async dislikeGameMe(payload: string): Promise<void> {
        await this._apiAdapter.dislikeGameEndpointApiV1UsersDislikeGamePost(payload)
    }

    public async fetchMe(): Promise<UserRaw> {
        let { data }: HttpResponse<UserRaw> = await this._apiAdapter.readUserApiV1UsersGet()

        return data
    }

    public async fetchUser(userId: string): Promise<UserRaw> {
        // this._apiAdapter.user

        // let { data }: HttpResponse<UserRaw> = await this._apiAdapter.readUserApiV1UsersGet()
        //
        // return data
    }

    public async likeGameMe(payload: string): Promise<void> {
        await this._apiAdapter.likeGameEndpointApiV1UsersLikeGamePost(payload)
    }

    public async updateMe(payload: UserUpdateRaw): Promise<UserRaw> {
        let { data }: HttpResponse<UserRaw> = await this._apiAdapter.updateUserApiV1UsersPut(payload)

        return data
    }
}
